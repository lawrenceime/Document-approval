import React from "react";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import backgroundImage from "../../../../public/images/welcome-green-LLXUqCdO3G.svg";

const modal = () => {
const backgroundStyle = {
backgroundImage : `url(${backgroundImage.src})`,
width : "166px",
height: "129px"

}

  return (
    <div>
      <div className="w-[584px] h-[512px] ">
        <div>
          <IoIosCloseCircleOutline className=" w-[70px] h-[70px] ml-[514px] stroke-none fill-current " />
        </div>
        <div className="border w-[527px] h-[429px] mt-[13px] mr-[57px] rounded-[8px]shadow-lg ">
          <div className="w-[395px] h-[344px]  my-[24px] mx-auto">
            <div className="w-[166px] h-[129px]  mx-auto" style={backgroundStyle}>
              
            </div>
            <div className="w-[240px] h-[68px] mx-auto my-[16px]"> 
            <h1 className="text-[24px] font-[700] font-body">Welcome Onboard, your role is<span className="text-[#BF9214]"> Manager</span>  </h1>
            </div>
            <div className="flex flex-col items-center w-[331px] h-[56px] mx-auto">
                <div className="text-[16px] font-[400] font-body"> You have access to add , remove and </div>
                <div className="text-[16px] font-[400] font-body ">edit users</div>
            </div>
            <div className="w-[395px] h-[43px] flex justify-center">
            <button className="bg-[#188E47] p-[12px] w-[185px] h-[45px] justify-center rounded-[8px] mt-[16px] text-white font-body">Create Signature</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
