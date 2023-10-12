/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import backgroundImage from "../../../public/images/bg-image-green.svg";
import Navbar from "@/app/components/navbar";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";

const NewUserLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className="bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,

        width: "100%", // Add this to make the background cover the entire width
        height: "100vh", // Add this to make the background cover the entire viewport height
      }}
    >
      <div className=" w-full ">
        <Navbar />
      </div>

      <div className="ml-[447px] pt-[100px] ">
        <div className=" border   mt-[50px] shadow-md  w-[545px] h-[692px] bg-white px-[84px]">
          <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">Hi Mike</h1>
          <p className="mb-[23px] font-normal text-[16px] text-[400] text-[#4B5563]">
            {" "}
            You have been invited to join SmartTech Limited on VFD approval
            tool. Create your password to continue
          </p>
          <form>
            <div className="mb-[14px]">
              <input
                className="border bg-[#DADADA] rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="relative">
              <input
                className="border  rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create password"
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

              <Link href="/users/usersByAdminAuth">
              <button
              className="border bg-[#188E47] w-[378px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
              type="submit"
            >
              Next
            </button>
              </Link>
            
            <div className=" flex justify-center items-center mt-[14px] mb-[16px]">
              <div className="border-t border-gray-300 my-4"></div>

              <p className="text-[#394455]">or authenticate with</p>
              <div className="border-t border-gray-300 my-4"></div>
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
          <p className="mt-[47px]">
            By creating an account, you agree to VFD e-sign{" "}
            <Link className="text-blue-500 items-center pl-[25px]" href={"#"}>
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
  );
};

export default NewUserLogin;
