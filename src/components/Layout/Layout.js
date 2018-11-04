import React from 'react'

import Aux from '../../hoc/Aux'
import classes from './Layout.css'

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Container}>
      {props.children}
    </main>
  </Aux>
)

export default Layout
