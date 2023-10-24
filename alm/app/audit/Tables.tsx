import React, { useState } from "react";
import { BiFilter, BiSearch, BiSort } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

interface TableRow {
  name: string;
  action: string; // Updated: Action Performed
  ipAddress: string; // Updated: IP Address
  timestamp: number; // Updated: Time Stamp
  email: string;
}

const Tables: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      name: "Chidinma Nwankwo",
      action: "Created a document",
      ipAddress: "192.168.1.1",
      timestamp: new Date("2023-01-15").getTime(),
      email: "chidinma@example.com",
    },
    {
      name: "Oluwafemi Adeboye",
      action: "Created a user",
      ipAddress: "192.168.1.2",
      timestamp: new Date("2023-01-16").getTime(),
      email: "oluwafemi@example.com",
    },
    {
      name: "Chukwuemeka Okafor",
      action: "Login",
      ipAddress: "192.168.1.3",
      timestamp: new Date("2023-01-17").getTime(),
      email: "chukwuemeka@example.com",
    },
    {
      name: "Nneka Eze",
      action: "Created a document",
      ipAddress: "192.168.1.4",
      timestamp: new Date("2023-02-05").getTime(),
      email: "nneka@example.com",
    },
    {
      name: "Abdul Suleiman",
      action: "Login",
      ipAddress: "192.168.1.5",
      timestamp: new Date("2023-02-10").getTime(),
      email: "abdul@example.com",
    },
    {
      name: "Chiamaka Okonkwo",
      action: "Created a user",
      ipAddress: "192.168.1.6",
      timestamp: new Date("2023-02-18").getTime(),
      email: "chiamaka@example.com",
    },
    {
      name: "Ezinne Ugwu",
      action: "Login",
      ipAddress: "192.168.1.7",
      timestamp: new Date("2023-03-25").getTime(),
      email: "ezinne@example.com",
    },
    {
      name: "Olumide Ojo",
      action: "Created a document",
      ipAddress: "192.168.1.8",
      timestamp: new Date("2023-04-01").getTime(),
      email: "olumide@example.com",
    },
    {
      name: "Ngozi Onyeka",
      action: "Created a user",
      ipAddress: "192.168.1.9",
      timestamp: new Date("2023-04-10").getTime(),
      email: "ngozi@example.com",
    },
    {
      name: "Ikenna Anozie",
      action: "Created a document",
      ipAddress: "192.168.1.10",
      timestamp: new Date("2023-05-05").getTime(),
      email: "ikenna@example.com",
    },
    {
      name: "Yusuf Ibrahim",
      action: "Login",
      ipAddress: "192.168.1.11",
      timestamp: new Date("2023-05-15").getTime(),
      email: "yusuf@example.com",
    },
    {
      name: "Chinenye Okoro",
      action: "Created a user",
      ipAddress: "192.168.1.12",
      timestamp: new Date("2023-05-20").getTime(),
      email: "chinenye@example.com",
    },
    {
      name: "Nkemjika Eze",
      action: "Login",
      ipAddress: "192.168.1.13",
      timestamp: new Date("2023-06-10").getTime(),
      email: "nkemjika@example.com",
    },
    {
      name: "Toluwalope Adebayo",
      action: "Login",
      ipAddress: "192.168.1.14",
      timestamp: new Date("2023-06-15").getTime(),
      email: "toluwalope@example.com",
    },
    {
      name: "Chidimma Okafor",
      action: "Created a document",
      ipAddress: "192.168.1.15",
      timestamp: new Date("2023-07-05").getTime(),
      email: "chidimma@example.com",
    },
    {
      name: "Amina Abubakar",
      action: "Created a user",
      ipAddress: "192.168.1.16",
      timestamp: new Date("2023-07-15").getTime(),
      email: "amina@example.com",
    },
    {
      name: "Emeka Nnamani",
      action: "Created a document",
      ipAddress: "192.168.1.17",
      timestamp: new Date("2023-08-05").getTime(),
      email: "emeka@example.com",
    },
    {
      name: "Lola Adebayo",
      action: "Login",
      ipAddress: "192.168.1.18",
      timestamp: new Date("2023-08-10").getTime(),
      email: "lola@example.com",
    },
    {
      name: "Ibrahim Mohammed",
      action: "Login",
      ipAddress: "192.168.1.19",
      timestamp: new Date("2023-09-10").getTime(),
      email: "ibrahim@example.com",
    },
    {
      name: "Chinyere Nwosu",
      action: "Created a document",
      ipAddress: "192.168.1.20",
      timestamp: new Date("2023-09-20").getTime(),
      email: "chinyere@example.com",
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
    const sorted = [...tableData]; // Create a new array for sorting
    if (sortType === "New-Old") {
      sorted.sort((a, b) => a.timestamp - b.timestamp);
    } else if (sortType === "Old-New") {
      sorted.sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortType === "Z-A" ){
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "A-Z")  {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setTableData(sorted); // Update tableData with the sorted data
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
            <option value="Created a document">Created a document</option>
            <option value="Created a user">Created a user</option>
            <option value="Login">Login</option>
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
              Action
            </th>
            <th className="text-left text-[#59595E] text-[14px]">
              IP Address
            </th>
            <th className="text-left text-[#59595E] text-[14px]">Timestamp</th>
            <th className="text-left text-[#59595E] text-[14px]">Email</th>
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
              <td
                className={`text-[14px] ${
                  row.action === "Created a document" ? "text-green-500" : "text-green-500"
                }`}
              >
                {row.action}
              </td>
              <td className="text-[14px]">{row.ipAddress}</td>
              <td className="text-[14px]">
                {new Date(row.timestamp).toLocaleDateString()}
              </td>
              <td className="text-[14px]">{row.email}</td>
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
