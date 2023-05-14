import { useEffect, useState } from 'react'
import styles from './App.module.css'
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className={styles.app_container}>
      <LoginForm />
    </div>
  )
}

export default App;
