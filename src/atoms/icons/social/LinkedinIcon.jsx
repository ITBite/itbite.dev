import * as React from 'react';
import styles from '../Icons.module.scss';

export const LinkedinIcon = ({
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
      <rect
        x={36}
        y={36}
        width={184}
        height={184}
        rx={8}
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
        d="M120 112L120 176"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M88 112L88 176"
      />
      <path
        d="M120 140a28 28 0 0156 0v36"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <circle cx={88} cy={80} r={12} />
    </svg>
  );
};
