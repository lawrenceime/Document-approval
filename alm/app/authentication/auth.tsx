/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import backgroundImage from "../../public/images/bg-image-green.svg";
import Navbar from "@/app/components/navbar";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";

const Auth = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
            <div className="ml-[100px]">
              <h3 className="pt-20 mt-[102px] text-[14px] text-[400] font-Inter ml-[450px] font-normal  ">
                Already have a VFD e-sign account?
                <a href="#" className="text-[#188E47] text-[600] ml-2">
                  Login
                </a>
              </h3>

              <div className=" border justify-center mt-[20px] shadow-md  w-[749px] h-[552px] bg-white px-[84px]">
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
                      className="border rounded-[8px] text-[14px] w-[581px] h-[56px] mt-[0px] pl-[16px]"
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
                      className="border rounded-[8px] text-[14px] w-[581px] h-[56px] mt-[0px] pl-[16px]"
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
                  <div className="flex justify-end mt-[14px] mb-[14px]">
                    <span className="text-[14px] text-[500] text-[#188E47]">
                      Forgot password?
                    </span>
                  </div>
                  <button
                    className="border bg-[#188E47] w-[581px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
                    type="submit"
                  >
                    Login
                  </button>
                </form>

                <div className=" ml-[100px]">
                  <div className="mt-[40px] ">
                    By creating an account, you agree to VFD e-sign{" "}
                  </div>
                  <div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
