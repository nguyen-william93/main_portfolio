import React from 'react'
import '../../App.css'

export default function Info() {
  return (
    <div className="container introduction">
      <div className="ml-5"></div>
      <div className="display-3 info" style={{ color: "white" }}>
        <span style={{ color: "white" }}>Hello, my name is</span> <br />
        William.
      </div>
      <div style={{ color: "rgb(6, 199, 6)" }} className="h1 code mt-4 mb-3">
        {"{"}
      </div>
      <div className="mx-5 my-4 h3 text-justify info">
        I really enjoy coding and learning new things.
        <br /> I strive to always learn more and improve as much as possible so
        that I can grow as a Developer and person.
      </div>
      <div style={{ color: "rgb(6, 199, 6)" }} className="h1 code mt-2 mb-3">
        {"}"}
      </div>
    </div>
  )
}