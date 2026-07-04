import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-line">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-label text-faint">
            &copy; {currentYear} Alexander Xagoraris
          </p>
          <p className="font-mono text-[11px] uppercase tracking-label text-faint">
            Athens, Greece
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
