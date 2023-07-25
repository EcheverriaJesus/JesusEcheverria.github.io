import React from 'react'
import InformationProyect from '../Views/InformationProyect'
import { Carousel } from 'flowbite-react';
import ButtonIcon from '../Components/ButtonIcon';
import { TitleCinteolt } from '../Variables/Variables'

export default function Cinteotl() {
  return (
    <div className='flex flex-col h-screen w-full  pt-7 px-8 lg:px-24 md:pt-5 md:justify-start aparecer'>
    <InformationProyect/>

    <h3 className='text-center font-bold text-3xl pt-7 pb-4 md:text-5xl md:text-justify md:pb-3 lg:hidden'>CINTEOLT</h3>
    <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-14 lg:h-full'>
      <section className='flex h-72 w-full md:h-80 lg:h-5/6 rounded-lg FondoF'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteolt.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl2.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl3.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl4.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl5.png" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'> {TitleCinteolt} </h3>
        <h3 className='text-base text-justify font-semibold te border-b pb-5'>Este proyecto representó mi primera experiencia en el desarrollo web.</h3>
        <p className='text-base leading-6 text-gray-600'>Cinteotl se enfoca en la gestión integral de un restaurante. Durante este proyecto, se desarrolló la interfaz final para los clientes, que incluye un menú interactivo en línea, y también se implementó la sección del backoffice destinada a los administradores del restaurante.</p>
       <div className='flex justify-center pt-5 flotar'>
         <ButtonIcon url="https://github.com/EcheverriaJesus/Cinteotl" path="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" size="w-9" fill="#000000"/>
       </div>
      </section>
    </div>
  </div>
  )
}
