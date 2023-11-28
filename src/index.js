import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import './components/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       
                <Header/>
                <Home/>
               
                <Footer/>
           
    </React.StrictMode>,
)