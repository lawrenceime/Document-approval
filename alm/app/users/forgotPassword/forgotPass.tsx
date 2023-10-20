/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import backgroundImage from "../../../public/images/bg-image-green.svg";
import Navbar from "@/app/components/Navbar";

import Image from "next/image";
import Link from "next/link";

const ForgotPass = () => {
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
        <div />

        <div className="ml-[447px] ">
          <h3 className="pt-[174px] text-[14px]  text-[#2C2A3B] text-[400] font-Inter ml-[260px] ">
            Don't have a VFD e-sign account?
            <a href="#" className="text-[#188E47] text-[600] ml-2">
              Sign up
            </a>
          </h3>

          <div className=" border ml  mt-[27px] shadow-md  w-[545px] h-[617px] bg-white px-[84px]">
            <h1 className="text-[28px] font-[700] mt-[56px] mb-[]">
              Forgot Password
            </h1>
            <p className="mb-[23px] text-[16px] text-[400] text-[#4B5563]">
              {" "}
              Please enter your registered email address here to reset password
            </p>
            <form>
              <div className="mb-[14px] mt-[35px]">
                <input
                  className="border rounded-[8px] text-[14px] w-[378px] h-[56px] mt-[0px] pl-[16px]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <Link href="/users/resetPassword">
                <button
                  className="border mt-[33px] bg-[#188E47] w-[378px] h-[43px] items-center py-[12px] rounded-[8px] text-white "
                  type="submit"
                >
                  Continue
                </button>
              </Link>

            </form>
            <div className="ml-10">
              <p className="mt-[201px] text-inter  font-normal text-[13px] text-[#2C2A3B]">
                By creating an account, you agree to VFD e-sign{" "}
              </p>
              <div className="text-[13px] text-[#2C2A3B] ">
                <Link className="text-blue-500 items-center pl-[25px] text-[13px]" href={"#"}>
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

export default ForgotPass;
