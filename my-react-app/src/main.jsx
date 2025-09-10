import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './4-props/index.css'
import './index.css'
import App from './4-props/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
