import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
            />
          </div>
          <button type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>
      </article>
    </section>
  </Layout>
);

export default Contact;
