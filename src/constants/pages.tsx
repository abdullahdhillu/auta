import AutomationDuoTone from "@/icons/automation-duotone-white";
import RocketDuoToneWhite from "@/icons/rocket-duotone-white";
import SettingDuoToneWhite from "@/icons/setting-duotone-white";
import HomeDuoToneWhite from "@/icons/home-duotone-white";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationDuoTone />,
  CONTACTS: <SettingDuoToneWhite />,
  INTEGRATIONS: <RocketDuoToneWhite />,
  SETTINGS: <SettingDuoToneWhite />,
  HOME: <HomeDuoToneWhite />,
};

export const PLANS = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Keyword-triggered DM responses",
      "Up to 100 automated replies",
      "Basic analytics dashboard",
      "Unlimited keyword responses",
      "Automated comment replies",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 1,000 automated replies",
      "Advanced analytics & insights",
      "AI-powered smart responses",
      "Priority support",
      "Custom response templates",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Everything in Pro",
      "Unlimited automated replies",
      "Dedicated account manager",
      "Custom AI training",
      "API access",
      "White-label options",
    ],
  },
];
