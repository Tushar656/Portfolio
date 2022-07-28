import React, { useState } from 'react'
import "./topbar.scss"

export default function Topbar() {
  const [cliked, setCliked] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={'topbar ' + (menuOpen && "Active")}>
        <div className="leftTopbar">
            <a href="#intro">Tushar</a>
            <div className="topbarright" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
        <div className="rightTopbar">
          <ul>
              <li><a className={`${cliked===1 ? "active" : "notActive"}`} onClick={()=> {setCliked(1); setMenuOpen(!menuOpen)}} href="#intro">Home</a></li>
              <li><a className={`${cliked===2 ? "active" : "notActive"}`} onClick={()=> {setCliked(2); setMenuOpen(!menuOpen)}} href="#about">About</a></li>
              <li><a className={`${cliked===3 ? "active" : "notActive"}`} onClick={()=> {setCliked(3); setMenuOpen(!menuOpen)}} href="#education">Education</a></li>
              <li><a className={`${cliked===4 ? "active" : "notActive"}`} onClick={()=> {setCliked(4); setMenuOpen(!menuOpen)}} href="#skills">Skills</a></li>
              <li><a className={`${cliked===5 ? "active" : "notActive"}`} onClick={()=> {setCliked(5); setMenuOpen(!menuOpen)}} href="#projects">Projects</a></li>
              <li><a className={`${cliked===6 ? "active" : "notActive"}`} onClick={()=> {setCliked(6); setMenuOpen(!menuOpen)}} href="#contact">Contact</a></li>
          </ul>
        </div>
    </div>
  )
}
