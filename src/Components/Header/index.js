import React from 'react'
import Logo from '../../assets/images/logo.png'

const Header  = () => {
   
  return (
    <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    
                    <a href="index.html" class="logo">
                        <img src={Logo} alt=""/>
                    </a>
                    
                    
                    <ul class="nav">
                        <li><a href="/" class="active">QR Code Generator</a></li>
                        <li><a href="QRScanner" class="active">QR Code Scanner</a></li>
                        
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    
                </nav>
            </div>
        </div>
    </div>
  </header>
  )
}

export default Header 