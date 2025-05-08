import React from 'react'
import Link1 from '../assets/s6.1.png'
import Link2 from '../assets/s6.2.png'
import Link3 from '../assets/s6.3.1.png'
import Link4 from '../assets/s6.3.2.png'

function Section6() {
  return (
    <>
    <h2>Learn easily and free. Take <br />your online marketing into <br />your own hands.</h2>
    <div>
        <div>
            <h2>Prospective <br />Community</h2>
            <p>Where marketers and recruiters exchange</p>
            <p>insights on a daily basis</p>
            <a href="#">Learn more</a>
            <img src={Link1} alt="advertise" />
        </div>
        <div>
            <h2>Mobile Funnel <br />Crash Course</h2>
            <p>The popular 60-minute mobile funnel crash</p>
            <p>course, moderated live</p>
            <a href="#">Learn more</a>
            <img src={Link2} alt="advertise" />
        </div>
        <div>
            <h2>Mobile Funnel <br />Marketing Acedemy</h2>
            <p>Our Head of Content, Leni, guides you through</p>
            <p>your first successful funnel</p>
            <a href="#">Learn more</a>
            <img src={Link3} alt="advertise" />
            <img src={Link4} alt="advertise" />
        </div>
    </div>
    </>
  )
}

export default Section6
