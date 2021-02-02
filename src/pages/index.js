import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Header headerText="After Dark :)" />
      <p>Can't wait for this site to start running properly.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
