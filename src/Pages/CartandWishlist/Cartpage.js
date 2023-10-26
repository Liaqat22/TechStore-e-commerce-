import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { shopdata } from '../productdata/ProductData'
import { NavLink } from 'react-router-dom'

function Cartpage() {
    const { id } = useParams()
    const product = shopdata.find((cart) => cart._id === parseInt(id, 10))
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedColor = searchParams.get('color');
    const slectectProductSize = searchParams.get('productsize');

    const [increment, setIncrement] = useState(1);

    const handleIncrement = () => {
        setIncrement(increment + 1);
    };

    const handleDecrement = () => {
        if (increment > 1) {
            setIncrement(increment - 1);
        }
    };
    return (
        <div>

            <div className='container'>
                <div className='row d-flex justify-content-evenly cartpageAndCheckout' >
                    <div className='col-md-8 placeorderbox'>
                            <h1 className='m-3' style={{textAlign:'left'}}><b>Shopping bag</b></h1>
                        <div>
                            <table className="table font16px">
                                <thead className='table-secondary'>
                                    <tr>
                                        <th scope="col">Product </th>
                                        <th scope="col"> </th>
                                        <th scope="col"> Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">SubTotal</th>


                                    </tr>
                                </thead>
                                <tbody>


                                    <tr>
                                        {/* imag and product name */}

                                        <td> <img src={product.image1} className='productimgs' /></td>


                                        {/* product name color size */}

                                        <td> <td>
                                            <p className='font20px' ><b>{product.item}</b></p>
                                            <h2 className='paratext' >Color : <b style={{ color: `${selectedColor}` }}>{selectedColor}</b></h2>
                                            <h2 className='paratext'>ProductSize : <b  style={{ color: 'black' }}> {slectectProductSize}</b></h2>
                                        </td>
                                        </td>

                                        {/* product price */}
                                        <td> <h1><b> {product.price}  </b></h1></td>

                                        {/* product quantity */}
                                        <td>
                                            <div className='incrementDecrementmain' style={{ width: 'auto' }}>
                                                <i className='fa fa-minus' onClick={handleDecrement} style={{ cursor: 'pointer' }} />
                                                <span className='increment'>{increment}</span>
                                                <i className='fa fa-plus' onClick={handleIncrement} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </td>
                                        {/* product subtotat */}
                                        <td><h1><b>
                                            {product.price}
                                        </b></h1>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className='col-md-3 placeorderbox'>
                        <div  className='font16px mb-3'>
                            <h1><b>Cart Total</b></h1>
                            <hr />
                            <h1 className='d-flex justify-content-between'>SubTotal : <b>{product.price}
                            </b></h1>
                            <hr />
                            <h1 className='d-flex justify-content-between'>Total : <b>{product.price}</b></h1>
                        </div>

                        <NavLink to={`/checkout/${product._id}?color=${selectedColor}&&productsize=${slectectProductSize}&&quantity=${increment}`} className="btn btn-primary cartbtn font16px p-3 mt-3" style={{ border: 'none', color: 'white' }} >
                            Proceed to checkout                                  
                              </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cartpage
