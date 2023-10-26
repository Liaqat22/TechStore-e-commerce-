import React, { useState } from 'react';
import { shopdata } from './productdata/ProductData';
import { NavLink } from 'react-router-dom';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <form>
              <div>
                <input
                  className='input headtext1'
                  type='text'
                  name='text'
                  placeholder='Search Products....'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className='row cardrow' style={{ padding: '0rem' }}>

{ searchTerm !== '' &&
                shopdata.filter((item)=>{
  return searchTerm.toLowerCase() === '' ? item : item.item.toLowerCase().includes(searchTerm)
}).map((d, index) => (
  <div className='col-md-4  cardscol' key={d._id} >
    <div
      className="card cardshop"
      

    >
      <div className="card-body">
        {d.price && d.off ? <span className="onsale headtext1">Sale!</span> : " "}

    
        <img className='aboutimg' src={ d.image1} alt='.'  />
        <h5 className="card-title d-flex justify-content-between headtext">{d.item}<span> {d?.off ? <del className='headtext1'>{d.off}</del> : d.price}</span> </h5>
        <p className="card-text d-flex justify-content-between headtext1">{d.title} <span className='headtext'>{d?.price && d.off ? d.price : " "}</span></p>



      </div>
      <NavLink to={`/shops/${d._id}`} className="btn btn-primary buton" data-aos="fade-up" >
        add to cart <i className="fa-solid fa-bag-shopping" />
      </NavLink>
    </div>
  </div>
  
))}



</div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
