import React from 'react'

export default function Card_CV() {
  return (
    <div className="flex relative items-center justify-center">
      <div className="flex flex-col items-center justify-between py-2.5 px-5 rounded-md relative w-65 h-64 border backdrop-blur-sm md: bg-[#092549b9] lg:bg-[#FFFFFF42]">
        <p className="text-white tracking-wider text-base font-bold">Take a look at my CV</p>
        <p className="text-sm text-gray-300 tracking-wider font-semibold">-- Developer Web --</p>
        <div className="notification text-xl">
          <span>S</span>
          <span>E</span>
          <span>E</span>
          <span>_</span>
          <span>C</span>
          <span>V</span>
        </div>
        <a className='pt-5' href="/JesusEcheverria.github.io/Documents/CV_JN.pdf" target="_blank">
          <svg className='w-9' viewBox="0 0 24 24" fillRule="evenodd">
            <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#FFFF00"/>
          </svg>

        </a>

        <div className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center py-4 w-1/2">
            <p className="text-sm text-white font-semibold">Contact</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" fill="#FFFFFF" /></svg>
          </div>
          <div className="flex items-center flex-col justify-center py-4 w-1/2"><p className="text-sm text-white font-semibold">Experience</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7v15h24v-15h-24zm22 13h-20v-11h15v5l1.5-1.5 1.5 1.5v-5h2v11zm-13-14h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5z" fill="#FFFFFF" /></svg></div>
        </div>
      </div>
    </div>
  )
}
