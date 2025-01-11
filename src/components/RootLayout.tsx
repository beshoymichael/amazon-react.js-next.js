import Header from './header/Header'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'
import React, { ReactElement } from "react";

interface props{
    children:ReactElement
}


const RootLayout = ( {children}:props) => {
  return (
    <>
         <Header/>
         <BottomHeader/>
         {children}
         <Footer/>

    </>
  )
}

export default RootLayout
