import Head from 'next/head'
import React from 'react'
import Footer from './Shared/Footer'
import Navigation from './Shared/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Head>Discover NFTs and Verify NFTs</Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
