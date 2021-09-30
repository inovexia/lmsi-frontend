import React from 'react'
import PropTypes from 'prop-types'

import SidebarLeft from './sidebar/left'
import SidebarRight from './sidebar/right'

const AppLayout = ({ children }) => {
  return (
    <div className={'app'}>
      <SidebarLeft />
      <main>{children}</main>
      <SidebarRight />
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
