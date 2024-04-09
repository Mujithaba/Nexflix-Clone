import React from "react"
import NavBar from "./Component/NavBar/NavBar"
import './App.css'
import Banner from "./Component/Banner/Banner"
import RowPost from "./Component/RowPost/RowPost"
import Footer from "./Component/Footer/Footer"
import {originals,action,romance,horror,comedy} from './urls'

function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Trending' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <Footer />
    </div>
  )
}

export default App
