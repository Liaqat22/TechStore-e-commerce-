import React from 'react';


function Contact() {
  document.title  = "Contact - Digital shop"


  return (
    <div>
      <div className="container-fluid containerfluid">
        <div className="row rowgernal" style={{ overflow:'hidden' }}>
          <div className="col-md-6 mt-3"  data-aos="fade-up" style={{ transitionDelay: '0.3s' }}>
            <h1 className="miniheading" style={{ color: '#0C19B7', fontWeight: 'revert' }}>
              Contact With Us
            </h1>
            <h1 className="xlheading" style={{ color: '#000000', fontWeight: 'bolder' }}>
              Don’t Google Design Questions
            </h1>
            <p className="paratext">
              Your email address will not be published. Required fields are marked*
            </p>

            <form className="formcontact" data-aos="fade-left" style={{ transitionDelay: '0.7s' }}>
              <div className="row mb-2 contactrow">
                <div className="col-md-6 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    aria-label="First name"
                    required
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    aria-label="Last name"
                  />
                </div>
                <div className="mt-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    required
                    placeholder="Message"
                    rows={10}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="contactbtnmain">
                <button
                  className="btn btn-info contactbtn headtext1"
                  type="submit"
                  style={{ color: 'white' }}
                >
                  Send A Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 mapcol mt-3"data-aos="fade-left" style={{ transitionDelay: '0.9s' }}  >
            <div className='map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064758301!2d-0.4312462183338612!3d51.52860700974391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1691861164894!5m2!1sen!2s" width={850} height={550} style={{ border: 0, borderRadius: '50px 50px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>


          </div>
        </div>
        <div className='row containerfluid rowgernal' style={{ overflow:'hidden' }}>
          <div className='col-md-4 contactinfo' data-aos="zoom-out-up" style={{ transitionDelay: '0.3s' }}>
            <div> <i className='fa-solid fa-location-dot' /></div>
            <span className='contactdata'>
              <h1 className='headtext'><b>Meet Us In Office :</b></h1> <br/>
              <p className='paratext'>Patricia C. 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
            </span>
          </div>
          <div className='col-md-4 contactinfo' data-aos="zoom-out-up" style={{ transitionDelay: '0.5s' }}>
            <div> <i className='fa-solid fa-envelope envelope' /></div>
            <span className='contactdata'>
              <h1 className='headtext'><b>Our Email Address :</b></h1> <br/>
              <p className='paratext'>Info@yourdomain.com <br/>Info@dataanalytics.com</p>
            </span>
          </div>
          <div className='col-md-4 contactinfo' data-aos="zoom-out-up" style={{ transitionDelay: '0.7s' }}>
            <div> <i className='fa-solid fa-phone phone' /></div>
            <span className='contactdata'>
              <h1 className='headtext'><b>Contact Numbers :</b></h1> <br/>
              <p className='paratext'>+99 (0) 101 0000 888 <br/>+99 (0) 555 6759 126</p>
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contact;
