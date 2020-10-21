import React from "react";
import { BiRss, BiDesktop } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiRoundTable } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";
import { IoMdWarning } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import SidebarLink from "../SidebarLink/SidebarLink";

export const SidebarNavTop = ({ slim, toggle }) => {
  return (
    <section className="sidebar_navigation">
      <SidebarLink text="Add Account" slim={slim} click={toggle}>
        <HiUserAdd />
      </SidebarLink>
      <SidebarLink text="Event Feed" slim={slim} click={toggle}>
        <BiRss />
      </SidebarLink>
      <SidebarLink text="Reports" slim={slim} click={toggle}>
        <AiOutlineAreaChart />
      </SidebarLink>
      <SidebarLink text="Big Screen" slim={slim} click={toggle}>
        <BiDesktop />
      </SidebarLink>
      <SidebarLink text="Meetings" slim={slim} click={toggle}>
        <GiRoundTable />
      </SidebarLink>
      <SidebarLink text="Team Members" slim={slim} click={toggle}>
        <TiGroup />
      </SidebarLink>
    </section>
  );
};

export const SidebarNavBottom = ({ slim, toggle }) => {
  return (
    <section className="sidebar_navigation">
      <SidebarLink text="Report Issue" slim={slim} click={toggle}>
        <IoMdWarning />
      </SidebarLink>
      <SidebarLink text="Log Out" slim={slim} click={toggle}>
        <CgLogOut />
      </SidebarLink>
    </section>
  );
};
