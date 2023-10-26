import React, { useEffect, useState } from 'react'
import img from '../Pages/Mask-Group-1.png'
import { shopdata } from './productdata/ProductData'
import { shopdatahome } from './productdata/HomeShopData'
import { data } from './productdata/PostData';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router'



function Home() {
    document.title = "Home - Digital shop"
    const { id } = useParams()
    const product = shopdata.find((cart) => cart._id === parseInt(id, 10))


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

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 2);
        }
    };

    const handleNext = () => {
        if (startIndex + 2 < data.length) {
            setStartIndex(startIndex + 2);
        }
    };
    const style = {
        textAlign: 'left'
    }
    return (
        <div>


            <div className='container-fluid cfluid'>
                <div className='row rows'>
                    <div className='col-md-3 cols-of-row1' data-aos="fade-up" style={{ transitionDelay: '0.4s' }}>
                        <div className='main'>
                            <div className='text'>
                                <h3 className='miniheading'>Blast Past Fast.</h3>
                                <h3 className='mdheading' style={style}>IPhone 12 Pro It’s A Leap Year.</h3>
                                <div className='buttonstyle buttoniphone'>
                                    <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                </div>

                            </div>
                            <div data-aos="fade-right" style={{ transitionDelay: '0.9s' }}> <img className='homecol1img' src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-21.png" alt='-' /></div>

                        </div>
                    </div>


                    <div className='col-md-3 cols-of-row1 col2-of-row1 ' style={{ overflow: 'unset', transitionDelay: '0.6s' }} data-aos="fade-up" >

                        <div className='main'>

                            <img className='col2img' src={img} alt='-' data-aos="fade-up" style={{ transitionDelay: '1s' }} />
                            <div className='text1' data-aos="fade-up" style={{ transitionDelay: '0.4s' }}>
                                <h3 className='miniheading'>Noise Cancelling</h3>
                                <h3 className='mdheading' style={style}>Beats Solo Wireless-Pro</h3>

                                <div className='buttonstyle btnbg'>
                                    <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className='col-md-3 cols-of-row1' style={{ transitionDelay: '0.8s' }} data-aos="fade-up">
                        <div className='main'>
                            <div className='text'>
                                <h3 className='miniheading'>Macbook Pro</h3>
                                <h3 className='mdheading' style={style}>More Power. Wakes Instantly.</h3>
                                <div className='buttonstyle mackbook'>
                                    <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                </div>
                            </div>
                            <div style={{ overflow: 'unset', transitionDelay: '0.9s' }} data-aos="zoom-in"><img className='homecol3img' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-22.png' alt='-' /></div>

                        </div>
                    </div>
                </div>
            </div>


            {/* ================================================ section -2 ================================================================== */}



            <div className='container-fluid containerfluid'>
                <div className='row rows'>
                    <div className='col-md-3 sec2reswidth borderradius margin sct2shadowbox' style={{ padding: '0rem', backgroundColor: '#8f9195', transitionDelay: '0.4s' }} data-aos="fade-up">
                        <div className='main'>
                            <div className='text'>
                                <h3 className='miniheading'>Blast Past Fast.</h3>
                                <h3 className='mdheading' style={style}>IPhone 12 Pro It’s A Leap Year..</h3>
                                <div className='buttonstyle btnbg'>
                                    <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                </div>
                            </div>
                            <div><img className='homecol3img' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-20.png' alt='-' /></div>

                        </div>
                    </div>

                    <div className='col-md-5 sec2reswidth middlecol ' data-aos="fade-up" style={{ transitionDelay: '0.6s' }}>
                        <div className='row rowmiddle margin rowmiddleBshadow1' style={{ background: '#dfdfdf', transitionDelay: '0.4s' }} >
                            <div className='col-md-8'>
                                <div className='main2'>
                                    <div className='text2'>
                                        <h3 className='miniheading' style={{ color: 'black' }}>Quadcopter.</h3>
                                        <h3 className='middletext'><b>DJI Mavic Mini Drone FlyCam</b></h3>
                                        <div className='buttonstyle btnbg'>
                                            <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <img className='middleimg' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/drone_PNG204.png' alt='-' style={{ overflow: 'unset', transitionDelay: '0.7s' }} data-aos="zoom-out" />
                            </div>
                        </div>
                        <div className='row rowmiddle margin rowmiddleBshadow2' style={{ background: '#cf374d' }}>
                            <div className='col-md-8'> <div className='main2'>
                                <div className='text2'>
                                    <h3 className='miniheading'>wear gadgets.</h3>
                                    <h3 className='middletext' style={{ color: 'white' }}><b>Wear Gadgets Stay Creative.</b></h3>
                                    <div className='buttonstyle btnbg '>
                                        <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                    </div>
                                </div>

                            </div></div>
                            <div className='col-md-4'>
                                <img className='middleimg2' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/clay-apple-watch-mockup-07.png' alt='-' style={{ overflow: 'unset', transitionDelay: '0.7s' }} data-aos="zoom-out" />
                            </div>
                        </div>
                    </div>



                    <div className='col-md-3 sec2reswidth borderradius margin sct2shadowboxhandfree' data-aos="fade-up" style={{ padding: '0rem', backgroundColor: '#000000', transitionDelay: '0.8s' }}>
                        <div className='main'>
                            <div className='text'>
                                <h3 className='miniheading'>Earphone</h3>
                                <h3 className='mdheading' style={style}>Stay Connect. Stay Creative.</h3>
                                <div className='buttonstyle handfreebtn'>
                                    <NavLink to='/shops' className='navlinkbtn'> shop by category</NavLink>
                                </div>
                            </div>
                            <div style={{ overflow: 'unset', transitionDelay: '1s' }} data-aos="fade-left"><img className='handfree' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10190.png' alt='-' /></div>

                        </div></div>
                </div>
            </div>


            {/* =================================================== section - 3 ============================================================= */}

            <div className='container-fluid containerfluid'>
                <div className='row cardrow' style={{ transitionDelay: '0.6s' }} data-aos="fade-up">
                    <div className='containerfluid' style={{ color: 'black', textAlign: 'center' }}>
                        <h1 className='mdheading' style={{ color: 'black' }}><b>Best Seller Products</b></h1>
                        <p className='paratext'>There are many variations passages</p>
                    </div>

                    {shopdatahome.map((d, index) => (
                        <div className='col-md-3  cardscol' key={d._id} style={{ transitionDelay: '1s' }} data-aos="fade-up">
                            <div
                                className="card cardshop"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}

                            >
                                <div className="card-body">
                                    {d.price && d.off ? <span className="onsale headtext1">Sale!</span> : " "}

                                    <span className='watchlist' data-aos="fade-down" style={{ transitionDelay: '1.5s' }}><NavLink to={`/wishlist/${product}`}><i className="fa-regular fa-heart fa-fade" /></NavLink><br /><i className="fa-regular fa-eye fa-fade" /></span>
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

            {/* ============================================= section - 3 ============================================================== */}
            <div className='container-fluid containerfluid row' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='row sction3row borderradius' style={{ overflow: 'hidden' }}>
                    <div className='col-md-5'>
                        <div className='section3text'>
                            <h3 className='miniheading'>Asus Zenbook Duo</h3>
                            <h3 className='laptopheading'>The Laptop Of Tomorrow</h3>
                            <div className='buttonstyle laptopbtn' >
                                <NavLink to='/shops' className='navlinkbtn'> shop pre order</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7' style={{ overflow: 'hidden' }}>
                        <div><img className='laptopimg' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Free-Mockup-Scene.png' alt='-' data-aos="fade-right" style={{ transitionDelay: '0.8s' }} /></div>
                    </div>
                </div>
            </div>
            {/* =============================================== new arrival items =================================================== */}

            <div className='container-fluid containerfluid'>

                <div className='row rowgernal' style={{ transitionDelay: '0.6s' }} data-aos="fade-up">
                    <div className='col-md-4'>
                        <div style={{ color: 'black' }}>
                            <h1 className='mdheading' style={{ color: 'black' }}><b>New Arrival Products</b></h1>
                            <p className='paratext'>There are many variations passages</p>
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <hr style={{ width: '100%' }} />
                    </div>

                    <div className='col-md-2 nextpreviouscol'>

                        <i className="fa fa-solid fa-arrow-left arowicon m-2" onClick={handlePrevious} disabled={startIndex === 0} />
                        <i className="fa fa-solid fa-arrow-right arowicon m-2" onClick={handleNext} disabled={startIndex + itemsPerPage >= data.length} />

                    </div>
                </div>

                <div className='row cardrow' >
                    {shopdata.slice(startIndex, startIndex + itemsPerPage).map((d, index) => (
                        <div className='col-md-3  cardscol' key={d._id} style={{ transitionDelay: '1s' }} data-aos="fade-up">
                            <div
                                className="card cardshop"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}

                            >
                                <div className="card-body">
                                    {d.price && d.off ? <span className="onsale headtext1">Sale!</span> : " "}

                                    <span className='watchlist' data-aos="fade-down" style={{ transitionDelay: '1.5s' }}><NavLink to={`/wishlist/${product}`}><i className="fa-regular fa-heart fa-fade" /></NavLink><br /><i className="fa-regular fa-eye fa-fade" /></span>
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

            {/* ============================================= sction 4 ========================================================================= */}

            <div className='container-fluid containerfluid'>
                <div className='row rows'>
                    <div className='col-md-5  borderradius sction4col cardscol' style={{ backgroundColor: 'black', transitionDelay: '0.7s' }} data-aos="fade-up" >
                        <div className='section4img' >
                            <div className='textsection4' >
                                <h3 className='miniheading'>camera Accessories</h3>
                                <h3 className='mdheading' style={style}>Launch Party<br /> Nice Photos</h3>
                                <div className='buttonstyle buttoniphone section4btnmargin'>
                                    shop by category
                                </div>
                            </div>
                            {/* <div className='cameraimg'>
                                <img src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-15.png' />
                            </div> */}
                        </div>
                    </div>
                    <div className='col-md-5  borderradius section4col1 cardscol' style={{ backgroundColor: '#0c19b7', transitionDelay: '1s' }} data-aos="fade-up" >
                        <div className='section4img' >
                            <div className='textsection4' >
                                <h3 className='miniheading'>game Accessories</h3>
                                <h3 className='mdheading' style={style}>Enjoy Game <br /> High Tech</h3>
                                <div className='buttonstyle  section4btnmargin' style={{ background: 'linear-gradient(106deg,#FFCC00 0%,#C9C73D 100%)', color: '#0c19b7' }}>
                                    shop by category
                                </div>
                            </div>
                            {/* <div className='cameraimg'>
                                <img className='vgame' src='https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-16.png' />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* =============================================== latest posts ================================================================================= */}

            <div className='container-fluid containerfluid'>
                <div className='row cardrow'>
                    <div className='containerfluid' style={{ color: 'black', textAlign: 'center', transitionDelay: '0.7s' }} data-aos="fade-up" >
                        <h1 className='mdheading' style={{ color: 'black' }}><b>Latest Posts</b></h1>
                    </div>

                    {data.slice(startIndex, startIndex + itemsPerPage).map((d, index) => (
                        <div className='col-md-3 d-flex justify-content-between cardscol' key={d._id} style={{ transitionDelay: '1s' }} data-aos="fade-up">
                            <div
                                className="card cardmain"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    backgroundImage: hoveredIndex === index ? `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${d.image})` : 'none',
                                    width: '100%',
                                    height: 'auto',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: "cover",
                                    transition: '0.6s'

                                }}
                            >
                                <div className="card-body cardbody">
                                    <h5 className="card-title cardtitle ">{d.date}</h5>
                                    <p className="card-text cardtext">{d.title}</p>
                                    <div className='cardbtnmargin'> </div>

                                    <NavLink to={`/blogs/${d._id}`} className="btn btn-primary btnprimary cardtitle" style={{ border: 'none' }}>
                                        Read more <i className='fa-solid fa-arrow-right p-2' />
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container-fluid containerfluid'>
                <div className='row' style={{ transitionDelay: '0.8s' }} data-aos="fade-up">
                    <div className='col-md-3 deliveryinfo footitem'>
                        <div> <i className='fa-solid fa-truck iconheading' /></div>
                        <span className='contactdata'>
                            <h1 className='headtext' style={{ textAlign: 'left' }}><b>Free Delivery</b></h1>
                            <p className='paratext'>Free shipping on all order</p>
                        </span>
                    </div>
                    <div className='col-md-3 deliveryinfo footitem'>
                        <div> <i className='fa-solid fa-globe iconheading' /></div>
                        <span className='contactdata'>
                            <h1 className='headtext' style={{ textAlign: 'left' }}><b>Online support 24/7</b></h1>
                            <p className='paratext'>Support online 24 hours a day</p>
                        </span>
                    </div>
                    <div className='col-md-3 deliveryinfo footitem'>
                        <div> <i className='fa-solid fa-money-check-dollar iconheading' /></div>
                        <span className='contactdata'>
                            <h1 className='headtext ' style={{ textAlign: 'left' }}><b>Money return</b></h1>
                            <p className='paratext'>Back guarantee under 7 days</p>
                        </span>
                    </div>
                    <div className='col-md-3 deliveryinfo footitem'>
                        <div> <i className='fa-solid fa-gift iconheading' /></div>
                        <span className='contactdata'>
                            <h1 className='headtext ' style={{ textAlign: 'left' }}><b>Member discount</b></h1>
                            <p className='paratext'>Onevery order over $120.00</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
