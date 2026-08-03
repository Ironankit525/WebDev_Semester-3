import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './Contesxt.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context.Provider value={"hii sir"}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </Context.Provider>
    
  </StrictMode>
)

