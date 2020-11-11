import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main id="contact">
        
    <form class="form-label form-js-label">
    <fieldset>
      <input id="userName" name="userName" type="text" autocomplete="off" required />
      <label for="userName">User Name</label>
    </fieldset>
    <fieldset>
      <input id="userEmail" name="userEmail" type="email" autocomplete="off" required />
      <label for="userEmail">Email Address</label>
    </fieldset>
    <fieldset>
      <textarea id="message" name="message" type="textarea" autocomplete="off" />
      <label for="box">Message</label>
    </fieldset>
  </form>
<div>
          <a href="#" className="btn">Send</a>
          
</div>        
      </main>

      <Footer />
    </>
  );
}

export default Contact;
