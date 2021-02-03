import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "white" }}>
      <Header headerText="After Dark :)" />
      <Link to="/contact/">Contact</Link>
      <p>Can't wait for this site to start running properly.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
