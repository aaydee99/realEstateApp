// File: src/assets/icons/ServicesIcon.tsx

import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ServicesIcon = (props: { width?: number; height?: number; fill?: string }) => (
  <Svg
    width={props.width || 26}
    height={props.height || 24}
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M2.65455 20.0182H25.3455C25.5191 20.0182 25.6855 19.9492 25.8083 19.8265C25.931 19.7037 26 19.5372 26 19.3636C26 19.19 25.931 19.0236 25.8083 18.9008C25.6855 18.7781 25.5191 18.7091 25.3455 18.7091H24.2545V16.7455C24.2517 14.14 23.2583 11.6331 21.4756 9.73297C19.693 7.83283 17.2545 6.68162 14.6545 6.51273V4.30909H16.6182C16.7918 4.30909 16.9583 4.24013 17.081 4.11738C17.2038 3.99463 17.2727 3.82814 17.2727 3.65455C17.2727 3.48095 17.2038 3.31446 17.081 3.19171C16.9583 3.06896 16.7918 3 16.6182 3H11.3818C11.2082 3 11.0417 3.06896 10.919 3.19171C10.7962 3.31446 10.7273 3.48095 10.7273 3.65455C10.7273 3.82814 10.7962 3.99463 10.919 4.11738C11.0417 4.24013 11.2082 4.30909 11.3818 4.30909H13.3455V6.51273C10.7455 6.68162 8.30701 7.83283 6.52436 9.73297C4.74171 11.6331 3.74828 14.14 3.74545 16.7455V18.7091H2.65455C2.48095 18.7091 2.31446 18.7781 2.19171 18.9008C2.06896 19.0236 2 19.19 2 19.3636C2 19.5372 2.06896 19.7037 2.19171 19.8265C2.31446 19.9492 2.48095 20.0182 2.65455 20.0182ZM5.05455 16.7455C5.05455 14.373 5.99701 12.0977 7.67461 10.4201C9.35221 8.74246 11.6275 7.8 14 7.8C16.3725 7.8 18.6478 8.74246 20.3254 10.4201C22.003 12.0977 22.9455 14.373 22.9455 16.7455V18.7091H5.05455V16.7455ZM26 22.8545C26 23.0281 25.931 23.1946 25.8083 23.3174C25.6855 23.4401 25.5191 23.5091 25.3455 23.5091H2.65455C2.48095 23.5091 2.31446 23.4401 2.19171 23.3174C2.06896 23.1946 2 23.0281 2 22.8545C2 22.681 2.06896 22.5145 2.19171 22.3917C2.31446 22.269 2.48095 22.2 2.65455 22.2H25.3455C25.5191 22.2 25.6855 22.269 25.8083 22.3917C25.931 22.5145 26 22.681 26 22.8545Z"
      fill={props.fill || "#676D75"}
    />
  </Svg>
);

export default ServicesIcon;
