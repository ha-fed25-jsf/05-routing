import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router'
import './index.css'
import { routes } from './routes.jsx'

const router = createHashRouter(routes)

// RouterProvider måste finnas högst i hierarkin, annars fungerar inte routing alls.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
