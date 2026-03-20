import React from "react";

const AutomationDuoTone = ({ size = 24, className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Gear */}
      <path
        d="M12 2.75l1.2 2.3c.2.4.7.6 1.1.6l2.6-.2.6 2.5-2.1 1.5c-.3.2-.5.7-.4 1.1l.6 2.4c.1.4.4.8.8.9l2.4.8-.9 2.4-2.5-.2c-.4 0-.8.2-1 .6l-1.3 2.2-2.2-1.3c-.3-.2-.8-.2-1.1 0l-2.2 1.3-1.3-2.2c-.2-.4-.6-.6-1-.6l-2.5.2-.9-2.4 2.4-.8c.4-.1.7-.5.8-.9l.6-2.4c.1-.4-.1-.9-.4-1.1L4.1 7.95l.6-2.5 2.6.2c.4 0 .9-.2 1.1-.6L9.6 2.75h2.4z"
        fill="currentColor"
        opacity="0.35"
      />

      {/* Inner Automation Core */}
      <circle cx="12" cy="12" r="3.2" fill="currentColor" />

      {/* Small nodes (automation effect) */}
      <circle cx="12" cy="5" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
      <circle cx="5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
};

export default AutomationDuoTone;
