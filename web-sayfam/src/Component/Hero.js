import * as React from "react";
import { ToggleContext } from "./Context";
import { enData, trData } from "../data";
function Hero() {
  const { language } = React.useContext(ToggleContext);
  const data = language === "en" ? enData : trData;
  return (
    <div className="xl:flex-row flex-col-reverse pt-[5rem] flex box-border dark:bg-fixed dark:bg-[#12121280] bg-[#F4F4F4] xl:pl-[17.6rem] md:pl-[5rem]  justify-items-end pl-[0.5rem] font-['Inter'] ">
      <div className=" xl:w-[53%] mr-[1rem] xl:mr-16 mt-[1rem]  md:mt-[5rem] xl:mt-[10.1rem] text-left box-border  ">
        <div className=" flex justify-center flex-col">
          <p className="font-[400] inline-block tracking-widest text-[20px] xl:text-[30px] leading-[36px] m-0 mb-[4.4rem] xl:mb-[8.1rem]">
            {language === "en" ? "Hi! 👋" : "Merhaba! 👋"}
          </p>
          <div className="font-[500] box-border m-0 tracking-[.01em] leading-[3rem] xl:leading-[64px] text-[2rem] md:text-[3rem] xl:text-[4.2rem] lg:text-left ">
            <div
              className={
                "xl:w-[14.4rem] w-[7rem] md:w-[9rem] h-[2rem] xl:h-[3.2rem] bg-[#E92577] rounded-[4px] xl:ml-[-1rem] ml-[-.7rem] mb-[-5.6rem] md:mb-[-6.8rem] xl:mb-[-11.2rem] mt-[-2.8rem]"
              }
            ></div>
            <p
              className={`${
                data.hero.length > 180 ? "text-[36px]" : "text-[42px]"
              } `}
            >
              {data.hero}
            </p>
          </div>
          <div>
            <div className="xl:mb-[1.6rem] text-center sm:text-left mt-[.1rem] xl:mt-[5.4rem]">
              <a
                href="https://www.linkedin.com/in/omurcanuslu/"
                className="mr-8"
              >
                <img src="./img/LinkedIn.png"></img>
              </a>
              <a className="" href="https://github.com/P4CKt">
                <img src="./img/github.png"></img>
              </a>
            </div>
          </div>
          <div className="xl:my-[2.4rem] mb-[1rem]">
            {language === "tr" ? (
              <p className="mr-8 leading-[32px] font-[400] tracking-normal pr-[1rem] lg:pr-[6.4rem] md:text-[14px] xl:text-[18px]">
                Şuan <span className="text-[#AF0C48]">Freelance</span> olarak
                <span className="text-[#AF0C48]">
                  {" "}
                  UX, UI, & Web Tasarım{" "}
                </span>{" "}
                Projelerinde Çalışıyor.
                <br /> Ekibine Davet Edebilirsin →
                <span className=" underline underline-offset-4 ">
                  <a className="text-[#AF0C48]" href={`mailto:${data.email}`}>
                    {data.email}
                  </a>
                </span>
              </p>
            ) : (
              <p className="mr-8 leading-[32px] font-[400] tracking-wider pr-[1rem] lg:pr-[6.4rem] md:text-[14px] xl:text-[18px]">
                Currently <span className="text-[#AF0C48]">Freelancing</span>{" "}
                for
                <span className="text-[#AF0C48]">
                  {" "}
                  UX, UI, & Web Tasarım{" "}
                </span>{" "}
                Project .<br /> Invite me to join your team →
                <span className="text-[#AF0C48] underline underline-offset-4 ">
                  {" "}
                  {data.email}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className=" xl:w-[47%]  flex justify-center xl:justify-items-stretchs ">
        <div className="md:mb-[1rem] ml-[0.8rem] xl:mb-[4rem] xl:items-center flex xl:ml-[3.2rem]">
          <img
            className="w-[60vw] max-w-[34rem] min-w-[26rem] mt-[3rem] shadow-[-20px_-18px_0px_rgba(233,37,119,1)] rounded-[22px] "
            src="./img/P4CK.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
