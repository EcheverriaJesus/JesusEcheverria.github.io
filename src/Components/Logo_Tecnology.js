import React from 'react';

export default function Logo_Tecnology(props) {
  return (
    <div className="flex justify-center items-center">
       <svg className="flex w-12 h-12 sm:w-20 h-20 md:w-28 h-28 App-logo" id="SvgjsSvg2170" viewBox="0 0 499.772 499.772">
        <path
          d="M492.692 223.646 394.345 52.979a53.123 53.123 0 0 0-46.08-26.667H151.572a53.12 53.12 0 0 0-46.08 26.027L7.145 223.006a53.333 53.333 0 0 0 0 53.333l98.347 170.667a53.332 53.332 0 0 0 46.08 26.453h196.693a53.334 53.334 0 0 0 46.08-25.813l98.347-170.667a53.76 53.76 0 0 0 0-53.333z"
          fill="url(&quot;#SvgjsLinearGradient2171&quot;)"></path>
        <defs>
          <linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient2171">
            <stop stopOpacity=" 1" stopColor="rgba(0, 227, 250)" offset="0"></stop>
            <stop stopOpacity=" 1" stopColor="#FFFFFF" offset="0.48"></stop>
            <stop stopOpacity=" 1" stopColor="#FFFFFF" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      <img className="flex absolute h-6 sm:h-12 md:h-14 lg:h-16 hover:grayscale cursor-pointer" src={ props.image} alt="" />
    </div>
  );
}
