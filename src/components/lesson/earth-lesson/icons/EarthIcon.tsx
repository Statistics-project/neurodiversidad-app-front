import type { SVGProps } from 'react';

export const EarthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    {...props}
  >
    <circle cx="50" cy="50" r="50" fill="#22C55E" />
    <path
      d="M50 0A50 50 0 0 0 0 50a50 50 0 0 0 50 50 50 50 0 0 0 50-50A50 50 0 0 0 50 0zm0 95a45 45 0 0 1-45-45 45 45 0 0 1 45-45 45 45 0 0 1 45 45 45 45 0 0 1-45 45z"
      fill="#16A34A"
    />
    <path
      d="M50 10a40 40 0 1 0 40 40 40 40 0 0 0-40-40zm-20 40c0-11.028 8.972-20 20-20s20 8.972 20 20-8.972 20-20 20-20-8.972-20-20z"
      fill="#3B82F6"
    />
    <path
      d="M50 20a30 30 0 1 0 30 30 30 30 0 0 0-30-30zm-10 30c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10z"
      fill="#60A5FA"
    />
  </svg>
);