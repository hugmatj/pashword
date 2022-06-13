import React, { useEffect, useRef, useState } from "react";

const Section1 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="page-root flex gap-10 bg-gradient-to-tr from-[#0d0511] to-[#090e14] pt-20 text-slate-50 sm:gap-20 md:pt-0">
      <div className="z-10 px-2 text-center sm:px-0">
        <h1 className="z-10 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent xxs:text-5xl sm:text-8xl">
          Passwords are Dead
        </h1>
        <h2 className="z-10 text-base font-medium text-slate-500 xs:text-xl sm:text-3xl">
          Still stuck in the 90s?{" "}
          <span className="font-semibold text-slate-300">
            Pashword is the Future
          </span>
        </h2>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 px-2 sm:px-0 md:flex-row">
        <p className="w-full px-5 text-center text-base text-slate-300 sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-left">
          A Pashword is a unique cryptographically strong password that can only
          be generated by you.
          <br />
          <br />
          All you need to generate a Pashword is the website name, your
          account's username on that website and a secret key.
          <br />
          <br />
          If you ever lose your Pashword, just come back here and enter the same
          details to get the same Pashword without any hassle. No need for any
          Password Managers, ever!
        </p>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_wwboncdr.json"
          background="transparent"
          ref={ref}
          speed="1"
          loop
          autoplay
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </div>
    </section>
  );
};

export default Section1;
