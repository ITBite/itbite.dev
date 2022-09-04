import * as React from 'react';

export const LineIcon = ({ width = 34, height = 2, isDarkMode = false, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path stroke={isDarkMode ? "#FFFFFF" : "#2E2E2E"} strokeWidth={2} d="M0 1L34 1" />
    </svg>
  );
};
