import React from 'react'
import styles from './Login.module.scss'

const LoginSuccess = ({authFunc}) => {

  return(
      <h5 className={styles.button} onClick={() => authFunc()}>
        Profile
      </h5>
  )
}

export default LoginSuccess