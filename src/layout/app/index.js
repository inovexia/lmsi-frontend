import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
