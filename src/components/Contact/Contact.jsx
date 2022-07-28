import React, { useState } from 'react'
import "./Contact.scss"
import {Player} from '@lottiefiles/react-lottie-player';

export default function Contact() {

  const [user, setUser] = useState({
      name: "",
      email: "",
      message: ""
  })

  const PostData = async(e) => {
    e.preventDefault();
    const res = await fetch('https://portfolio-bc494-default-rtdb.firebaseio.com/messages.json',
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            message: user.message
          })
        });
    
    setUser({name: "", email: "", message: ""})
  }

  return (
    <div className='contact' id='contact'>
      <div className="contactWrapper">
        <div data-aos-duration="1500" data-aos="fade-left"  className="leftcontect">
          <Player
            autoplay
            loop
            speed={1}
            src="https://assets1.lottiefiles.com/packages/lf20_dsxct2el.json"
            // src="https://assets7.lottiefiles.com/packages/lf20_ksrcyxgn.json"
            style={{ height: 'auto', width: '100%' }}>
          </Player>
        </div>
        <div data-aos-duration="1500" data-aos="fade-right"  className="rightcontect">
          <h2>Get in Touch</h2>
          <form action='https://formsubmit.co/tushar55755575@gmail.com' method="POST">
            <input type="text" placeholder='Your Name'value={user.name} onChange={(e) => setUser({...user, name:  e.target.value})}/>
            <input type="text" placeholder='Email Address'value={user.email} onChange={(e) => setUser({...user, email:  e.target.value})}/>
            <textarea placeholder='Type Your Message' id="" cols="30" rows="4" value={user.message} onChange={(e) => setUser({...user, message:  e.target.value})}></textarea>
            <button className='submitBtn' type='submit' onClick={PostData}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
