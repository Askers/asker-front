import React from 'react';

const ShareSvg = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99864 0.00488281H14.9955C15.5452 0.00488281 15.9949 0.454602 15.9949 1.01425V6.01113C15.9949 6.56079 15.5452 7.0105 14.9955 7.0105C14.4459 7.0105 13.9961 6.56079 13.9961 6.01113V3.42275L8.70944 8.70944C8.52956 8.88933 8.27971 8.99926 7.99989 8.99926C7.45023 8.99926 7.00051 8.54954 7.00051 7.99989C7.00051 7.73005 7.11044 7.48021 7.30032 7.29033L12.587 2.00363H9.99864C9.44898 2.00363 8.99926 1.55391 8.99926 1.00426C8.99926 0.454602 9.44898 0.00488281 9.99864 0.00488281ZM2.00363 13.9961H10.998V9.24911L12.9968 7.25035V14.9955C12.9968 15.5452 12.547 15.9949 11.9974 15.9949H1.00426C0.454602 15.9949 0.00488281 15.5452 0.00488281 14.9955V4.00238C0.00488281 3.45273 0.454602 3.00301 1.00426 3.00301H8.75941L6.76066 5.00176H2.00363V13.9961Z"
    />
  </svg>
);

export default ShareSvg;