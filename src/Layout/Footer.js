import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div>

      <div className='container-fluid footercontainer'data-aos="fade-in"  style={{transitionDelay:'0.4s'}}>
        <div className='row footerimg'>
          <div className='footercenter text-center'data-aos="fade-up"  style={{transitionDelay:'1s'}}>
            <p className='miniheading'>Sign Up Newsletter & Promotions!</p>
            <p className='xlheading'><b>Get 25% Discount</b> <br />On Your Next Purchase</p>

            <form  data-aos="fade-up"  style={{transitionDelay:'1.3s'}}>
              <div style={{width:'-webkit-fill-available'}}>
                <input className="inputfield" type="email" name="EMAIL" placeholder="Enter Your E-mail" required />
                <input className='submit' type="submit" defaultValue="Get Started" /></div>
            </form>

          </div>
        </div>
      </div>

      <div className='container-fluid containerfluid'>
        <div className='row rowgernal'>
          <div className='col-md-3 footitem1'>
            <a className="navbar-brand" href="#"><img className='logo' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png' alt='' /></a>
          </div>
          <div className='col-md-2 footitem'  data-aos="fade-left" style={{ transitionDelay: '0.3s' }}>
            <h2 className='footerlinks'>Visit Link</h2>
            <ul>
              <li><NavLink to = "/shops" className='navrow a'style={{border:'none'}}>Shop</NavLink></li>
              <li><NavLink to = "/" className='navrow a'style={{border:'none'}}>Privacy</NavLink></li>
              <li><NavLink to = "/" className='navrow a'style={{border:'none'}}>Terms & Conditions</NavLink></li>
            </ul>
          </div>
          <div className='col-md-2 footitem' data-aos="fade-left" style={{ transitionDelay: '0.6s' }}>
            <h2 className='footerlinks'>Company</h2>
            <ul>
              <li><NavLink to = "/" className='navrow a ' style={{border:'none'}} >Home</NavLink></li>
              <li><NavLink to = "/about" className='navrow a'style={{border:'none'}}>About us</NavLink></li>
              <li><NavLink to = "/contact" className='navrow a'style={{border:'none'}}>Contact us</NavLink></li>
            </ul>
          </div>
          <div className='col-md-2 footitem'  data-aos="fade-left" style={{ transitionDelay: '0.9s' }}>
            <h2 className='footerlinks'>Contact</h2>
            <ul>
              <li className='navrow a'>+92321961948</li>
              <li className='navrow a'>Info@yourdomain.com</li>
            </ul>
          </div>
          <div className='col-md-2  footitem'  data-aos="fade-left" style={{ transitionDelay: '1.2s' }}>
            <h2 className='footerlinks'>Address</h2>
            <p className='navrow' style={{ color: '#707071' }}>Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>

          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}> <hr /></div>

      <div className='container-fluid mt-3 mb-3'>
        <div className='row' style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <div className='col-md-10 ' style={{margin:'0.5rem 0rem'}}>
            <p className='navrow restextcenterfooter' style={{ color: '#707071' }}>© 2025 By Liaqat Ali. All rights reserved.</p>
          </div>
          <div className='col-md-2 ' style={{margin:'0.5rem 0rem'}}>
           <p  style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}><i className="fa-brands fa-instagram fa-2xl"/>  <i className="fa-brands fa-linkedin-in fa-2xl"/> <i className="fa-brands fa-facebook-f fa-2xl"/> <i className="fa-brands fa-twitter fa-2xl"/></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer

