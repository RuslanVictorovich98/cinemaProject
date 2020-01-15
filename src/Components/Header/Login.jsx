import React from 'react'
import styles from './Login.module.scss'

const Login = ({authFunc}) => {

  return(
      <h5 className={styles.button} onClick={() => authFunc()}>
        Log in
      </h5>
  )
}

export default Login