import React from 'react';
import Link from 'next/link';

const dashboardNavbar = () => {
  return (
    <>
        <div className="relative w-[1088px] h-[60px]">
            <div className="fixed w-[1088px] h-[60px] top-0 left-0 bg-white rounded-[8px] shadow-[0px_30px_60px_#1f375526]">
                <div className="absolute w-[220px] h-[13px] top-[24px] left-[842px]">
                    <div className="top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#08a0f7] text-[13px] tracking-[0.50px] leading-[13px] absolute whitespace-nowrap">
                        Projects
                    </div>
                    <div className="top-0 left-[91px] opacity-60 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#121212] text-[13px] tracking-[0.50px] leading-[13px] absolute whitespace-nowrap">
                        Settings
                    </div>
                    <div className="top-0 left-[183px] opacity-60 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#121212] text-[13px] tracking-[0.50px] leading-[13px] absolute whitespace-nowrap">
                        Help
                    </div>
                </div>
                <div className="absolute w-[74px] h-[28px] top-[16px] left-[24px]">
                    <div className="top-[6px] left-[38px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#08a0f7] text-[12px] tracking-[0.50px] leading-[15px] absolute whitespace-nowrap">
                        TASK
                    </div>
                    <div className="absolute w-[30px] h-[28px] top-0 left-0">
                        {/* <div className="relative w-[28px] h-[28px] bg-[#08a0f7] rounded-[14px]">
                            <div className="w-[8px] top-[7px] left-[10px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[12.2px] tracking-[0.26px] leading-[13.1px] absolute whitespace-nowrap">
                                T
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="absolute w-[628px] h-[36px] top-[12px] left-[136px]">
                    <div className="relative w-[626px] h-[36px] bg-[#f4f7fc] rounded-[200px]">
                        <input className="top-[11px] left-[57px] opacity-50 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#121212] text-[12px] tracking-[0.50px] leading-[12px] absolute whitespace-nowrap" placeholder='search task'/>
                            {/* Search Task
                        </input> */}
                        {/* <img className="absolute w-[13px] h-[13px] top-[11px] left-[19px]" alt="Group" src="group-2.png" /> */}
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default dashboardNavbar