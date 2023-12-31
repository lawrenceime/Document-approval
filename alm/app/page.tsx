import React from 'react'

// import HomeNav from '../app/components/homeNav'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className='md:mx-[173px]'>
        <div className="lg:flex lg:flex-row lg:w-[1094px]  lg:h-[183px]  gap-[24px] mt-[40px]">
          <div className="relative rounded-[8px] lg:w-[535px] lg:h-[183px] bg-[#666DB2] lg:flex lg:items-end lg:justify-end">
            <div className="lg:w-[340px] lg:h-[126px] lg:ml-[21px] my-[28px] ">
              <div className="w-[238px] h-[34px] text-white font-body">
                Need help getting started ?
              </div>
              <div className="lg:w-[340px] lg:h-[48px] text-[14px] text-white font-body">
                See steps by steps guide on how to sign your documents with ease
                on VFD document sign
              </div>
              <div className="flex flex-row">
                <div className="w-[87px] h-[34px] flex items-center text-white font-body">
                  View steps
                </div>
                <div>
                  <Image
                    src="/images/arrow.svg"
                    alt="Logo"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
            <Image
              src="/images/notepad.png"
              alt="Logo"
              width={141}
              height={140}
            />
          </div>

          <div className="relative rounded-[8px] lg:w-[535px] lg:h-[183px] bg-[#568BF0] lg:flex lg:items-end lg:justify-end">
            <div className="w-[340px] h-[126px] ml-[21px] my-[28px] ">
              <div className="lg:w-[238px] lg:h-[34px] text-white font-body">
                Need help getting started ?
              </div>
              <div className="lg:w-[340px] lg:h-[48px] text-[14px] text-white font-body">
                See steps by steps guide on how to sign your documents with ease
                on VFD document sign
              </div>
              <div className="flex flex-row">
                <div className="w-[87px] h-[34px] flex items-center text-white font-body">
                  View steps
                </div>
                <div>
                  <Image
                    src="/images/arrow.svg"
                    alt="Logo"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
            <Image src="/images/robot.svg" alt="Logo" width={141} height={140} />
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:w-[1094px] lg:h-[70px] lg:mx-auto  lg:mt-[40px]">
          <div className="border flex flex-row w-[273.5px] h-[70px] items-center justify-center gap-[16px] bg-[#DADADA] ">
            <div className="w-[28px] h-[28px] ">
              <Image src="/images/pencil.svg" alt="Logo" width={28} height={28} />
            </div>
            <div className="flex flex-col w-[137px] h-[36px]">
              <div>Draft</div>
              <div className="mt-[2px] text-[14px] text-[#59595E]">
                4 documents
              </div>
            </div>
          </div>

          <div className="border flex flex-row w-[273.5px] h-[70px] items-center justify-center gap-[16px] ">
            <div className="w-[28px] h-[28px] ">
              <Image
                src="/images/book-content.svg"
                alt="Logo"
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col w-[137px] h-[36px]">
              <div>Waiting for you</div>
              <div className="mt-[2px] text-[14px] text-[#59595E]">
                5 documents
              </div>
            </div>
          </div>

          <div className="border flex flex-row w-[273.5px] h-[70px] items-center justify-center gap-[16px] ">
            <div className="w-[28px] h-[28px] ">
              <Image src="/images/user.svg" alt="Logo" width={28} height={28} />
            </div>
            <div className="flex flex-col w-[137px] h-[36px]">
              <div>Waiting for others</div>
              <div className="mt-[2px] text-[14px] text-[#59595E]">
                5 documents
              </div>
            </div>
          </div>

          <div className="border flex flex-row w-[273.5px] h-[70px] items-center justify-center gap-[16px]  ">
            <div className="w-[28px] h-[28px] ">
              <Image
                src="/images/check-circle.svg"
                alt="Logo"
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col w-[137px] h-[36px]">
              <div>finished</div>
              <div className="mt-[2px] text-[14px] text-[#59595E]">
                5 documents
              </div>
            </div>
          </div>
        </div>

        <div className="  border-dashed border-[5px] lg:w-[1094px] lg:h-[336px] lg:mt-[49px] ">
          <div className="lg:w-[449px] lg:h-[266px] mx-auto my-[35px]">
            <div className="lg:w-[432px] lg:h-[137px] mx-auto">
              <div className="lg:w-[432px] lg:h-[56px] ">
                <p className="text-[16px] font-body font-[500]">Drag and drop documents here or click the button below</p>
                <p className="text-[16px] font-body font-[400] px-5 ">Supported files: PDF, Word, PowerPoint, JPG, PNG</p>
              </div>
              <div className="lg:w-[406px] h-[43px] mx-auto mt-[38px] space-x-[38px]">
                <button className="rounded-[8px] p-[12px] bg-[#EBEBEB] w-[184px] h-[43px] text-[14px] font-[500] text-[#59595E] "> Create new document</button>
                <button className="rounded-[8px] p-[12px] bg-[#188E47] w-[184px] h-[43px] text-[14px] font-[500] text-white "> Upload document</button>
              </div>
            </div>

            <div className="lg:w-[412px] h-[24px] mx-auto mt-[24px] flex flex-row">
              <hr className="lg:w-[195px] my-auto border-[1px] text-[#D7DCE0]" />
              <p className="text-[14px] font-[400] font-body px-[5px] text-[#394455]">or</p>
              <hr className="w-[195px] my-auto border-[1px] text-[#D7DCE0]" />
            </div>

            <div className="lg:flex lg:flex-row lg:w-[449px] h-[57px] mt-[24px] gap-[35px]">
              <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/google-drive.svg"
                    alt="Logo"
                    width={20}
                    height={17.88909}
                  />
                </div>
                <div className="text-[14px] font-body font-[500] mt-[13px] text-[#59595E]">Google drive</div>

              </div>

              <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/onedrive.svg"
                    alt="Logo"
                    width={20}
                    height={12.8866}
                  />
                </div>
                <div className="text-[14px] font-body font-[500] mt-[18px] text-[#59595E]">One drive</div>

              </div>

              <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/sharepoint.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-[14px] font-body font-[500] mt-[13px] text-[#59595E]">Share point</div>

              </div>

              <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/scan-image.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-[14px] w-[105px] h-[24px] font-body font-[500] mt-[13px] text-[#59595E]">Document scan</div>

              </div>
            </div>

          </div>


        </div>

      </main>


      {/* <div className="w-[1440px] h-[1062px]">

        </div> */}




    </>
  );
}





