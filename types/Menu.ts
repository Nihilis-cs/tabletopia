import { ReactNode } from "react";

export interface MenuEntry {
    key: number;
    label: string;
    icon: ReactNode;
    href: string;
}