import React from 'react'
import { NavLink } from 'react-router-dom'
import {  useParams } from 'react-router'
import { shopdata } from '../Pages/productdata/ProductData'

function Head() {
  const { id } = useParams()
    const product = shopdata.find((cart) => cart._id === parseInt(id, 10))
   
  return (
    <div>

      <div className='container-fluid headline' data-aos="fade-down" style={{width:'auto'}}>
        <div className='row widthres' style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <div className='col-md-5'>
            <p className='navrow restextcenter'><i className="fa-solid fa-inbox fa-lg " /> <span className='m-2'> World's Fastest Online Shopping Destination</span></p>
          </div>
          <div className='col-md-3'>
            <p className='navrow restextcenter'style={{whiteSpace:'nowrap'}}> <i className='fa-solid fa-phone' style={{ padding: '0rem 0.5rem' }} /><span className='m-2'>  03211961948</span> </p>
          </div>
          <div className='col-md-3' style={{overflow:'hidden'}}>
            <p className='navrow restextcenter' style={{whiteSpace:'nowrap'}}> <i className='fa-solid fa-envelope' style={{ padding: '0rem 0.5rem' }} /> <span className='m-2'>liaqatali097306@gmail.com </span></p>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid navcontainer">
          <a className="navbar-brand" href="#" ><img className='logo' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png' alt='' /></a>

         




          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='container-fluid navleftcontainer'>
              <div className='row' style={{ padding: '0rem' }}>
                <div className='col-md-3'>
                  <a className='btn btn-light  navleft navleftcontainer' href='#'><i className="fa-regular fa-lg fa-user" style={{margin:'0rem 1rem'}}/><span>login</span></a>
                </div>
                <div className='col-md-3'>
                  <a className='btn btn-light navleft navleftcontainer' href='#'><i className="fa-solid fa-lg fa-search" style={{margin:'0rem 1rem'}}/><span>Search</span> </a>
                </div>
                <div className='col-md-3'>
                  <NavLink className='btn btn-light navleft' to={`/wishlist/${product}`}><i className="fa-solid fa-lg fa-bag-shopping" style={{margin:'0rem 1rem'}}/><span> Basket (0)</span></NavLink>
                </div>

              </div>
            </div>
            <span className='rescarticon' style={{margin:'0rem 4rem'}}>
              <NavLink className='btn btn-light ' to={`/wishlist/${product}`} style={{background:'transparent',border:'none'}}>
                <i className="fa-solid fa-2xl fa-bag-shopping" />
              </NavLink>
            </span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ zIndex: '1' }}>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shops">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>
            <div className='container-fluid navleftcontainermain'style={{width:'-webkit-fill-available'}}>
              <div className='row' style={{ padding: '0rem' }}>
                <div className='col-md-4'>
                  <NavLink className='btn btn-light  navleft ' to='/login'><i className="fa-regular fa-lg fa-user" /><span>login</span></NavLink>
                </div>
                <div className='col-md-4'>
                  <NavLink className='btn btn-light navleft ' to='/search'><i className="fa-solid fa-lg fa-search" /><span>Search</span>
                   </NavLink>


                </div>
                <div className='col-md-4'>
                  <NavLink className='btn btn-light navleft' to={`/wishlist/${product}`}><i className="fa-solid fa-lg fa-bag-shopping" /><span> Basket</span></NavLink>

                  
                </div>

              </div>
            </div>
          </div>
        </div>

      
      </nav>


    </div>
  )
}

export default Head
