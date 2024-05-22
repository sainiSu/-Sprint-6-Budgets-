import ReactDom from "react-dom/client";
import './index.css'
import App from './App'
import React from "react";

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)