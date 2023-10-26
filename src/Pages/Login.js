import React from 'react'

function Login() {
    document.title  = "My Account - Digital shop"

    return (
        <div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-6 '>
                        <form className='loginform'>
                            <div className=' mb-3'>
                                <h1><strong>Login</strong></h1>
                                <hr />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username or Email address <span style={{ color: 'red' }}>*</span></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password <span style={{ color: 'red' }}>*</span></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" required/>
                            </div>

                            <input className='search headtext1' type="submit" value="Log in" style={{ background: "transparent linear-gradient(98deg,#4F56DB  0%,#0C19B7 100%)", color: 'white', fontWeight: 'bolder' }} />
                            <div className="mb-3 form-check formcheck">
                                <div className='row p-1'>
                                    <div className='col-md-6'>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                    <div className='col-md-6'>

                                        <a href='#'>lost your password?</a>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
