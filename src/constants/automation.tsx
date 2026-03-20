import { FaInstagram, FaPaperPlane, FaPlane, FaRobot } from "react-icons/fa";
import { v4 } from "uuid";

export type AutomationListenerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "SMARTAI" | "MESSAGE";
};

export type AutomationTriggerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "COMMENT" | "DM";
};

export const AUTOMATION_TRIGGERS: AutomationTriggerProps[] = [
  {
    id: v4(),
    label: "User comments on my post",
    icon: <FaInstagram className="text-xl text-[#7a43e8]" />,
    description: "Select if you want to automate comments on your post",
    type: "COMMENT",
  },
  {
    id: v4(),
    label: "User sends me a dm with keyword",
    icon: <FaInstagram className="text-xl text-[#7a43e8]" />,
    description: "Select if you want to automate dms on your profile",
    type: "DM",
  },
];

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: "Send the user a message",
    icon: <FaPaperPlane className="text-xl text-[#7a43e8]" />,
    description: "Enter the message that you want to send the user",
    type: "MESSAGE",
  },
  {
    id: v4(),
    label: "Let Smart Ai take over",
    icon: <FaRobot className="text-xl text-[#7a43e8]" />,
    description: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMARTAI",
  },
];
