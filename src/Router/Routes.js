import React from 'react'
import App from '../App';
import Proyect3D from '../Views/Proyect3D';
import PosSystem from '../Views/PosSystem';
import Developers from '../Views/Developers';
import SchoolBook from '../Views/SchoolBook';
import Experiencia from '../Views/OpcionesMenu/Experiencia';
import Cinteolt from '../Views/Cinteotl';

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