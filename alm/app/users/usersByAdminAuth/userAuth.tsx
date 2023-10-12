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
import { GrCircleInformation } from "react-icons/gr";

const UserAuth = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" bg-no-repeat bg-right "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,width: "100%", // Add this to make the background cover the entire width
        height: "100vh", // Add this to make the background cover the entire viewport height
      }} >
      <div className=" w-full ">
        <Navbar />
        
         </div>
        
            <div className=" pt-[222px] ml-[430px]">
              
              <div className=" border   shadow-md  w-[545px] h-[617px] bg-white px-[84px]">
                <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">
                  Set Authentication pin
                </h1>
                <p className="mb-[23px] text-[16px] text-[400] text-[#4B5563]">
                  {" "}
                  Create a pin below
                </p>

                <form>
                  <div className="relative mb-[20px]">
                    <input
                      className="border rounded-[8px] text-[14px] w-[392px] h-[56px] mt-[0px] pl-[16px]"
                      type={passwordVisible ? "text" : "password"}
                      id="pin"
                      name="pin"
                      placeholder="Enter four digit pin "
                      required
                    />

                    <button
                      className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                    <div className="flex flex-row ml-[3px] mt-[10px] ">
                      <GrCircleInformation
                        style={{
                          width: "15px",
                          height: "15px",
                          color: "#AAAAAA",
                          font: "light",
                        }}
                      />
                      <p className="text-[12px] text-[#AAAAAA] pl-[5px]">
                        Your PIN is essential for ensuring the security of your
                        signed documents
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      className="border rounded-[8px] text-[14px] w-[392px] h-[56px] mt-[0px] pl-[16px]"
                      type={passwordVisible ? "text" : "password"}
                      id="pin"
                      name="pin"
                      placeholder="Confirm four digit pin "
                      required
                    />
                    <button
                      className=" rounded-[8px] h-[56px] w-[56px] mt-[0px] flex items-center justify-center absolute right-0 top-0 text-[#59595E]"
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                    <div className="flex flex-row ml-[3px] mt-[10px] ">
                      <GrCircleInformation
                        style={{
                          width: "15px",
                          height: "15px",
                          color: "#AAAAAA",
                          font: "light",
                        }}
                      />
                      <p className="text-[12px] text-[#AAAAAA] pl-[5px]">
                        Your PIN is essential for ensuring the security of your
                        signed documents
                      </p>
                    </div>
                  </div>
                 
                  <button
                    className="border bg-[#188E47] w-[400px] h-[43px] items-center py-[12px] rounded-[8px] mt-[33px] text-white "
                    type="submit"
                  >
                    Login
                  </button>
                </form>

               <div className="ml-10">
               <div className="mt-[56px] text-[13px] ">
                    By creating an account, you agree to VFD e-sign{" "}
                  </div>
                  <div>
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
  );
};

export default UserAuth;
