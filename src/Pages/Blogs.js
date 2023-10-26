import React, { useState,useEffect } from 'react';
import { data } from './productdata/PostData';
import { NavLink } from 'react-router-dom';

function Blogs() {
  document.title  = "Blog - Digital shop"

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
useEffect(()=>{
  handleMouseLeave()
  handleMouseEnter()
},[])

  return (
    <div>
      <div className='container-fluid containerfluid'>
        <div className='row'><h1 className='mdheading text-center' style={{color:'black'}}>Latest Posts</h1></div>
        <div className='row'>
          {data.map((d, index) => (
            <div className='col-md-3 d-flex justify-content-between cardscol' key={d._id}>
              <div
                className="card cardmain"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundImage: hoveredIndex === index ? `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${d.image})` : 'none',
                  width: '100%',
                  height: 'auto',
                  backgroundRepeat:'no-repeat',
                  backgroundSize:"cover",
                  transition:'0.6s'

                }}
              >
                <div className="card-body cardbody">
                  <h5 className="card-title cardtitle ">{d.date}</h5>
                  <p className="card-text cardtext">{d.title}</p>
                  <div className='cardbtnmargin'> </div>
                  <NavLink to={`/blogs/${d._id}`} className="btn btn-primary btnprimary cardtitle" style={{border:'none'}}>
                    Read more <i className='fa-solid fa-arrow-right p-2' />
                  </NavLink>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
