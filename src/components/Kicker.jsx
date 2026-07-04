import React from "react";

// Section label: short brass rule + mono uppercase text
const Kicker = ({ children, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <span className="h-px w-10 bg-brass/60" aria-hidden="true"></span>
    <p className="font-mono text-xs uppercase tracking-label text-brass">
      {children}
    </p>
  </div>
);

export default Kicker;
