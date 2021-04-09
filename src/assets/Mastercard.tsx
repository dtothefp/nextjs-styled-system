import * as React from 'react';

const SvgMastercard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={props.width || 2500}
    height={props.height || 2500}
    fill={props.fill || '#000'}
    {...props}>
    <path d="M45 35c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V13c0-2.21 1.79-4 4-4h34c2.21 0 4 1.79 4 4z" fill="#3F51B5" />
    <path d="M40 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z" fill="#FFC107" />
    <path
      d="M22.016 30a9.956 9.956 0 01-1.176-2h5.324a9.946 9.946 0 00.637-2h-6.598A9.895 9.895 0 0120 24h7c0-.688-.07-1.355-.2-2h-6.6a9.948 9.948 0 01.64-2h5.324a9.956 9.956 0 00-1.176-2h-2.972c.433-.578.93-1.121 1.48-1.594A9.964 9.964 0 0017 14c-5.523 0-10 4.477-10 10s4.477 10 10 10c3.27 0 6.16-1.574 7.984-4z"
      fill="#FF3D00"
    />
  </svg>
);

export default SvgMastercard;
