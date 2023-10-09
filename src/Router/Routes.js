import React from 'react'
import App from '../App'
import Proyect3D from '../Views/Proyect3D'
import PosSystem from '../Views/PosSystem'
import Developers from '../Views/Developers'
import SchoolBook from '../Views/SchoolBook'
import Cinteolt from '../Views/Cinteotl'
import Experiencia from '../Views/OpcionesMenu/Experiencia'
import Cursos from '../Views/OpcionesMenu/AcercaDe'
import Proyectos from '../Views/OpcionesMenu/Proyectos'
import AcercaDe from '../Views/OpcionesMenu/AcercaDe'
import Componentes from '../Views/OpcionesMenu/Componentes'

const routes = [
    /* Opciones del menu */
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/Experiencia',
        element: <Experiencia />,
    },
    {
        path: '/Proyectos',
        element: <Proyectos />,
    },
    {
        path: '/AcercaDe',
        element: <AcercaDe />,
    },
    {
        path: '/Componentes',
        element: <Componentes />,
    },
    {
        path: '/Cursos',
        element: <Cursos />,
    },
    /* Opciones de proyectos */
    {
        path: '/Developers',
        element: <Developers />,
    },
    {
        path: '/Cinteotl',
        element: <Cinteolt />,
    },
    {
        path: '/SCHOOLBOOK',
        element: <SchoolBook />,
    },
    {
        path: '/POSCRUD',
        element: <PosSystem />,
    },
    {
        path: '/Proyect3D',
        element: <Proyect3D />,
    }
];

export default routes;