import React, { useEffect, useRef } from 'react'
import "./Intro.scss"
import {init} from 'ityped'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {KeyboardArrowUp} from '@material-ui/icons';

export default function Intro() {
  const typeref = useRef();
  useEffect(()=>{
    init(typeref.current, 
        { showCursor: true,
            backDelay: 1500,
        strings: ['Developer', 'Designer'] })
  }, [])
  console.log(window.innerWidth);
  return (
    <div className='Intro'>
      <div className="downarw">
        <a href='#intro' style={{color: 'white'}}><KeyboardArrowUp className='Downarrow'/></a>
      </div>
        {/* <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div> */}
        <div className="IntroContainor" id='intro'>
          <div data-aos-duration="1500" data-aos="zoom-in"  className="introLeft" style={{opacity: window.innerWidth<1000 ? 0.3 : 0.9}}>
            <Player
              autoplay
              loop
              speed={1}
              // src="https://assets6.lottiefiles.com/packages/lf20_k86wxpgr.json"
              src="https://assets9.lottiefiles.com/packages/lf20_ghs9bkkc.json"
              style={{ height: '700px', width: '100%'}}>
            </Player>
          </div>
          <div data-aos-duration="1500" data-aos="fade-up" className="introRight">
            <h2>Hi There, I am</h2>
            <h1>Tushar Verma</h1>
            <h3>Freelance <span ref={typeref}></span></h3>
          </div>
        </div>

    </div>
  )
}
