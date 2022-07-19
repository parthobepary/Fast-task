import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-manage" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col text-left ml-6 mt-6">
          <label
            htmlFor="my-manage"
            className="btn btn-primary drawer-button lg:hidden text-right"
          >
            Open drawer
          </label>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-manage" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-gray-500 text-white">
            <li>
                <Link to='/dashboard/addlogo'>Add logo</Link>
                <Link to='/dashboard/addbaner'>Add banner</Link>
                <Link to='/dashboard/addmember'>Add team member</Link>
                <Link to='/dashboard/manage/manageall'>Manage</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
