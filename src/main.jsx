import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GitHubLink from './Components/GitHubLink.jsx'

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <App/>
        <GitHubLink/>
    </React.StrictMode>,
)
