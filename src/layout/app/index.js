import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Sidebar from './sidebar'

const AppLayout = ({ children }) => {
  return (
    <div className={'app'}>
      <Header />
      <main>{children}</main>
      <Sidebar />
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
