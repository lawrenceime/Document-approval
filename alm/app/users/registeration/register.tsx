/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import backgroundImage from "../../../public/images/bg-image-green.svg";
import Navbar from "@/app/components/Navbar";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidLock } from "react-icons/bi";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedCompanySize, setSelectedCompanySize] = useState("");
  const companySizeOptions = [
    "1-50",
    "50-100",
    "100 - 250",
    "250 - 500",
    "above 500",
  ];

  return (
    <div
      className="bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,

        width: "100%", // Add this to make the background cover the entire width
        height: "100vh", // Add this to make the background cover the entire viewport height
      }}
    >
      <div className="w-full">
        <Navbar />
      </div>
      <h3 className="  w-[581px] text-right text-[14px] font-[400] text-[#2C2A3B] pt-[105px] mb-[20px] mx-auto">
        Already have a VFD e-sign account?
        <a href="#" className="text-[#188E47] text-[600] ml-2">
          Log in
        </a>
      </h3>
      <div>
        <div className="border bg-white shadow-lg w-[581px] h-[712px] mb-[172px] mx-auto">
          <div className="pt-[44px] pb-[40px] px-[84px]">
            <div>
              <h1 className="text-[28px] font-[700] text-[#2C2A3B] mb-[5px]">
                Sign up
              </h1>
              <p className="text-[#4B5563] text-[16px] font-[400]mb-[10px]">
                Enter details below to login
              </p>
            </div>
            <div>
              <form className="flex flex-row gap-[13px]">
                <input
                  className="px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  id="first"
                  name="first"
                  placeholder="First name"
                  type="
                  text
                  "
                  required
                />
                <input
                  className="px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  id="last"
                  name="last"
                  placeholder="Last name"
                  type="text"
                  required
                />
              </form>
              <form className=" relative flex flex-row gap-[13px] my-[13px]">
                <input
                  className="px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  id="name"
                  name="name"
                  placeholder="Company name"
                  required
                  type="
                  text
                  "
                />
                <input
                  className="px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  type={isDropdown ? "dropdown" : "text"}
                  id="name"
                  name="name"
                  placeholder="Company size"
                  required
                  value={selectedCompanySize || ""}
                  onChange={(e) => setSelectedCompanySize(e.target.value)}
                  onClick={() => setIsDropdown(!isDropdown)}
                />
                <button
                  className=" absolute right-0 top-1/2 transform -translate-y-1/2"
                  type="button"
                  onClick={() => setIsDropdown(!isDropdown)}
                >
                  <RiArrowDropDownLine
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#59595E",
                    }}
                  />
                </button>
                {isDropdown && (
                  <div
                    className="absolute ml-[215px] mt-10 border w-[200px] bg-white shadow-md rounded-md"
                    style={{
                      position: "absolute",
                      top: "15%", // Adjust this value to position the dropdown as needed
                      left: 0,
                      zIndex: 1,
                    }}
                  >
                    {companySizeOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 text-[#394455] text-[14px] cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setSelectedCompanySize(option);
                          setIsDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </form>
              <form className="flex flex-row gap-[13px] my-[13px]">
                <input
                  className="px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  id="email"
                  name="email"
                  placeholder="Business email"
                  type="email"
                  required
                />
                <input
                  className="px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  id="number"
                  name="number"
                  placeholder="Phone number"
                  type="text"
                  required
                />
              </form>
              <form className="relative">
                <input
                  className=" px-[16px] py-[12px] border w-full placeholder:text-[14px] placeholder:font-[600]"
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  type={passwordVisible ? "text" : "password"}
                  required
                />
                <button
                  className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </form>
              <div className="flex flex-row mt-[9.5px]">
                <BiSolidLock
                  style={{
                    width: "12px",
                    height: "12px",
                    color: "#AAAAAA",
                  }}
                />
                <p className="mb-[32px] pl-[5px] text-[#AAAAAA] font-[400]   text-[12px]">
                  {" "}
                  At least 6 characters: UPPER/lowercase and numbers{" "}
                </p>
              </div>
              <Link href="/users/authentication">
                <button
                  className="border bg-[#188E47] w-full items-center py-[12px] rounded-[8px] text-white "
                  type="submit"
                >
                  Next
                </button>
              </Link>

              <div className=" flex justify-center items-center mt-[14px] mb-[16px]">
                {/* <Image
                      src="/images/Line 4.svg" // Specify the path to your image within the 'public' directory
                      alt="Your Image"
                      width={50} // Set the desired width
                      height={50} // Set the desired height
                      className="text-[24px] ml-[12px]"
                    />{" "} */}
                <p className="text-[#394455]">or sign up with </p>
              </div>

              <div className="flex flex-row gap-[22px]">
                <div className=" border pr-[12px] py-[12px] flex flex-row gap-[12px] items-center text-[14px] w-[178px] h-[43px] ">
                  <FcGoogle className="text-[24px]  ml-[12px]" />
                  Google
                </div>
                <div className=" border flex flex-row gap-[12px] items-center text-[14px] pr-[12px] py-[12px]  w-[178px] h-[43px] ">
                  <Image
                    src="/images/logos_microsoft-icon.svg" // Specify the path to your image within the 'public' directory
                    alt="Your Image"
                    width={24} // Set the desired width
                    height={24} // Set the desired height
                    className="text-[24px] ml-[12px]"
                  />{" "}
                  <p>Microsoft</p>
                </div>
              </div>

              <div className="text-[13px] ml-10">
                <p className=" mt-[20px]  text-[#2C2A3B] text-[13px] ">
                  By creating an account, you agree to VFD e-sign{" "}
                </p>
                <Link
                  className="text-blue-500 items-center pl-[25px] text-[13px]"
                  href={"#"}
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link className="text-blue-500 text-[13px]" href={"#"}>
                  Privacy Policy
                </Link>{" "}

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
