import React from 'react'
import { useLocation, useParams } from 'react-router';
import { shopdata } from '../productdata/ProductData';

function Checkout() {
    const { id } = useParams()
    const product = shopdata.find((cart) => cart._id === parseInt(id, 10))
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedColor = searchParams.get('color');
    const slectectProductSize = searchParams.get('productsize');
    const productQuantity = searchParams.get('quantity');
    return (
        <div>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-evenly '>
                    <div className='col-md-4 BillingAndOrderDetail'>
                        <form className="formcontact" style={{ transitionDelay: '0.7s' }}>
                            <h1> <b>Billing Detail</b></h1>

                            <div className="row mb-2 contactrow">
                                <div className=" mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        aria-label="First name"
                                        required
                                    />
                                </div>
                                <div className=" mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                        aria-label="First name"
                                        required
                                    />
                                </div>
                                <div className=" mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company name"
                                        aria-label="First name"
                                        required
                                    />
                                </div>
                                <div className=" mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Country / Region"
                                        aria-label="First name"
                                        required
                                    />
                                </div>
                                <div className=" mt-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="First name"
                                        required
                                    />
                                </div>
                                <div className=" mt-2">
                                    <textarea
                                        id="comment" className="form-control"

                                        name="comment"
                                        placeholder="Additional information (optional)"
                                        rows={10}
                                        required
                                    ></textarea>
                                </div>

                            </div>
                            <button
                                            className="btn btn-info mt-3 contactbtn headtext1"
                                            type="submit"
                                            style={{ color: 'white' }} >
                                            PLACE ORDER
                                        </button>
                        </form>
                    </div>
                    <div className='col-md-7 BillingAndOrderDetail'>
                        <div className='row'>
                            <h1><b>Your Order</b></h1>

                            <div className='col-md-11 placeorderbox'>

                                <table className="table  font16px ">
                                    <thead className='table-secondary'>
                                        <tr>
                                            <th scope="col">Product </th>
                                            <th scope="col"> </th>

                                            <th scope="col">SubTotal</th>


                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr>
                                            {/* imag and product name */}

                                            <td> <img src={product.image1} className='productimgs' /></td>


                                            {/* product name color size */}
                                            <td> <td>
                                                <p className='font20px' style={{ color: 'black' }}><b>{product.item} x {productQuantity}</b></p>
                                                <h2 className='paratext' >Color : <b style={{ color: `${selectedColor}` }}>{selectedColor}</b></h2>
                                                <h2 className='paratext' >ProductSize : <b style={{ color: 'black' }}> {slectectProductSize}</b></h2>
                                            </td>
                                            </td>
                                            <td>
                                                {product.price}
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p>SubTotal</p>
                                            </td>
                                            <td>
                                            </td>
                                            <td>
                                                {product.price}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Total</p>
                                            </td>
                                            <td>
                                            </td>
                                            <td style={{ color: 'blue' }}>
                                                <b className='font20px'>{product.price}</b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className='col-md-11 '>
                                <div className='placeorderbox'>
                                    <div>
                                        <p className='paratext'>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                                    </div>
                                    <div >
                                        {/* <button
                                            className="btn btn-info mt-3 contactbtn headtext1"
                                            type="submit"
                                            style={{ color: 'white' }}
                                        >
                                            PLACE ORDER
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
