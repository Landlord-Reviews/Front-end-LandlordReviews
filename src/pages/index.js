import React from "react"
import Layout from "../components/Layout"
import * as classes from "../Styles/home.module.css"

export default function Home() {
  return(
    <Layout>
    <div className = {classes.Home}>
      <div className = {classes.container}>
        <img className = {classes.background_image} alt = ""></img>
          <h1 className = {classes.Hello}>Welcome.</h1>
          <h1>Find a landlord at Queen's University</h1>
      </div>
    </div>
    </Layout>
  )
}
