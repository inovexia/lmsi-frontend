import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const AppLayout = ({ children }) => {
  return (
    <div className={'app'}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
