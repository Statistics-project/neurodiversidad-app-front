import type { SVGProps } from 'react';

export const CrustIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    {...props}
  >
    <circle cx="50" cy="50" r="48" fill="none" stroke="#A16207" strokeWidth="4" />
    <circle cx="50" cy="50" r="40" fill="#FBBF24" />
  </svg>
);