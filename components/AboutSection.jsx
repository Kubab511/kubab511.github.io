"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from "next-i18next";


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
        <li>Scout Leader - Polish Scouting Association - ZHP Irlandia</li>
      </ul>
    ),
  },
];

const TAB_DATA_PL = [
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
        <li>Inżynier Informatyki - TU Dublin</li>
        <li>Leaving Certificate (Matura) - Malahide Community School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Drużynowy - ZHP Irlandia</li>
      </ul>
    ),
  },
];

const TAB_DATA_DE = [
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
        <li>BSc Informatik - TU Dublin</li>
        <li>Leaving Certificate (Abitur) - Malahide Community School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Pfadfinderführer - ZHP Irlandia</li>
      </ul>
    ),
  },
];

const TAB_DATA_UA = [
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
        <li>Бакалавр інформатики - TU Dublin</li>
        <li>Leaving Certificate (ЗНО) - Malahide Community School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Пластунський Провідник - ZHP Irlandia</li>
      </ul>
    ),
  },
];

const TAB_DATA_NO = [
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
        <li>BSc Informatikk - TU Dublin</li>
        <li>Leaving Certificate (Vitnemål) - Malahide Community School</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Speiderleder - ZHP Irlandia</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const lang = localStorage.getItem("lang");
  const { t } = useTranslation();
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
        <Image className="rounded-lg" src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("about-me")}</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            {t("description")}          
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              {t("skills")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              {t("education")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {t("experience")}{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {lang === "en" &&
              TAB_DATA.find((t) => t.id === tab).content
            } {lang === "pl" &&
              TAB_DATA_PL.find((t) => t.id === tab).content
            } {lang === "de" &&
            TAB_DATA_DE.find((t) => t.id === tab).content
            } {lang === "no" &&
            TAB_DATA_NO.find((t) => t.id === tab).content
            } {lang === "ua" &&
            TAB_DATA_UA.find((t) => t.id === tab).content
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
