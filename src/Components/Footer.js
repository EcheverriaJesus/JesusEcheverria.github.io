import React from 'react'
import RedesSociales from './RedesSociales'

export default function Footer() {
  return (
    <div className='h-auto pt-10 w-full FondoF'>

      <figure className="custom-shape-divider-top-1689098760">
       {/*  <svg className='' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" fill={document.body.classList.contains('darkMode') ? '#000000' : '#FFFFFF'}></path>
        </svg> */}
      </figure>

      <div className='flex flex-col justify-center items-center border-b py-5 '>
        <h3 className='text-3xl text-white font-bold pb-3'>Contáctame</h3>
        <p className='text-sm text-white px-10 md:px-24'>- ✔️ EL TRABAJO ES MÁS FÁCIL EN EQUIPO 💼 -</p>
      </div>

      <section className='flex flex-col justify-center items-center md:grid grid-cols-2 px-24'>
        <div className='flex justify-center items-center flex-col h-auto gap-2 py-5'>
          <svg className='w-10 animate-bounce' viewBox="0 0 24 24"><path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002zm4.498-8.522v10.022h3.008l-4.507 4.751-4.507-4.751h3.008v-10.022z" fill="#FFFFFF" /></svg>
          <a className='flex justify-center items-center bg-white text-black text-xs w-28 h-8 rounded-md hover:scale-90 ease-in duration-300' href='mailto:jesus.echeverria017@gmail.com'>Enviar Mensaje</a>
        </div>
        <div className='flex flex-col justify-center items-center h-full w-full'>
          <h4 className='text-white font-semibold text-md pb-5'>Redes Sociales:</h4>
          <div className='flex gap-5'>
            <RedesSociales url="https://www.facebook.com/jesus.echeverria.10441861/" path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" size="w-6" />
            <RedesSociales url="" path="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" size="w-6" />
            <RedesSociales url="https://www.linkedin.com/in/jesus-echeverria/" path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" size="w-6" />
            <RedesSociales url="https://github.com/EcheverriaJesus" path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" size="w-6" />
            <RedesSociales url="https://www.instagram.com/jesus_echeverria_01/" path="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" size="w-6" />
          </div>
        </div>
      </section>
      <div className='flex justify-center items-center py-5 px-12 text-center md:px-24'>
        <h3 className='text-white text-xs font-mono'>HECHO CON REACT JS Y UNA GRAN PASIÓN POR EL DESARROLLO DE SOFTWARE... ⚛️ 💻</h3>
      </div>
      
    </div>
  )
}
