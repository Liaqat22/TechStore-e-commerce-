import React, { useState } from 'react'
import { useParams } from 'react-router'
import { data } from '../productdata/PostData'
import Blogresponse from './Blogresponse'

function Latestpost() {
    const { id } = useParams()
    const blogdata = data.find((p) => p._id === parseInt(id, 10))
    const [isSharingVisible, setSharingVisible] = useState(false);

    // Function to toggle the visibility of sharing icons
    const toggleSharingIcons = () => {
        setSharingVisible(!isSharingVisible);
    };
    return (
        <div>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-10'>
                            <img src={blogdata.image} alt='blogdata'  className='blogimage mb-3'/>
                        <h1 className='text-center m-3 p-3'>{blogdata.title}</h1>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p className='paratext m-3'>{blogdata.date} </p> ||
                            <p className='paratext m-3'> Bussiness</p>
                        </div>
                        <div className='textdata'>
                            <p className='paratext'>
                                When, while the lovely valley teems with vapor around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!</p>
                            <p className='paratext'>

                                O my friend — but it is too much for my strength — I sink under the weight of the splendor of these visions! A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                            </p>
                            <p className='paratext'>
                                I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                            </p>
                            <p className='paratext'>

                                When, while the lovely valley teems with vapor around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me.
                            </p>

                        </div>
                        <div className=' tagsblogs'>
                            <h1><b>Tags : Blog</b></h1>
                            <div className='d-flex align-items-center justify-content-between'>
                                <i className='fa fa-heart responseheart'  style={{color:'red'}}/>
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
                        </div>

                        {/* ======================================= Responses ==================================================== */}
                   <Blogresponse/>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Latestpost
