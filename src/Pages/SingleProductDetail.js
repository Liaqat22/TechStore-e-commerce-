import React, { useState } from 'react'
import { categories, shopdata } from './productdata/ProductData'
import { NavLink, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useWishlist } from '../Context/Wishlishcontext';



function SingleProductDetail() {
    const { id } = useParams();
    const product = shopdata.find((p) => p._id === parseInt(id, 10));

    const [increment, setIncrement] = useState(1);

    const handleIncrement = () => {
        setIncrement(increment + 1);
    };

    const handleDecrement = () => {
        if (increment > 1) {
            setIncrement(increment - 1);
        }
    };

    const [color, setColor] = useState(null); // Initialize color with null
    const [productsize, setProductSize] = useState(null); // Initialize ProductSize with null

    const [isSharingVisible, setSharingVisible] = useState(false);

    // Function to toggle the visibility of sharing icons
    const toggleSharingIcons = () => {
        setSharingVisible(!isSharingVisible);
    };

    const iconStyle = {
        color: 'white',
        fontSize: '1.5rem',
    };

    const handleClear = () => {

        setColor(null);
        setProductSize(null)
    }
    const [selectedimg, setSelectedImg] = useState(product.image1)
    const { addToWishlist } = useWishlist();
    const handleAddToWishlist = () => {
        // Create variables for product, selectedColor, and selectedProductSize
        // Replace these with the actual data

        const product = shopdata.find((p) => p._id === parseInt(id, 10));
        const selectedColor = color;
        const selectedProductSize = productsize;

        // Call the addToWishlist function to add the item
        addToWishlist(product, selectedColor, selectedProductSize);
    };
    return (
        <div>

            <div className='container'>
                <div className='row productDetailrow'>
                    <div className='col-md-6'>
                        <div className='productimgMainouterdiv'>
                            <img src={selectedimg} alt='.' className='productimgMain' />
                        </div>
                        <div className='d-flex'>
                            <img onClick={() => setSelectedImg(product.image1)} src={product.image1} alt='.' className='productimgs' />

                            <img onClick={() => setSelectedImg(product.image2)} src={product.image2} alt='.' className='productimgs' />
                        </div>
                    </div>
                    <div className='col-md-5 productdetailColumn'>
                        <div className='productdetailSale'>
                            {product.price && product.off ? <span className="productdetailonsale ">Sale!</span> : " "}
                        </div>
                        <div className='productdetailData'>
                            <h1 className='productdetailItem'>{product.item}</h1>
                            <div className='priceoffmain'>
                                <h2 className="card-title  m-1" >
                                    <span>
                                        {product?.off ? <del className='productdetailOff'>{product.off}</del> :
                                            <h1 className='productdetailPrice'>{product.price}</h1>
                                        }
                                    </span>
                                </h2>
                                <p className="card-text productdetailPrice m-1">
                                    <span>
                                        {product?.price && product.off ? product.price : " "}
                                    </span>
                                </p>
                            </div>
                            <p className='paratext'>{product.description}</p>

                            <div className='incrementDecrementCartmain'>

                                {/*  product Increement and decreement */}
                                <div className='incrementDecrementmain'>
                                    <i className='fa fa-minus' onClick={handleDecrement} style={{ cursor: 'pointer' }} />
                                    <span className='increment'>{increment}</span>
                                    <i className='fa fa-plus' onClick={handleIncrement} style={{ cursor: 'pointer' }} />
                                </div>

                                {/*  add to button */}
                                <div>
                                    <NavLink to={`/cart/${product._id}?color=${color}&&productsize=${productsize}`} className="btn btn-primary cartbtn" style={{ border: 'none', color: 'white' }} >
                                        add to cart
                                    </NavLink>
                                </div>

                            </div>

                            <div className='colors  m-3'>
                                <h2><b>Colors :</b></h2>
                                <div className="color-options d-flex">
                                    {product.colors.map((currentcolor, index) => (
                                        <button
                                            key={index}
                                            style={{ backgroundColor: currentcolor.color }}
                                            className={color === currentcolor.color ? 'btnStyle active' : 'btnStyle'}
                                            onClick={() => setColor(currentcolor.color)} // Update color on button click
                                        >
                                            {color === currentcolor.color ? <FaCheck style={iconStyle} /> : null}
                                        </button>
                                    ))}
                                </div>

                            </div>
                            <div className='product-size m-3'>
                                <h2><b>Size :</b></h2>
                                <div className='productSizeOPtion d-flex align-items-center'>
                                    <div>
                                        {product.productSize.map((productSize, index) => (
                                            <button key={index}
                                                className={productsize === productSize.size ? 'productbtn active' : 'productbtn'}
                                                onClick={() => setProductSize(productSize.size)}>
                                                {productSize.size}
                                            </button>

                                        ))}
                                    </div>
                                    {color || productsize !== null ? (<button className='clearbtn' onClick={handleClear}>Clear</button>) : ' '}

                                </div>
                            </div>

                            <div className='wishlistShare m-3'>
                                <div>
                                    {/* <button className='wishlistbtn'>Add to wishlist <i className='fa fa-heart' style={{ backgroundColor: 'transparent' }} /></button> */}
                                    <NavLink to={`/wishlist/${product._id}?color=${color}&&productsize=${productsize}`} className=" wishlistbtn" onClick={handleAddToWishlist} >
                                        Add to wishlist <i className='fa fa-heart' style={{ backgroundColor: 'transparent' }} />
                                    </NavLink>
                                </div>
                                <div className=' shareMain m-3'>

                                    <button onClick={toggleSharingIcons} className='sharebtn'>Share <i className='fa fa-share' /></button>

                                    {isSharingVisible && (
                                        <div className="sharing-icons ">
                                            {/* Render your sharing icons here */}
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-whatsapp' /></a></div>
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-facebook' /></a></div>
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-instagram' /></a></div>
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-telegram' /></a></div>
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-twitter' /></a></div>
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-linkedin' /></a></div>
                                            <div className="icon"><a href='#'><i className='shareicons fa fa-google' /></a></div>
                                            {/* Add more sharing icons */}
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className='m-3'>

                                <h2><b>SKU :</b></h2>
                                <p className='paratext'>N/A</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductDetail
