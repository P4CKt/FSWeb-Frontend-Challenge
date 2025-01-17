import * as React from "react";
import { ToggleContext } from "./Context";
import { enData, trData } from "../data";
function Profile() {
  const { language } = React.useContext(ToggleContext);
  const data = language === "en" ? enData.profile : trData.profile;
  return (
    <div className="bg-[#F4F4F4] dark:bg-[#12121280] font-['Inter'] pt-4 sm:pt-6 xl:pt-12">
      <h1 className="font-[500] font-['Inter'] text-[2.4rem] xl:text-[36px] tracking-[.01em] leading-[2.2rem] xl:leading-[44px]">
        {language === "en" ? "Profile" : "Profil"}
      </h1>
      <div className="flex flex-col items-center md:items-start md:flex-row ">
        <div className=" xl:w-[52%] rounded-[12px] w-[80%] mx-[1rem] max-h-[49.9rem] max-w-[80rem] lg:ml-[19.2rem] mb-[2rem] md:mb-[6.4rem] dark:bg-[#1212120a] bg-[#FFFFFF] md:shadow-[9px_9px_0px_rgba(82,82,82,0.5)] dark:md:shadow-[9px_9px_0px_rgba(82,82,82,0.2)] ">
          <div className=" font-[400] text-[1rem] sm:text-[1.3rem] xl:text-[18px] mr-36  ml-16">
            <h2 className="font-['Playfair-Display'] mt-[3.6rem] mb-[3.2rem] text-[1.8rem] xl:text-[2.4rem] font-[400] tracking-[.01em] text-left  leading-[1.6rem]  xl:leading-[32px] dark:text-[#ea2678a3] text-[#EA2678]">
              {language === "en" ? "Basic Information" : "Hakkımda"}
            </h2>
            <div className="flex text-left ">
              <p className="font-[600]  flex-1 mt-0 my-[1.2rem] ">
                {language === "en" ? "Born" : "Doğum Tarihi"}
              </p>
              <p className=" mt-0 ml-[2rem] my-[1.2rem] flex-1 ">{data.born}</p>
            </div>
            <div className="flex text-left ">
              <p className="font-[600]  my-[1.2rem]  flex-1 ">
                {" "}
                {language === "en" ? "Address" : "İkame Şehri"}
              </p>
              <p className="  ml-[2rem] my-[1.2rem] flex-1 ">{data.Address}</p>
            </div>
            <div className="flex text-left ">
              <p className="font-[600]  my-[1.2rem] flex-1 ">
                {" "}
                {language === "en" ? "Education" : "Eğitim Durumu"}
              </p>
              <p className=" my-[1.2rem] text-left ml-[2rem] flex-1 ">
                {data.education}
              </p>
            </div>
            <div className="flex text-left  mb-[2.5rem]">
              <p className="font-[600] flex-1 my-[1.2rem] ">
                {language === "en" ? "Preferred Role" : "Tercih Ettiği Rol"}
              </p>
              <p className="  my-[1.2rem] flex-1 ml-[2rem]"> {data.role}</p>
            </div>
          </div>
        </div>
        <div className=" w-[48%] sm:ml-[2rem] md:ml-[5.8rem] text-[1rem] sm:text-[1.3rem] lg:text-[18px] text-left leading-normal sm:mr-[10rem] lg:mr-[21.6rem]">
          <h2 className="font-['Playfair-Display'] tracking-[.01em]  text-[24px] font-[400] sm:pt-[1.6rem] leading-[3.2rem]">
            {language === "en" ? "About me" : "Hakkımda"}
          </h2>
          <div
            className={
              "xl:w-[14.4rem] w-[7rem] md:w-[9rem] h-[2rem] xl:h-[3.2rem] dark:bg-[#82baff92] bg-[#82BBFF] rounded-[4px] ml-[-1rem]  mb-[-2.6rem]  mt-[-3.4rem]"
            }
          ></div>
          <div className="md:mt-[4.2rem] mt-[3.2rem] ">
            <p className="font-[400] font-['Inter']   tracking-[.01em] ">
              {data.fme}
            </p>
            <p className="font-[400] font-['Inter']  tracking-[.01em] ">
              {data.sme}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
