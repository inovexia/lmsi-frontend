import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayout
