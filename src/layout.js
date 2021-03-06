import React, { Component } from 'react'
import { Navbar } from './components/navbar'

class Layout extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container" style={styles.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 40
  }
}

export default Layout
