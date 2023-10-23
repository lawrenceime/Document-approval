import React, { useState } from "react";
import { BiFilter, BiSearch, BiSort } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
export default function Tables() {
  const tableData = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      jobPosition: "UI Designer",
      role: "Member",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-123-4567",
      jobPosition: "Project Manager",
      role: "Manager",
    },
    {
      name: "Bob Wilson",
      email: "bob@example.com",
      phone: "111-222-3333",
      jobPosition: "Software Engineer",
      role: "Member",
    },
  ];
  const [selectedRows, setSelectedRows] = useState({});

  const toggleRowSelection = (name) => {
    setSelectedRows({
      ...selectedRows,
      [name]: !selectedRows[name],
    });
  };
  return (
    <div className="w-[1094px] mx-auto mt-[40px]">
      <div className="flex gap-[18px] mb-[16px]">
        <div
          style={{ position: "relative", width: "686px" }}
          className="border">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search for user by name"
            className=" w-[620px] p-2 pr-8 placeholder:text-[16px]"
          />
          <BiSearch
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "24px",
              height: "24px",
            }}
          />
        </div>

        <div className=" border flex justify-center items-center px-[16px]">
          <label>
            <BiFilter />
          </label>
          <select className="max-w-[186px] px-[16px] w-[186px] text-[16px]">
            <option value="" style={{ color: "#A0A3BD", fontSize: "16px" }}>
              All
            </option>
            <option value="Manager">Manager</option>
            <option value="Member">Member</option>
          </select>
        </div>
        <div className=" border flex justify-center items-center px-[16px]">
          <label htmlFor="sort-select">
            <BiSort />
          </label>
          <select id="sort-select" className="max-w-[186px] px-[16px] ">
            <option value="">New - Old</option>
            <option value="Manager">New-Old</option>
            <option value="Member">Old - New</option>
            <option value="Member">A- Z</option>
            <option value="Member">Z - A</option>
          </select>
        </div>
      </div>
      <table className="w-full border">
        <thead className="bg-[#EAECF0] my-[24px] mt-8">
          <tr className="mt-[16px]">
            <th>
              <input
                type="checkbox"
                name=""
                id=""
                className="border-gray-500"
              />
            </th>
            <th className="text-left text-[#59595E] text-[14px]">Name</th>
            <th className="text-left text-[#59595E] text-[14px] py-[16px]">
              Email Address
            </th>
            <th className="text-left text-[#59595E] text-[14px]">
              Phone Number
            </th>
            <th className="text-left text-[#59595E] text-[14px]">
              Job Position
            </th>
            <th className="text-left text-[#59595E] text-[14px]">Role</th>
          </tr>
        </thead>
        <tbody className="leading-10">
          {tableData.map((row, index) => (
            <tr key={index} className="border">
              <td className="pl-[24px]">
                <input
                  type="checkbox"
                  checked={selectedRows[row.name] || false}
                  onChange={() => toggleRowSelection(row.name)}
                  className="border-gray-500 x"
                />
              </td>
              <td className="text-[14px] py-[16px]">{row.name}</td>
              <td className="text-[14px]">{row.email}</td>
              <td className="text-[14px]">{row.phone}</td>
              <td className="text-[14px]">{row.jobPosition}</td>
              <span className="flex flex-row items-center justify-between pr-[10px]">
                <td className="text-[14px]">{row.role} </td>
                <SlOptions />
              </span>
            </tr>
          ))}
        </tbody>
      </table>
        <div className="w-full flex justify-between mt-[14px]">
          <div><p className="text-[14px] font-[500]">Page 1 of 100</p></div>
          <div>
            <button className="rounded-sm py-[8px] px-[14px] border text-[14px] mr-[12px]">Previous</button>
            <button  className="rounded-sm py-[8px] px-[14px] border text-[14px]">Next</button>
          </div>
        </div>
    </div>
  );
}
