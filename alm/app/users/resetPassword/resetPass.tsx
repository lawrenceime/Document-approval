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

const ResetPass = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-no-repeat bg-right"
    style={{
      backgroundImage: `url(${backgroundImage.src})`,

      width: "100%", // Add this to make the background cover the entire width
      height: "100vh", // Add this to make the background cover the entire viewport height
    }}>
      <div className=" w-full ">
        <Navbar />
        <div />

       
         
            <div className=" ml-[447px] ">
              <h3 className=" text-[14px] text-[#2C2A3B] text-[400] font-Inter ml-[250px]  font-normal pt-[174px] ">
                Don't have a VFD e-sign account?
                <a href="#" className="text-[#188E47] text-[600] ml-2">
                  Sign up
                </a>
              </h3>

              <div className=" border mt-[20px] shadow-md  w-[545px] h-[617px] bg-white px-[84px]">
                <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">
                    Reset Password
                </h1>
                <p className="mb-[23px] text-[16px] text-[400] text-[#4B5563]">
                  {" "}
                  Please set your new password
                </p>

                <form >
                  <div className="relative mb-[20px]">
                    <input
                      className="border rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
                      type={passwordVisible ? "text" : "password"}
                      id="pin"
                      name="pin"
                      placeholder="New Password"
                      required
                    />

                    <button
                      className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
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
                  </div>

                  <div className="relative">
                    <input
                      className="border rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
                      type={passwordVisible ? "text" : "password"}
                      id="pin"
                      name="pin"
                      placeholder="Confirm New Password "
                      required
                    />
                    <button
                      className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
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
                  </div>
                 
                  <button
                    className="border bg-[#188E47] w-[378px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
                    type="submit"
                  >
                    Continue
                  </button>
                </form>

                  <div className="ml-10" >
                  <div className="mt-[70px]  text-[13px]  text-[#2c2a3b] ">
                    By creating an account, you agree to VFD e-sign{" "}
                  </div>
                  <div className="text-[13px]  text-[#2c2a3b]">
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

export default ResetPass;
