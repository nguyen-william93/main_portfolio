import React from 'react'
import '../../App.css'
import Typewriter from 'typewriter-effect'

export default function Info() {
  return (
    <div className="container introduction">
      <div className="ml-5"></div>
      <div className="display-3 info" style={{ color: "white" }}>
        <span style={{ color: "white" }}>Hello, my name is</span> <br />
        William.
        <Typewriter
            options={{
              strings: [
                '<h4>based in Austin, TX,</h4>',
                '<h4>world-traveler, </h4>',
                '<h4>learner,</h4>',
                '<h4>adventurer.</h4>',
              ],
              cursor: '-',
              deleteSpeed: 15,
              autoStart: true,
              loop: true,
            }}
          />
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