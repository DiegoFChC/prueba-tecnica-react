import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from './context/AppContext.tsx'
import { Loader, ModalWindow } from './components/index.ts'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <App />
      <Loader />
      <ToastContainer />
      <ModalWindow />
    </AppContextProvider>
  </StrictMode>
)
