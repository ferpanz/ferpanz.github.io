import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Proyects from '../components/Proyects'

const Home = () => {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row flex-md-row flex-column">
        {/* Sidebar: primero en desktop, segundo en mobile */}
        <div className="col-md-3 order-2 order-md-1 mt-md-3 ms-md-3">
          <SideBar />
        </div>
        {/* Header y Proyects: primero en mobile, segundo en desktop */}
        <div className="col order-1 order-md-2 m-md-3 d-flex flex-column">
          <Header />
          <Proyects />
        </div>
      </div>
    </div>
  )
}

export default Home