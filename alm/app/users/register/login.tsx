/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import backgroundImage from "../../../public/images/bg-image-green.svg";
import Navbar from "@/app/components/Navbar";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye, FaSpinner } from "react-icons/fa";



const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  };

  return (
    <div className="bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,

        width: "100%", // Add this to make the background cover the entire width
        height: "100vh", // Add this to make the background cover the entire viewport height
      }} >
      <div className=" w-full ">
        <Navbar />
        <div />



        <div className="ml-[447px] pt-[100px] ">
          <h3 className="pt-20 text-[14px] text-[#2C2A3B] text-[400] font-Inter ml-[260px] ">
            Don't have a VFD e-sign account?
            <a href="#" className="text-[#188E47] text-[600] ml-2">
              Sign up
            </a>
          </h3>

          <div className=" border ml  mt-[27px] shadow-md  w-[545px] h-[617px] bg-white px-[84px]">
            <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">
              Log in
            </h1>
            <p className="mb-[23px] text-[16px] text-[400] text-[#4B5563]">
              {" "}
              Enter details below to login
            </p>
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
              <Link href="/users/forgotPassword">
                <div className="flex justify-end mt-[14px] mb-[14px]">
                  <span className="text-[14px] text-[500] text-[#188E47]">
                    Forgot password?
                  </span>
                </div>
              </Link>

              <button
                className="border bg-[#188E47] w-[378px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
                type="submit" onClick={handleLogin}
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin mx-auto w-[23px] h-[23px] " />
                ) : (
                  "Login"
                )}
              </button>
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
            <p className="mt-[47px] ml-10 text-[13px] text-[#2C2A3B]">
              By creating an account, you agree to VFD e-sign{" "}
              <p className="text-[13px]">
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

            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Login;
