"use client"
import React, {useState} from "react";
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {

	const { i18n } = useTranslation();

	const handleLanguageChange = (e) => {
		const newLang = e.target.value;
		i18n.changeLanguage(newLang);
		localStorage.setItem("lang", newLang);
	};

	return (
		<div className="flex items-center justify-between">
			<img className="h-6 pr-2" src="/images/globe.png" alt="Globe" />
			<select 
			value={i18n.language} 
			onChange={handleLanguageChange}
			className="appearance-none block py-0 px-4 rounded-full text-[#ADB7BE] bg-[#1A1A1A] sm:text-xl text-center hover:text-white hover:cursor-pointer"
			>
				<option className="font-sans	 text-[#ADB7BE]" value="en">English</option>
				<option className="font-sans text-[#ADB7BE]" value="pl">Polski</option>
				<option className="font-sans text-[#ADB7BE]" value="de">Deutsch</option>
				<option className="font-sans text-[#ADB7BE]" value="no">Norsk</option>
				<option className="font-sans text-[#ADB7BE]" value="ua">Українська</option>
			</select>
		</div>
		
	);
};

export default LanguageSelector;