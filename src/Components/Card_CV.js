import React from 'react'

export default function Card_CV() {
  return (
    <div class="cardContainer">
<div className="card">
  <p className="city">Take a look at my CV</p>
  <p className="weather">-- Developer Web --</p>
  <a class="flex justify-center items-center text-white h-10 text-xl font-bold hover:text-yellow-500 "
            href="Documents/CV_JN.pdf" target="_blank">
            SEE CV
          </a>
    <div className="minmaxContainer">
      <div className="min">
        <p className="minHeading">Contact</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" fill="#FFFFFF"/></svg>
      </div>
      <div className="max"><p class="maxHeading">Experience</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7v15h24v-15h-24zm22 13h-20v-11h15v5l1.5-1.5 1.5 1.5v-5h2v11zm-13-14h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5z" fill="#FFFFFF"/></svg></div>
    </div>
    
</div>
</div>
  )
}
