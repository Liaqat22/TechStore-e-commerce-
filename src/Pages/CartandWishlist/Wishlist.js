import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { shopdata } from '../productdata/ProductData';
import { NavLink } from 'react-router-dom';
import { useWishlist } from '../../Context/Wishlishcontext';

function Wishlist() {

  //     const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const selectedColor = searchParams.get('color');
  // const slectectProductSize = searchParams.get('productsize');
  //     const { id } = useParams();
  //     const product = shopdata.find((p) => p._id === parseInt(id, 10));


  const { wishlist } = useWishlist();

  return (
    <div>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <table className="table font16px">
              <thead  className='table-secondary'>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">in Stoke</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item, index) => (

                  <tr key={item._id}>
                    <td><img src={item.product.image1} className='productimgs' /></td>

                    <td>{item.product.item}

                      <p>Color: <b style={{ color: `${item.selectedColor}` }}>{item.selectedColor}</b> </p>
                      <p>ProductSize: {item.selectedProductSize}</p>
                    </td>
                    <td>    <p> {item.product.price}</p></td>
                    <td style={{color:'green'}}><i className='fa fa-check'/> in Stocke</td>
<td>
<NavLink to={`/cart/${item.product._id}?color=${item.selectedColor}&&productsize=${item.selectedProductSize}`} className="btn btn-primary cartbtn" style={{ border: 'none', color: 'white' }} >
                                        add to cart
                                    </NavLink>
</td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>



    

    </div>
  )
}

export default Wishlist
