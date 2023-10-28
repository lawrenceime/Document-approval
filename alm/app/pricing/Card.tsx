import React from 'react'
import Image from 'next/image'
import PricingCard from '../components/PricingCard'
import Proceed_button from "../components/Proceed_button"
const Card = () => {
    return (
      <div className='flex justify-center items-center'>
  <div className='lg:flex lg:justify-between lg:items-center gap-[32px] '>
            <PricingCard amount="₦ 5,000" plan="Free plan" bill="Billed annually.">
                <div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>No limit signed document</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>No limit on document upload</p>

                    </div>

                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>Up to 10 users can be added</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>Commenting</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>Unlimited mail sent</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>
                            Bulk user upload
                        </p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>
                            Custom branding
                        </p>

                    </div>




                </div>
                <Proceed_button text="Get Started" className='text-[#59595E] p-[12px] lg:w-[320px] rounded-[8px] bg-[#EBEBEB] mb-[32px]' />
            </PricingCard>


            <PricingCard amount="₦ 10,500" plan="Standard plan" bill="Billed annually." rating="" className='relative bg-[#FFFAE9] ' >
                <div>
                    <div className='flex justify-center items-center w-[145px] h-[31px] py-[2px] pl-[8px] pr-[6px] rounded-[16px] absolute top-[40px]  mx-[90px] bg-[#FFFAE9] ' >
                        <Image
                            src="/images/bxs-purchase-tag.svg"
                            alt=""
                            width={24}
                            height={24}
                            className=""

                        />
                        <p className="ml-[6px] text-[16px] border-0  font-semibold leading-[18px] font-[Inter] w-[120px] gradient">Most popular</p>
                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>No limit signed document</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>No limit on document upload</p>

                    </div>

                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>Up to 10 users can be added</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>Commenting</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>Unlimited mail sent</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>
                            Bulk user upload
                        </p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-brown.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='line-through'>
                            Custom branding
                        </p>

                    </div>




                </div>
                <Proceed_button text="Get Started" className='text-[#fff] p-[12px] lg:w-[320px] rounded-[8px] bg-[#188E47] mb-[32px]' />
            </PricingCard>


            <PricingCard amount="₦ 15,000" plan="Standard Pro plan" bill="Billed annually." className='relative bg-[#EEEDF8]'>
                <div>
                    <div className='flex justify-center items-center w-[145px] h-[31px] py-[2px] pl-[8px] pr-[6px] rounded-[16px] absolute top-[40px]  mx-[90px] bg-[#FFFAE9]' >
                        <Image
                            src="/images/bxs-purchase-tag.svg"
                            alt=""
                            width={24}
                            height={24}
                            className=""

                        />
                        <p className="ml-[6px] text-[16px] border-0  font-semibold leading-[18px] font-[Inter]  gradient" >Best Plan</p>
                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>No limit signed document</p>

                    </div>

                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>No limit on document upload</p>

                    </div>

                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>Up to 10 users can be added</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>Commenting</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>Unlimited mail sent</p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>
                            Bulk user upload
                        </p>

                    </div>
                    <div className='flex justify-start items-center gap-[12px] mb-[16px]'>
                        <div>
                            <Image
                                src="/images/bxs-check-color.svg"
                                alt="checked"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p>
                            Custom branding
                        </p>

                    </div>




                </div>
                <Proceed_button text="Get Started" className='text-[#fff] p-[12px] lg:w-[320px] rounded-[8px] bg-[#188E47] mb-[32px]' />
            </PricingCard>
        </div>
      </div>

      
    )
}

export default Card