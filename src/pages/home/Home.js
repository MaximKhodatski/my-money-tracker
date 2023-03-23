import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/udeCollection'

//styles
import styles from './Home.module.css'

import React from 'react'

//components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('transactions')


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
        transaction list
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/> 
      </div>
    </div>
  )
}
