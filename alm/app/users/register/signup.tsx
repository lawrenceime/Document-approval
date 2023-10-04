/* eslint-disable react/no-unescaped-entities */

'use client'

import React, { useState } from "react";
import backgroundImage from "../../../public/images/alm_background.svg";
import Navbar from "@/app/components/navbar";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Newsignup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div className="fixed w-full ">
        <Navbar />
        <div />

        <div className="relative">
          <div
            className=" object-cover bg-no-repeat bg-right h-[931.684px] w-[1293.588px] absolute right-0 top-0"
            style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: "cover" }}
          >
            <div className="ml-[250px]">
              
                <h3 className="pt-20 text-[14px] text-[400] font-Inter ml-[300px] ">
                  Don't have a VFD account?
                  <a href="#" className="text-[#DD4F05] text-[600] ml-2">
                    Sign up
                  </a>
                </h3>
            
              <div className=" border ml  mt-[27px] shadow-md  w-[545px] h-[617px] bg-white px-[84px]">
                <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">Log in</h1>
                <p className="mb-[23px] text-[16px] text-[400] text-[#4B5563]"> Enter details below to login</p>
                <form>
                  <div className="mb-[14px]">
                    <input
                      className="border rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      className="border rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
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
                  <div className="flex justify-end mt-[14px] mb-[14px]">
                    <span className="text-[14px] text-[500] text-[#DD4F05]">Forgot password?</span>
                  </div>
                  <button
                    className="border bg-[#DD4F05] w-[378px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
                    type="submit"
                  >
                    Login
                  </button>
                  <div className=" flex justify-center items-center mt-[14px] mb-[16px]">
                    <p className="text-[#394455]">or authenticate with</p>
                  </div>
                </form>
                <div className="flex flex-row gap-[22px]">
                  <div className=" border pr-[12px] py-[12px] flex flex-row gap-[12px] items-center text-[14px] w-[178px] h-[43px] ">
                    <FcGoogle className="text-[24px] ml-[12px]" />
                    Google
                  </div>
                  <div className=" border flex flex-row gap-[12px] items-center text-[14px] pr-[12px] py-[12px]  w-[178px] h-[43px] ">
                    <Image
                      src="/images/microsoft_logo.svg" // Specify the path to your image within the 'public' directory
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
                  <Link className="text-blue-500 items-center pl-[25px]" href={"#"}>Terms & Conditions</Link> and{" "}
                  <Link className="text-blue-500" href={"#"}>Privacy Policy</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsignup;
