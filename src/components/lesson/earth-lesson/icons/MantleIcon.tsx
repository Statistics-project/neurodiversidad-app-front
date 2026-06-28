import type { SVGProps } from 'react';

export const MantleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    {...props}
  >
    <circle cx="50" cy="50" r="40" fill="none" stroke="#F97316" strokeWidth="4" />
    <circle cx="50" cy="50" r="32" fill="#FB923C" />
  </svg>
);