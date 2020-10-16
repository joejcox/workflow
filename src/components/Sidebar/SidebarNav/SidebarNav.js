import React from "react";
import { BiRss, BiDesktop } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiRoundTable } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";
import { IoMdWarning } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import SidebarLink from "../SidebarLink/SidebarLink";

export const SidebarNavTop = () => {
  return (
    <section className="sidebar_navigation">
      <SidebarLink text="Add Account">
        <HiUserAdd />
      </SidebarLink>
      <SidebarLink text="Event Feed">
        <BiRss />
      </SidebarLink>
      <SidebarLink text="Reports">
        <AiOutlineAreaChart />
      </SidebarLink>
      <SidebarLink text="Big Screen">
        <BiDesktop />
      </SidebarLink>
      <SidebarLink text="Meetings">
        <GiRoundTable />
      </SidebarLink>
      <SidebarLink text="Team Members">
        <TiGroup />
      </SidebarLink>
    </section>
  );
};

export const SidebarNavBottom = () => {
  return (
    <section className="sidebar_navigation">
      <SidebarLink text="Report Issue">
        <IoMdWarning />
      </SidebarLink>
      <SidebarLink text="Log Out">
        <CgLogOut />
      </SidebarLink>
    </section>
  );
};
