import React, { useState } from "react";
import { BiFilter, BiSearch, BiSort } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

interface TableRow {
  name: string;
  email: string;
  phone: string;
  jobPosition: string;
  role: string;
  timestamp:number
}

const Tables: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      name: "Ella Smith",
      email: "ella@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
      timestamp: new Date("2021-10-01").getTime(),
    },
    {
      name: "Liam Johnson",
      email: "liam@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
      timestamp: new Date("2022-03-15").getTime(),
    },
    {
      name: "Olivia Brown",
      email: "olivia@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
      timestamp: new Date("2020-12-05").getTime(),
    },
    {
      name: "Noah Wilson",
      email: "noah@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
      timestamp: new Date("2023-01-20").getTime(),
    },
    {
      name: "Ava Johnson",
      email: "ava@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Developer",
      role: "Manager",
      timestamp: new Date("2022-09-10").getTime(),
    },
    {
      name: "Mia Davis",
      email: "mia@example.com",
      phone: "987-654-3210",
      jobPosition: "UI Designer",
      role: "Member",
      timestamp: new Date("2021-11-30").getTime(),
    },
    {
      name: "Lucas Anderson",
      email: "lucas@example.com",
      phone: "555-123-4567",
      jobPosition: "Project Manager",
      role: "Manager",
      timestamp: new Date("2023-02-25").getTime(),
    },
    {
      name: "Sophia Miller",
      email: "sophia@example.com",
      phone: "111-222-3333",
      jobPosition: "Software Engineer",
      role: "Member",
      timestamp: new Date("2020-05-18").getTime(),
    },
    {
      name: "Emma White",
      email: "emma@example.com",
      phone: "555-555-5555",
      jobPosition: "Product Manager",
      role: "Manager",
      timestamp: new Date("2022-11-10").getTime(),
    },
    {
      name: "William Davis",
      email: "william@example.com",
      phone: "111-111-1111",
      jobPosition: "Web Developer",
      role: "Member",
      timestamp: new Date("2021-12-30").getTime(),
    },
    {
      name: "Aiden Martin",
      email: "aiden@example.com",
      phone: "123-456-7890",
      jobPosition: "Front-end Developer",
      role: "Member",
      timestamp: new Date("2022-08-10").getTime(),
    },
    {
      name: "Ella Harris",
      email: "ella@example.com",
      phone: "123-456-7890",
      jobPosition: "UI/UX Designer",
      role: "Member",
      timestamp: new Date("2023-10-05").getTime(),
    },
    {
      name: "Jackson Hall",
      email: "jackson@example.com",
      phone: "123-456-7890",
      jobPosition: "Software Engineer",
      role: "Manager",
      timestamp: new Date("2023-04-15").getTime(),
    },
    {
      name: "Madison King",
      email: "madison@example.com",
      phone: "123-456-7890",
      jobPosition: "Product Manager",
      role: "Manager",
      timestamp: new Date("2023-10-20").getTime(),
    },
    {
      name: "Liam Turner",
      email: "liam@example.com",
      phone: "123-456-7890",
      jobPosition: "Full-stack Developer",
      role: "Member",
      timestamp: new Date("2022-07-12").getTime(),
    },
    {
      name: "Olivia Parker",
      email: "olivia@example.com",
      phone: "123-456-7890",
      jobPosition: "Graphic Designer",
      role: "Member",
      timestamp:  new Date("2023-10-19").getTime(),
    },
    {
      name: "Noah Scott",
      email: "noah@example.com",
      phone: "123-456-7890",
      jobPosition: "Data Analyst",
      role: "Manager",
      timestamp: new Date("2023-03-01").getTime(),
    },
    {
      name: "Isabella Lee",
      email: "isabella@example.com",
      phone: "123-456-7890",
      jobPosition: "Project Coordinator",
      role: "Manager",
      timestamp: new Date("2022-04-22").getTime(),
    },
    {
      name: "James Baker",
      email: "james@example.com",
      phone: "123-456-7890",
      jobPosition: "Front-end Developer",
      role: "Member",
      timestamp: new Date("2022-12-14").getTime(),
    },
    {
      name: "Charlotte Phillips",
      email: "charlotte@example.com",
      phone: "123-456-7890",
      jobPosition: "Database Administrator",
      role: "Manager",
      timestamp: new Date("2021-03-09").getTime(),
    },
    {
      name: "Zharlotte Zhillips",
      email: "charlotte@example.com",
      phone: "123-456-7890",
      jobPosition: "Database Administrator",
      role: "Manager",
      timestamp: new Date("2023-05-20").getTime(),
    },
  ]);
  

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [sortType, setSortType] = useState<string | null>(null);
  
  const toggleRowSelection = (name: string) => {
    setSelectedRows({
      ...selectedRows,
      [name]: !selectedRows[name],
    });
  };

  const sortTable = () => {
    const sortedData = [...tableData];
    if (sortType === "New-Old") {
      sortedData.sort((a, b) => a.timestamp - b.timestamp);
    } else if (sortType === "Old-New") {
      sortedData.sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortType === "A-Z") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "Z-A") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    }
    setTableData(sortedData);
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
        <div style={{ position: "relative", width: "686px" }} className="border">
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
          <select
            id="sort-select"
            className="max-w-[186px] px-[16px]"
            onChange={(e) => {
              setSortType(e.target.value);
              sortTable();
            }}
          >
            <option value="">New - Old</option>
            <option value="Old-New">Old - New</option>
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
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
            Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
          </p>
        </div>
        <div>
          <button
            onClick={prevPage}
            className="rounded-sm py-[8px] px-[14px] border text-[14px] mr-[12px]"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="rounded-sm py-[8px] px-[14px] border text-[14px]"
            disabled={indexOfLastItem >= filteredData.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tables;
