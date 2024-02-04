import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-9 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-5 flex justify-between align-center">
        <Image
          src="/images/favicon.png"
          alt="Logo"
          width={50}
          height={50}
        />
        <p className="text-slate-600 mt-3">Copyright &#169; Jakub Barabasz 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
