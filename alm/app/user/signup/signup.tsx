/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import backgroundImage from "../../../public/images/bg-image-green.svg";
import Navbar from "@/app/components/navbar";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidLock } from "react-icons/bi";

const Signup = () => {
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
    <div>
      <div className=" w-full ">
        <Navbar />
        <div />

        <div className="relative">
          <div
            className=" object-cover bg-no-repeat bg-right h-[931.684px] w-[1293.588px] absolute right-0 top-0"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
            }}
          >
            <div className="ml-[250px]">
              <h3 className="pt-20 text-[14px] mt-[10px] text-[400] font-Inter ml-[300px] ">
                Don't have a VFD account?
                <a href="#" className="text-[#188E47] text-[600] ml-2">
                  Log in
                </a>
              </h3>

              <div className=" border mb-[30px]  mt-[20px] shadow-md  w-[545px] h-[750px] bg-white px-[84px]">
                <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">
                  Sign up
                </h1>
                <p className="mb-[23px] text-[16px] text-[400] text-[#4B5563]">
                  {" "}
                  Enter details below to login
                </p>
                <form className="">
                  <div className=" flex flex-col md:flex-row gap-[13px]">
                    <div className="mb-[14px]">
                      <input
                        className="border rounded-[8px] text-[14px] w-[189px] h-[56px] mt-[0px] pl-[16px]"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        className="border rounded-[8px] text-[14px] w-[189px] h-[56px] mt-[0px] pl-[16px]"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col md:flex-row gap-[13px]">
                    <div className="mb-[14px]">
                      <input
                        className="border rounded-[8px] text-[14px] w-[189px] h-[56px] mt-[0px] pl-[16px]"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Company name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        className="border rounded-[8px] text-[14px] w-[189px] h-[56px] mt-[0px] pl-[16px]"
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
                        className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
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
                          className="absolute mt-10 border w-[189px] bg-white shadow-md rounded-md"
                          style={{
                            position: "absolute",
                            top: "20%", // Adjust this value to position the dropdown as needed
                            left: 0,
                            zIndex: 1,
                          }}
                        >
                          {companySizeOptions.map((option) => (
                            <div
                              key={option}
                              className="px-4 py-2 text-[#394455] cursor-pointer hover:bg-gray-200"
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
                    </div>
                  </div>
                  <div className=" flex flex-col md:flex-row gap-[13px]">
                    <div className="mb-[14px]">
                      <input
                        className="border rounded-[8px] text-[14px] w-[189px] h-[56px] mt-[0px] pl-[16px]"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Business email"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        className="border rounded-[8px] text-[14px] w-[189px] h-[56px] mt-[0px] pl-[16px]"
                        type="text"
                        id="Phone no"
                        name="Phone no"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      className="border rounded-[8px] text-[14px] w-full h-[56px] mt-[0px] pl-[16px]"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                    <button
                      className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>

                  <div className="flex flex-row">
                    <BiSolidLock
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#59595E",
                      }}
                    />
                    <p className="mb-[32px] pl-[5px] text-[#AAAAAA] font-[12px]">
                      {" "}
                      At least 6 characters: UPPER/lowercase and numbers{" "}
                    </p>
                  </div>

                  <button
                    className="border bg-[#188E47] w-[378px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
                    type="submit"
                  >
                    Next
                  </button>
                  <div className=" flex justify-center items-center mt-[14px] mb-[16px]">
                    <p className="text-[#394455]">or sign up with </p>
                  </div>
                </form>
                <div className="flex flex-row gap-[22px]">
                  <div className=" border pr-[12px] py-[12px] flex flex-row gap-[12px] items-center text-[14px] w-[178px] h-[43px] ">
                    <FcGoogle className="text-[24px] ml-[12px]" />
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
                <p className=" mt-[20px]">
                  By creating an account, you agree to VFD e-sign{" "}
                  <Link
                    className="text-blue-500 items-center pl-[25px]"
                    href={"#"}
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link className="text-blue-500" href={"#"}>
                    Privacy Policy
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
