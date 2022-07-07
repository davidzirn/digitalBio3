import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
const ContactForm = () => {
  const validate = (values) => {
    const errors = {};

    if (values.fullName === "") {
      errors.fullName = "Required field";
    }
    if (values.phoneNumber === "") {
      errors.phoneNumber = "Required field";
    }
    if (values.email === "") {
      errors.email = "Required field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email format";
    }
    if (values.message === "") {
      errors.message = "Required field";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: { fullName: "", phoneNumber: "", email: "", message: "" },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div id="contact" className="w-[100%]    py-[150px]  relative">
      <div
        style={{ clipPath: "polygon(0 0, 0 15%, 100% 0)" }}
        className="h-[100%] w-[100%] absolute top-0 bg-black z-[2]"
      ></div>
      <Tilt tiltAxis="y" perspective={1500} scale={1.02} trackOnWindow={true}>
        <div
          style={{ boxShadow: "0px 0px 40px black" }}
          className=" w-fit mx-auto max-w-[700px] px-[50px] py-[50px] backdrop-blur-[10px] bg-[rgba(0,0,0,0.2)] rounded-[16px]"
        >
          <h3
            style={{ "-webkit-text-stroke": "1px white" }}
            className="text-center text-[120px] font-LG "
          >
            Contact me
          </h3>
          <p className="text-center text-[24px]   font-[400] text-white">
            If you are interested, feel free to write me an email. Just{" "}
            <span className="font-LG">click on the button</span>, or copy my
            adress:{" "}
            <span>
              <Link href="mailto:david.zirnsak@icloud.com">
                <a className="font-LG underline underline-offset-[5px]">
                  david.zirnsak@icloud
                </a>
              </Link>
            </span>
          </p>

          <div className="flex justify-center mt-[50px]">
            <Link href="mailto:david.zirnsak@icloud.com">
              <a>
                <button
                  style={{
                    clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)",
                  }}
                  className="px-[80px] hover:scale-[1.1] transition-all duration-[300ms] py-[10px] bg-black mx-auto text-white font-LG  text-[40px]"
                >
                  Write me an email
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Tilt>

      {/* <div
        style={{ clipPath: "polygon(0 0, 0 10%, 100% 0)" }}
        className="bg-black absolute top-0 left-0 w-[100%] h-[100%]"
      ></div>
      <div>
        <div className="w-fit mx-auto">
          <h3
            style={{ "-webkit-text-stroke": "1px white" }}
            className="text-center text-[120px] font-LG "
          >
            Contact me
          </h3>
          <div className="w-[100%] h-[5px] bg-white mt-[-25px]"></div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[900px] mx-auto mt-[100px]"
        >
          <div className="flex gap-[20px] w-[100%]">
            <div className="flex-1 relative ">
              <input
                type="text"
                name="fullName"
                className="w-[100%] border-[1px] border-white placeholder-[rgba(255,255,255,0.5)] outline-none text-[20px] bg-black text-white px-[20px] py-[10px]"
                placeholder="Full Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.fullName}
              ></input>
              <div className="absolute h-[20px] w-[20px]  right-[15px] top-[15px]">
                <Image width={20} height={20} src="/icons/user-2.svg" />
              </div>
              {formik.errors.fullName && formik.touched.fullName && (
                <div className="ml-[10px] bg-red-500 w-fit px-[10px] py-[1px] text-[12px] mt-[10px]">
                  <p className="text-white">{formik.errors.fullName}</p>
                </div>
              )}
            </div>

            <div className="flex-1  relative ">
              <input
                type="text"
                name="phoneNumber"
                className="w-[100%] border-[1px] border-white placeholder-[rgba(255,255,255,0.5)] outline-none text-[20px] bg-black text-white px-[20px] py-[10px]"
                placeholder="Phone number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.phoneNumber}
              ></input>
              <div className="absolute h-[20px] w-[20px]  right-[15px] top-[15px]">
                <Image width={20} height={20} src="/icons/phone-2.svg" />
              </div>
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <div className="ml-[10px] bg-red-500 w-fit px-[10px] py-[1px] text-[12px] mt-[10px]">
                  <p className="text-white">{formik.errors.phoneNumber}</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative  mt-[20px] ">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.email}
              type="text"
              name="email"
              className="w-[100%] border-[1px] border-white placeholder-[rgba(255,255,255,0.5)] outline-none text-[20px] bg-black text-white px-[20px] py-[10px]"
              placeholder="E-mail"
            ></input>
            <div className="absolute h-[20px] w-[20px]  right-[15px] top-[15px]">
              <Image width={20} height={20} src="/icons/at-sign.svg" />
            </div>
            {formik.errors.email && formik.touched.email && (
              <div className="ml-[10px] bg-red-500 w-fit px-[10px] py-[1px] text-[12px] mt-[10px]">
                <p className="text-white">{formik.errors.email}</p>
              </div>
            )}
          </div>
          <div className="relative mt-[10px]">
            <textarea
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.message}
              type="text"
              name="message"
              placeholder="Message"
              className="bg-black px-[20px] py-[10px] placeholder-[rgba(255,255,255,0.5)] text-white text-[20px] outline-none border-[1px] h-[200px] border-white w-[100%] mt-[10px]"
            />

            <div className="absolute h-[20px] w-[20px]  right-[15px] top-[25px] ">
              <Image width={20} height={20} src="/icons/message-square-2.svg" />
            </div>
            {formik.errors.message && formik.touched.message && (
              <div className="ml-[10px] bg-red-500 w-fit px-[10px] py-[1px] text-[12px] mt-[10px]">
                <p className="text-white">{formik.errors.message}</p>
              </div>
            )}
          </div>
          <div className="w-[100%] flex justify-end mt-[15px] ">
            <button
              type="submit"
              className="bg-white hover:scale-110 transition-all duration-[300ms] origin-right text-[30px] font-LG py-[10px] border-[2px] border-black text-black relative w-[300px] "
            >
              Send
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default ContactForm;
