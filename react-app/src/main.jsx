import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bootstrap CSS (styling/UI framework)
import 'bootstrap/dist/css/bootstrap.min.css'
// Global custom styles
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
