import React from 'react'
import CursoComponent from '../../Components/CursoComponent'
import TitleComponents from '../../Components/TitleComponents'

export default function Cursos() {
  return (
    <div>
      <TitleComponents title='Cursos'/>
      <div>   
        <CursoComponent title='CakePHP.' next='' year='2023' subtitle='CRUD con el Framework CakePHP' url='https://www.youtube.com/watch?v=5BX7EM_ksxs&list=LL&index=32' description='Como llevar a cabo la funcionalidad del acronimo CRUD sin usar librerías y de una manera muy sencilla.' habilitado='block'/>

        <CursoComponent title='React.js' next='' year='2023' subtitle='Scroll en React.js' url='https://www.youtube.com/watch?v=YeaEMOVGL6c&feature=youtu.be' description='Utiliza la librería React-Scroll para hacer scroll entre secciones en un proyecto de react.' habilitado='block'/>

        <CursoComponent title='Laravel' next='(Proximamente)...' year='2024' subtitle='Estructura del Framework Laravel' url='https://www.youtube.com/watch?v=YeaEMOVGL6c&feature=youtu.be' description='Conocer la estructura del Framework Laravel para tener una mejor idea de como es el funcionamiento de un proyecto en esta tecnología.' habilitado='hidden'/>

        <CursoComponent title='Electron.js' next='(Proximamente)...' year='2024' subtitle='Creación de un PosSystem' url='https://www.youtube.com/watch?v=YeaEMOVGL6c&feature=youtu.be' description='Obtener los conocimientos básicos para entener el ambiente del Framework Electron.' habilitado='hidden'/>
      </div>
    </div>
  )
}
