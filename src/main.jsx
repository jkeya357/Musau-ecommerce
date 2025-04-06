import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// {import App from './App.jsx';}
import 'react-multi-carousel/lib/styles.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './routes.jsx';
import Navigation from './components/Navigation/Navigation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Navigation/>
       {/* {<App />} */}
    </RouterProvider>
  </StrictMode>,
)
