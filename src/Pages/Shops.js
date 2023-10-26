import React, { useState, useEffect } from 'react'
import { brands, shopdata } from './productdata/ProductData'
import { categories } from './productdata/ProductData'
import { NavLink, useParams } from 'react-router-dom';

function Shops() {
  document.title  = "Shop - Digital shop"
  const { id } = useParams()
  const product = shopdata.find((cart) => cart._id === parseInt(id, 10))

  // searchbar
  const [searchTerm, setSearchTerm] = useState('');


  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
  useEffect(() => {
    handleMouseLeave()
    handleMouseEnter()
  }, [])



  const [selectedValue, setSelectedValue] = useState(224);
  const handleRangeChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const [selectedOption, setSelectedOption] = useState('Default');
  const handleItemClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>

      <div className='container-fluid containerfluid'>
        <div className='row shoprow' >
          <div className='col-md-3 shopcol3'>
            <h1 className='headtext m-3'>Search</h1>

            <form>
              <div >
                <input className="input headtext1"
                 type="text" name="text" placeholder="Search Products...."  onChange={(e)=>setSearchTerm(e.target.value)} />
                <input className='search headtext1' type="submit" value="search" style={{ background: "transparent linear-gradient(98deg,#4F56DB  0%,#0C19B7 100%)", color: 'white' }} /></div>
            </form>

            <div className='catagorimain'>
              <h1 className='headtext'><b>Categories</b></h1>
              {categories.map((cat , index)=>(
 <ul className='Category'>

 <li className='cat-item headtext1' style={{ color: "#70798B" }}  key={cat._id}>
   <a href='#' style={{ color: "#70798B", display: 'flex', alignItems: 'center' }} > <span className='checkbox'> <input type='checkbox' /> </span>{cat.categoryName}</a> <span className="count">{cat.categoryItem}</span>
 </li>

</ul>
              ))}
             
              <br />
              <br />
              <h1 className='headtext'><b>Brands</b></h1>
              {brands.map((brand , index)=>(
              <ul>

                <li className='cat-item headtext1' style={{ color: "#70798B" }} key={brand._id}>
                  <a href='#' style={{ color: "#70798B", display: 'flex', alignItems: 'center' }} > <span className='checkbox'> <input type='checkbox' /> </span>{brand.brandName}</a> <span className="count">{brand.brandItem}</span>
                </li>
                
              </ul>
))}
            </div>
<br/>
<br/>

            <div className='catagrimain'>
              <h1 className='headtext'><b>Choose Price</b></h1>

              <br />
              <div className='text-center'>
                <div className='headtext1'>
                  <label htmlFor="numberRange">$224</label>
                  <input
                    type="range"
                    id="numberRange"
                    min="224"
                    max="600"
                    value={selectedValue}
                    onChange={handleRangeChange}
                    className='range'

                  />
                  ${selectedValue}
                </div>
                <a href="#" className="btn btn-primary buton mt-3"  >
filter
                </a>
              </div>
            </div>



          </div>

          {/* =================================================== COL - 2 ========================================================= */}

          <div className='col-md-9'>
            {/* ================================================= row 1 ============================================== */}
            <div className='row p-3 d-flex align-items-center' >
              <div className='col-md-6'>
                <h1 className='mdheading' style={{ color: 'black' }}>Feature Products</h1>
              </div>
              <div className='col-md-6' >

              <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle bg-dark ddbtn headtext1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span className='spandropdnbtn'>sort by :  {selectedOption}</span> <i className="fa-solid fa-chevron-down fa-l"/>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item active" href="#" onClick={() => handleItemClick('Default')}>Default</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Popularity')}>Popularity</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Newness')}>Newness</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Rating')}>Rating</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Low Price')}>Low Price</a></li>
        <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('High Price')}>High Price</a></li>
      </ul>
    </div>


              </div>
            </div>


            {/* ================================================= row 2 ============================================== */}

            <div className='row cardrow' style={{ padding: '0rem' }}>

              {shopdata.filter((item)=>{
                return searchTerm.toLowerCase() === '' ? item : item.item.toLowerCase().includes(searchTerm)
              }).map((d, index) => (
                <div className='col-md-4  cardscol' key={d._id} >
                  <div
                    className="card cardshop"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}

                  >
                    <div className="card-body">
                      {d.price && d.off ? <span className="onsale headtext1">Sale!</span> : " "}

                      <span className='watchlist' data-aos="fade-down" ><NavLink to={`/wishlist/${product}`}><i className="fa-regular fa-heart fa-fade" /></NavLink><br /><i className="fa-regular fa-eye fa-fade" /></span>
                      <img className='aboutimg' src={`${hoveredIndex === index ? d.image1 : d.image2}`} alt='.' style={{ transition: "1s", transitionDelay: '1s' }} />
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
    </div>
  )
}

export default Shops
