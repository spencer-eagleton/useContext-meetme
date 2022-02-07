import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { useUser } from './context/UserContext'

function App() {
  // inital value should match the data type of end value
const { user } = useUser()

  return (
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
}

export default App
