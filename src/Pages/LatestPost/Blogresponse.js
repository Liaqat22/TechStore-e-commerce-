import React, { useState } from 'react'

function Blogresponse() {
    const [isIncrement, setIsincrement] = useState(false);
  
    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            ...formData,
        };
        setTodos([...todos, newTodo]);
        setFormData({
            name: '',
            email: '',
            website: '',
            comment: '',
        });
    };


    return (
        <div>
            <h1 className='m-3'><b>REVIEWS</b></h1>
            
            <div className='continer'>
                <div className='row'>

                    <div className='col-md-8'>
                    <div className='card responscard'>
                        <div>
                            <img src='https://secure.gravatar.com/avatar/?s=60&d=mm&r=g' className='userAvatar'/>
                        </div>
                            <div className='card-title paratext' style={{color:'black'}}><b>Ibrahim Shah</b>
                            <p className='paratext'>20 May 2023 12:00 pm</p>
                            </div>
                            <div className='card-body'>
                                <p className='paratext'>
                                I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary.
                                </p>
                            </div>
                            <div>
                            <i className='fa fa-heart responseheart' style={{color:`${isIncrement?"red":'gray'} `, cursor:'pointer'}} onClick={()=>setIsincrement(!isIncrement)}/> {isIncrement ? '(+ 2)': '1'}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        {todos.map((review)=>(
                            <div className='card responscard'>
                                 <div>
                            <img src='https://secure.gravatar.com/avatar/?s=60&d=mm&r=g' className='userAvatar'/>
                        </div>
                            <div className='card-title paratext'style={{color:'black'}}><b>{review.name}</b>
                            <p className='paratext'>20 May 2023 12:00 pm</p>
                            </div>
                            <div className='card-body'>
                                <p className='paratext'>
                                I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary.
                                </p>
                            </div>
                            <div>
                            <i className='fa fa-heart responseheart' style={{color:`${isIncrement?"red":'gray'} `, cursor:'pointer'}} onClick={()=>setIsincrement(!isIncrement)}/> {isIncrement ? '(+ 2)': '1'}
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row' style={{padding:'0rem'}}>
                    <div className='col-md-6'> <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required />
                    </div></div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="text" className="form-control"

                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Website"

                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="comment" className="form-control"

                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={10}
                        required
                    ></textarea>
                </div>
                <button
                    className="btn btn-info contactbtn headtext1"
                    type="submit"
                    style={{ color: 'white' }}
                >
                    Submit
                </button>
            </form>


        </div>
    )
}

export default Blogresponse
