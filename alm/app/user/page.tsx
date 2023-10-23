"use client"
import React from "react";
import Table from '../user/Tables'
const page = () => {
  return (
    <>
      <h1 className="ml-[173px] text-[#2C2A3B] text-[24px] font-[700] mt-[40px]">
        User Management
      </h1>
      <p className="text-[14px] font-[400] ml-[173px] mt-[6px] mb-[24px]">
        Manage users profile and activities with ease
      </p>

      <div className="flex flex-col md:flex-row gap-[28px] max-w-[1094px] mx-auto">
        <div className="bg-[#666DB2] text-white w-[592px]  py-[16px] px-[30px] rounded-lg ">
          <h2>User Metrics</h2>
          <div className="flex flex-row  justify-between text-[24px] my-[16px]">
            <p>100</p>
            <p>23</p>
            <p>77</p>
          </div>

          <div className="flex flex-row justify-between text-[14px]  ">
            <p>Total Users</p>
            <p>Managers</p>
            <p>Members</p>
          </div>
        </div>
        <div
          className="bg-[#FAF8FF] rounded-lg px-[30px] w-[484px] flex gap-[24px] items-center "
          style={{
            backgroundImage: 'url("/vector.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            
          }}>
          <div className="w-[240px] ">
            <h2 className="text-[18px] font-[700] text-[#0D0F11]  mb-[13px]">
              Add New Users
            </h2>
            <p className="text-[14px] font-[400] ">
              Invite and assign roles to members of your organization
            </p>
          </div>
          <div className="">
            <button className="bg-[#188E47]  w-[155px] py-[12px] text-white rounded-lg text-[14px]">
              Add new user
            </button>
          </div>
        </div>
      </div>
        <Table/>
      
    </>
  );
};

export default page;
