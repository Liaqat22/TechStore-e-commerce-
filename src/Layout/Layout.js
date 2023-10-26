import React from 'react'
import Footer from './Footer'
import Head from './Head'

function Layout({children}) {
  return (
    <>
      
<Head/>
      <main style={{minHeight:'80vh'}}>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
