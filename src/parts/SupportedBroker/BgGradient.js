import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const BgGradient = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <svg className={clsx(
        'w-full',
        'max-w-[1440px]',
        className
      )} width="1440" height="1070" viewBox="0 0 1440 1070" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3729_124053)">
          <g filter="url(#filter0_f_3729_124053)">
            <path d="M1548.31 811.983C1373.1 925.4 1202.37 1023.88 1131.72 1005.23C1061.08 986.569 1106.32 866.912 1232.78 737.964C1359.23 609.017 1670.17 635.309 1740.81 653.965C1811.45 672.622 1723.52 698.565 1548.31 811.983Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
          <g filter="url(#filter1_f_3729_124053)">
            <path d="M430.32 475.01C322.955 584.492 141.726 648.369 25.5333 617.683C-90.6593 586.998 -213.056 398.114 -105.691 288.633C1.67346 179.151 298.143 190.53 414.336 221.215C530.529 251.901 537.685 365.529 430.32 475.01Z" fill="url(#paint0_linear_3729_124053)" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3729_124053" x="690.371" y="230.314" width="1482.89" height="1185.19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3729_124053"/>
          </filter>
          <filter id="filter1_f_3729_124053" x="-647.055" y="-299.854" width="1653.44" height="1425.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3729_124053"/>
          </filter>
          <linearGradient id="paint0_linear_3729_124053" x1="203.95" y1="165.655" x2="471.234" y2="458.381" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
        </defs>
      </svg>
    )
    : md
      ? (
        <svg className={clsx(
          'w-full',
          'max-w-[834px]',
          className
        )} width="834" height="1646" viewBox="0 0 834 1646" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3730_124055)">
            <g filter="url(#filter0_f_3730_124055)">
              <path d="M326.324 241.545C218.959 452.517 37.7298 575.608 -78.4628 516.477C-194.655 457.346 -317.052 93.3661 -209.687 -117.606C-102.323 -328.578 194.147 -306.651 310.34 -247.519C426.532 -188.388 433.689 30.5733 326.324 241.545Z" fill="url(#paint0_linear_3730_124055)" fillOpacity="0.4"/>
            </g>
            <g filter="url(#filter1_f_3730_124055)">
              <path d="M969.496 1148.56C794.289 1367.11 623.554 1556.89 552.911 1520.94C482.267 1484.99 527.511 1254.41 653.966 1005.92C780.421 757.441 1091.35 808.107 1162 844.058C1232.64 880.009 1144.7 930.002 969.496 1148.56Z" fill="#6EBAF1" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3730_124055" x="-751.051" y="-788.119" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3730_124055"/>
            </filter>
            <filter id="filter1_f_3730_124055" x="111.559" y="405.898" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3730_124055"/>
            </filter>
            <linearGradient id="paint0_linear_3730_124055" x1="99.9542" y1="-354.585" x2="544.302" y2="-102.047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#829AF1"/>
              <stop offset="1" stopColor="#6066EB"/>
            </linearGradient>
          </defs>
        </svg>
      )
      : (
        <svg className={clsx(
          'w-full',
          'max-w-[375px]',
          className
        )} width="375" height="573" viewBox="0 0 375 573" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3730_124056)">
            <g filter="url(#filter0_f_3730_124056)">
              <path d="M269.063 293.168C190.493 447.557 57.8698 537.635 -27.1598 494.363C-112.189 451.091 -201.759 184.731 -123.19 30.3416C-44.6204 -124.047 172.336 -108.001 257.366 -64.7291C342.395 -21.457 347.632 138.779 269.063 293.168Z" fill="url(#paint0_linear_3730_124056)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3730_124056" x="-653.457" y="-594.439" width="1478.18" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3730_124056"/>
            </filter>
            <linearGradient id="paint0_linear_3730_124056" x1="103.406" y1="-143.08" x2="428.579" y2="41.7277" gradientUnits="userSpaceOnUse">
              <stop stopColor="#829AF1"/>
              <stop offset="1" stopColor="#6066EB"/>
            </linearGradient>

          </defs>
        </svg>
      )
}

BgGradient.propTypes = {
  className: PropTypes.string
}

export default BgGradient
