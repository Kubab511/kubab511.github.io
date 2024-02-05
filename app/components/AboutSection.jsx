"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Python</li>
        <li>C</li>
        <li>Go</li>
        <li>Rust</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>BSc Computer Science - TU Dublin</li>
        <li>Leaving Certificate - Malahide Community School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Scout Leader - Polish Scouting Association-ZHP Irlandia</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-lg" src="/images/about-image.jpg" alt="about-image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I&apos;m Kuba, a 19 year old computer science student at TU Dublin. My interests include cybersecurity and cryptography. I&apos;ve been learning computer science since high school where I received an award for the year&apos;s best computer science student. In my free time I enjoy hiking, photography and skiing.          
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
