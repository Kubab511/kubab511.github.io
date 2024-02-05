"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative m-auto"
    >
      <div className="z-9">
        <h5 className="text-xl font-bold text-white my-2">
          Have any questions?
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open. If you have any questions, I&apos;ll try my best to get back to you as soon as possible!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/Kubab511">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/kuba-barabasz/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
