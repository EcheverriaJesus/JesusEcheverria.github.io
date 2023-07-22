import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import Proyect3D from './Views/Proyect3D'
import PosSystem from './Views/PosSystem'
import Developers from './Views/Developers'
import SchoolBook from './Views/SchoolBook'
import Cinteolt from './Views/Cinteotl'
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Developers",
    element: <Developers />
  },
  {
    path: "/Cinteotl",
    element: <Cinteolt />
  },
  {
    path: "/SCHOOLBOOK",
    element: <SchoolBook />
  },
  {
    path: "/POSCRUD",
    element: <PosSystem />
  },
  {
    path: "/Proyect3D",
    element: <Proyect3D />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
