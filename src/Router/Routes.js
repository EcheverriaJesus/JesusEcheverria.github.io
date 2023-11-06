import React from 'react'
import App from '../App'
import Experiencia from '../Views/OpcionesMenu/Experiencia'
import Cursos from '../Views/OpcionesMenu/Cursos'
import Proyectos from '../Views/OpcionesMenu/Proyectos'
/* import AcercaDe from '../Views/OpcionesMenu/AcercaDe' */
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
    /* {
        path: '/AcercaDe',
        element: <AcercaDe />,
    }, */
    {
        path: '/Componentes',
        element: <Componentes />,
    },
    {
        path: '/Cursos',
        element: <Cursos />,
    }
];

export default routes;