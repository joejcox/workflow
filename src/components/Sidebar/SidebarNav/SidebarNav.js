import React from "react";
import { BiRss, BiDesktop } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiRoundTable } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";
import { IoMdWarning } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import SidebarLink from "../SidebarLink/SidebarLink";

export const SidebarNavTop = ({ slim }) => {
  return (
    <section className="sidebar_navigation">
      <SidebarLink text="Add Account" slim={slim}>
        <HiUserAdd />
      </SidebarLink>
      <SidebarLink text="Event Feed" slim={slim}>
        <BiRss />
      </SidebarLink>
      <SidebarLink text="Reports" slim={slim}>
        <AiOutlineAreaChart />
      </SidebarLink>
      <SidebarLink text="Big Screen" slim={slim}>
        <BiDesktop />
      </SidebarLink>
      <SidebarLink text="Meetings" slim={slim}>
        <GiRoundTable />
      </SidebarLink>
      <SidebarLink text="Team Members" slim={slim}>
        <TiGroup />
      </SidebarLink>
    </section>
  );
};

export const SidebarNavBottom = ({ slim }) => {
  return (
    <section className="sidebar_navigation">
      <SidebarLink text="Report Issue" slim={slim}>
        <IoMdWarning />
      </SidebarLink>
      <SidebarLink text="Log Out" slim={slim}>
        <CgLogOut />
      </SidebarLink>
    </section>
  );
};
