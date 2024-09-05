 import { useState } from "react";
 const Contact = () => {
 //=================variable part start 
  const [username , setusername]                      = useState ('')
  const [usernameerror , setusernameerror]            = useState ('')

 //=================variable part end 
 //================= function part start 
 const handelusername = (e)=>{
  setusername(e.target.value)
 }


 //================= function part end
 //================= main submit part start
  const handelsubmit = (e)=>{
 e.preventDefault()
 console.log('acke amar mon balo na ')


  }



 //================= main submit part end


  

  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29072.60109759209!2d91.41629619999999!3d24.37868945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751445418320993%3A0x4aac154dd6283b1f!2sHabiganj!5e0!3m2!1sen!2sbd!4v1723662041183!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input onChange={handelusername} type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
            <h2 className=" absolute pt-[55px] text-[#F5004F]"> enter your error </h2>
            

            <input  type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            <h2 className=" absolute pt-[55px] ml-[430px] text-[#F5004F]"> enter your error </h2>

          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button onSubmit={handelsubmit} className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span type='submit'>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
