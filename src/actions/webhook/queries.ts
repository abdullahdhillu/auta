import { client } from "@/lib/prisma";

export const matchKeyword = async (keyword: string) => {
  return await client.keyword.findFirst({
    where: {
      word: {
        equals: keyword,
        mode: "insensitive",
      },
    },
  });
};

export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean,
) => {
  return await client.automation.findUnique({
    where: {
      id: automationId,
    },

    include: {
      dms: dm,
      trigger: {
        where: {
          type: dm ? "DM" : "COMMENT",
        },
      },
      listener: true,
      User: {
        select: {
          subscription: {
            select: {
              plan: true,
            },
          },
          integrations: {
            select: {
              token: true,
            },
          },
        },
      },
    },
  });
};

export const trackResponses = async (
  automationId: string,
  type: "COMMENT" | "DM",
) => {
  if (type === "COMMENT") {
    return await client.listener.update({
      where: {
        automationId,
      },
      data: {
        commentCount: { increment: 1 },
      },
    });
  }

  if (type === "DM") {
    return await client.listener.update({
      where: {
        automationId,
      },
      data: {
        dmCount: { increment: 1 },
      },
    });
  }
};

export const createChatHistory = (
  automationId: string,
  sender: string,
  reciever: string,
  message: string,
) => {
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      dms: {
        create: {
          reciever,
          senderId: sender,
          message,
        },
      },
    },
  });
};

export const getKeywordPost = async (postId: string, automationId: string) => {
  return await client.post.findFirst({
    where: {
      AND: [{ postid: postId }, { automationId }],
    },
    select: { automationId: true },
  });
};

export const getChatHistory = async (sender: string, reciever: string) => {
  const history = await client.dms.findMany({
    where: {
      OR: [
        { senderId: sender, reciever: reciever },
        { senderId: reciever, reciever: sender },
      ],
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      message: true,
      senderId: true,
      reciever: true,
      createdAt: true,
      automationId: true,
    },
  });

  // Map into OpenAI chat message format
  const formattedHistory = history.map((msg) => ({
    role: msg.senderId === sender ? "user" : "assistant",
    content: msg.message || "",
  }));

  return {
    history: formattedHistory, // now safe for OpenAI
    automationId: history[0]?.automationId || null,
  };
};
