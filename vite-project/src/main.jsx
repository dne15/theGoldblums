/**
 * Renders the main React application component to the DOM.
 *
 * This code sets up the root React component and renders it to the DOM element with the ID 'root'.
 * The `App` component is wrapped in the `StrictMode` component to enable additional runtime checks and warnings.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
