import React from 'react'
import {NavLink} from 'react-router-dom'
function About() {
  document.title  = "About - Digital shop"
  return (
    <div>
      
      <div className='container-fluid containerfluid'>
        <div className='row'>
          <div className='col-md-6'>
<h1 className='miniheading ' style={{color:'#0C19B7', fontWeight:'revert'}}>Welcome To Phlox</h1>
<h2 className='msheading aboutpara'>Who We Are ?</h2>
<p className='paratext'>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</p>
<p className='paratext'>gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me .</p>

<p className='paratext'>when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .</p>

<NavLink className = 'btn btn-primary aboutbtn' to = '/contact' >Contact us</NavLink>

          </div>
          <div className='col-md-6'>
            <img className='aboutimg' src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png" alt='.'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
