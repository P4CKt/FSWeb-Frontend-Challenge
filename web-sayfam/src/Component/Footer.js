import * as React from "react";
import { ToggleContext } from "./Context";
import { enData, trData } from "../data";
function Footer() {
  const { language } = React.useContext(ToggleContext);
  const data = language === "en" ? enData : trData;
  return (
    <div className="flex font-['Inter'] justify-center dark:bg-[#12121280] pb-[2.72rem] pt-[2rem] lg:pb-[18rem] lg:pt-[13.1rem]">
      <div className="flex xl:ml-[22.1rem] ml-[3rem] ">
        <h1 className=" my-0 font-[500] text-right xl:text-[4.2rem] lg:text-[3.2rem] md:text-[3rem] sm:text-[2.2rem] text-[2rem] leading-normal tracking-[.01em] ">
          Let’s
          <span className="xl:text-[4.2rem] lg:text-[3.2rem] md:text-[3rem] sm:text-[2.2rem] text-[2rem] leading-normal tracking-[.01em]">
            {" "}
            work together
            <div
              className={
                "xl:w-[27.5rem] w-[14rem] md:w-[18rem] lg:w-[20rem] h-[1rem] md:h-[1.4rem] lg:h-[1.8rem] bg-[#82BBFF] rounded-[4px] ml-[18rem] mb-[-.6rem] lg:mb-[-1.6rem] mt-[-1.4rem]  md:mt-[-1.6rem] lg:mt-[-2rem]"
              }
            ></div>
          </span>
          on your next product.
        </h1>
      </div>
      <div className="flex ml-[2rem] xl:ml-[5.92rem] text-left xl:text-[2.4rem] justify-center lg:text-[2rem] md:text-[1.6rem] sm:text-[1.2rem] text-[1rem] mr-[15rem] xl:mr-[34.1rem] font-[500] flex-col">
        <p className="text-[#1769FF] my-1">
          <a className="text-[#0077B5] no-underline " href={`${data.github}`}>
            Github
          </a>
        </p>
        <p className="my-1 	 ">Personal Blog</p>
        <p className=" my-1">
          <a className="text-[#0077B5] no-underline " href={`${data.linkedin}`}>
            Linkedin
          </a>
        </p>
        <p className=" my-1">
          <a
            className="text-[#AF0C48] no-underline "
            href={`mailto:${data.email}`}
          >
            Email
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
