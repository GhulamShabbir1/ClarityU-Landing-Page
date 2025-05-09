import React from 'react'
import Link1 from '../assets/s6.1.png'
import Link2 from '../assets/s6.2.png'
import Link3 from '../assets/s6.3.1.png'
import Link4 from '../assets/s6.3.2.png'

function Section6() {
  return (
    <>
    <div className="s2-cont s6-cont">

    <h2 >Learn easily and free. Take <br />your online marketing into <br />your own hands.</h2>
    </div>
    <div className='features'>
        <div className='components'>
        <div className='feature1'>
            <div className='learn'>
            <h2>Prospective <br />Community</h2>
            <text>Where marketers and recruiters exchange</text>
            <text>insights on a daily basis</text>
            <a href="#">Learn more</a>
            </div>
            <img src={Link1} alt="advertise" />
        </div>
        <div className='feature2'>
            <div className='learn'>
            <h2>Mobile Funnel <br />Crash Course</h2>
            <text>The popular 60-minute mobile funnel crash</text>
            <text>course, moderated live</text>
            <a href="#">Learn more</a>
            </div>
            <img src={Link2} alt="advertise" />
        </div>
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
