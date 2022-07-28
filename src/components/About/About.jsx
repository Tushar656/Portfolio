import React from 'react'
import "./About.scss"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function About() {
  return (
    <div className='AboutSection' id='about'>
      <div className='About'>
          <div data-aos-duration="1500" data-aos="fade-right" className="aboutleft">
              <h1>Myself & I</h1>
              <p>Hi, I am full stack Developer from India, Pursuing Bachlers degree in Computer Science and Engineering from IIIT-SURAT. Also a Compitative Programmer, primarily use Cpp, but picking up a new framework or language isn't a problem. Comfortable developing on the frontend or backend with MERN-Stack. With Every line of code, I strive to make the web a beautiful place.</p>
              <p>Well organised person and also interested in App Development for both Android and IOS. Currently Exploring React Native for this. I am learning More and more thing Everyday.</p>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At unde ea maxime molestiae sunt, modi mollitia earum veritatis exercitationem fuga in cupiditate optio, ipsum praesentium?</p> */}
          </div>
          <div data-aos-duration="1000" data-aos="fade-left" className="aboutright">
            <Player
              autoplay
              loop
              speed={1}
              // src="https://assets2.lottiefiles.com/packages/lf20_3ntisyac.json"
              // src="https://assets2.lottiefiles.com/packages/lf20_bp5lntrf.json"
              src="https://assets6.lottiefiles.com/packages/lf20_kgopivvm.json"
              style={{ height: 'auto', width: '70%' }}>
            </Player>
          </div>
      </div>
      <div className="idIcons">
        <div data-aos-duration="2000" data-aos="fade-right" className="image">
          <a href="https://www.codechef.com/users/tushar5575" target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/about%2Fcodechef.png?alt=media&token=5216a2ee-dc77-42d2-8e89-8424e0e119d6" alt="" /></a>
        </div>
        <div data-aos-duration="2000" data-aos="fade-up" className="image">
          <a href="https://codeforces.com/profile/Tushar_verma" target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/about%2Fcodeforce.webp?alt=media&token=e5e7a139-657d-4101-ab64-e7e4da989326" alt="" /></a>
        </div>
        <div data-aos-duration="2000" data-aos="fade-down" className="image">
          <a href="https://www.linkedin.com/in/tushar-verma-502a86204/" target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/about%2Flinkedin.png?alt=media&token=2b42e45e-79ce-4904-9625-a176c7eeb583" alt="" /></a>
        </div>
        <div data-aos-duration="2000" data-aos="fade-left" className="image">
          <a href="https://github.com/Tushar656" target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-124ba.appspot.com/o/about%2Fgithub.png?alt=media&token=5898bcdb-c0cc-473d-88b9-ba68b0aeb619" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
