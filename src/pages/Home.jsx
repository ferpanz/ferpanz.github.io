import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Proyects from '../components/Proyects'

const Home = () => {
  return (
    <div className="d-flex flex-row min-vh-100">
      <div className="col-md-3 mt-md-3 ms-md-3">
        <SideBar />
      </div>
      <div className="flex-grow-1 m-md-3 d-flex flex-column">
        <Header />
        <Proyects />
      </div>
    </div>
  )
}

export default Home