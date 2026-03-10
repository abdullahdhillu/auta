import AutomationDuoToneWhite from "@/icons/automation-duotone-white";
import HomeDuoToneWhite from "@/icons/home-duotone-white";
import RocketDuoToneWhite from "@/icons/rocket-duotone-white";
import SettingDuoToneWhite from "@/icons/setting-duotone-white";
import { v4 as uuid } from "uuid";

type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingDuoToneWhite />,
  },
];
