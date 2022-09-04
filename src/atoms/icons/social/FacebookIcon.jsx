import * as React from 'react';
import styles from '../Icons.module.scss';
export const FacebookIcon = ({
  width = 32,
  height = 32,
  isDarkMode = false,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      className={styles.iconStroke}
      {...props}>
      <circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <path
        d="M168 88h-16a23.9 23.9 0 00-24 24v112"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M96 144L160 144"
      />
    </svg>
  );
};
