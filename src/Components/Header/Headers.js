import React from 'react'
import styles from './Headers.module.scss'

import Login from './Login'
import LoginSuccess from './LoginSuccess'

const Headers = () => {
  const [auth, setAuth] = React.useState(false)

  const authFunc = () => {
    setAuth(!auth)
  }

  return (
    <div className={styles.headerMain}>
      <h2>CinemaHome</h2>
      {auth ? <LoginSuccess authFunc={authFunc} /> : <Login authFunc={authFunc} />}
      <input type='search' placeholder='Find...'/>
    </div>
  )
}

export default Headers