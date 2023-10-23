import React, { useState } from "react";
import { BiFilter, BiSearch, BiSort } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

interface TableRow {
  name: string;
  email: string;
  phone: string;
  jobPosition: string;
  role: string;
}

const Tables: React.FC = () => {
  const tableData: TableRow[] = [
    {
      name: "Ella Smith",
      email: "ella@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "Liam Johnson",
      email: "liam@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "Olivia Brown",
      email: "olivia@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "Noah Wilson",
      email: "noah@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "Ava Johnson",
      email: "ava@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
    },
    {
      name: "Mia Davis",
      email: "mia@example.com",
      phone: "987-654-3210",
      jobPosition: "UI Designer",
      role: "Member",
    },
    {
      name: "Lucas Anderson",
      email: "lucas@example.com",
      phone: "555-123-4567",
      jobPosition: "Project Manager",
      role: "Manager",
    },
    {
      name: "Sophia Miller",
      email: "sophia@example.com",
      phone: "111-222-3333",
      jobPosition: "Software Engineer",
      role: "Member",
    },
    // Add more entries here
    {
      name: "Emma White",
      email: "emma@example.com",
      phone: "555-555-5555",
      jobPosition: "Product Manager",
      role: "Manager",
    },
    {
      name: "William Davis",
      email: "william@example.com",
      phone: "111-111-1111",
      jobPosition: "Web Developer",
      role: "Member",
    },
    // Add more entries as needed
    {
      name: "Aiden Martin",
      email: "aiden@example.com",
      phone: "123-456-7890",
      jobPosition: "Front-end Developer",
      role: "Member",
    },
    {
      name: "Ella Harris",
      email: "ella@example.com",
      phone: "123-456-7890",
      jobPosition: "UI/UX Designer",
      role: "Member",
    },
    {
      name: "Jackson Hall",
      email: "jackson@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Engineer",
      role: "Manager",
    },
    {
      name: "Madison King",
      email: "madison@example.com",
      phone: "123-456-7890",
      jobPosition: "Product Manager",
      role: "Manager",
    },
    {
      name: "Liam Turner",
      email: "liam@example.com",
      phone: "123-456-7890",
      jobPosition: "Full-stack Developer",
      role: "Member",
    },
    {
      name: "Olivia Parker",
      email: "olivia@example.com",
      phone: "123-456-7890",
      jobPosition: "Graphic Designer",
      role: "Member",
    },
    {
      name: "Noah Scott",
      email: "noah@example.com",
      phone: "123-456-7890",
      jobPosition: "Data Analyst",
      role: "Manager",
    },
    {
      name: "Isabella Lee",
      email: "isabella@example.com",
      phone: "123-456-7890",
      jobPosition: "Project Coordinator",
      role: "Manager",
    },
    {
      name: "James Baker",
      email: "james@example.com",
      phone: "123-456-7890",
      jobPosition: "Front-end Developer",
      role: "Member",
    },
    {
      name: "Charlotte Phillips",
      email: "charlotte@example.com",
      phone: "123-456-7890",
      jobPosition: "Database Administrator",
      role: "Manager",
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  const toggleRowSelection = (name: string) => {
    setSelectedRows({
      ...selectedRows,
      [name]: !selectedRows[name],
    });
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filteredData = tableData.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
            className="w-[620px] p-2 pr-8 placeholder:text-[16px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

        <div className="border flex justify-center items-center px-[16px]">
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
        <div className="border flex justify-center items-center px-[16px]">
          <label htmlFor="sort-select">
            <BiSort />
          </label>
          <select id="sort-select" className="max-w-[186px] px-[16px]">
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
          {currentItems.map((row, index) => (
            <tr key={index} className="border">
              <td className="pl-[24px]">
                <input
                  type="checkbox"
                  checked={selectedRows[row.name] || false}
                  onChange={() => toggleRowSelection(row.name)}
                  className="border-gray-500"
                />
              </td>
              <td className="text-[14px] py-[16px]">{row.name}</td>
              <td className="text-[14px]">{row.email}</td>
              <td className="text-[14px]">{row.phone}</td>
              <td className="text-[14px]">{row.jobPosition}</td>
              <span className="flex flex-row items-center justify-between py-[16px] pr-[10px]">
                <td className="text-[14px]">{row.role} </td>
                <SlOptions />
              </span>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-between mt-[14px]">
        <div>
          <p className="text-[14px] font-[500]">
            Page {currentPage} of{" "}
            {Math.ceil(filteredData.length / itemsPerPage)}
          </p>
        </div>
        <div>
          <button
            onClick={prevPage}
            className="rounded-sm py-[8px] px-[14px] border text-[14px] mr-[12px]"
            disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={nextPage}
            className="rounded-sm py-[8px] px-[14px] border text-[14px]"
            disabled={indexOfLastItem >= filteredData.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tables;
