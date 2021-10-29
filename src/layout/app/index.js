import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import SidebarLeft from './sidebar/left'

const AppLayout = ({ children }) => {
  return (
    <div className={'app'}>
      <SidebarLeft />
      <main>
        <header>
          <Header />
        </header>
        <section className={'content container-fluid'}>{children}</section>
      </main>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
