import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="card-inner" id="about-card">
        <div className="row card-container">

          <div className="card-wrap col col-m-12 col-t-12 col-d-12 col-d-lg-12" data-simplebar>


            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">About</div>
                  <div className="text">
                    <div className="title"><span>How</span> It Works</div>
                    <p>
                      <strong>Hi There</strong>, Creartem is a web agency based in Rotorua. Managed by tutors at Toi-Ohomai Institute of Technology and run by web development students. Creartem offers free website design and development services.  In exchange for our services students get the opportunity to work on real world projects and gain valuable experience.<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content services">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">

                  <div className="title"><span>Our</span> Services</div>
                </div>
              </div>

            {/*Service Items*/}
              <div className="row service-items">
                <div className="col col-xs-12 col-m-12 col-t-12 col-d-12 col-d-lg-4">
                  <div className="service-item card-box">
                    <div className="icon"><i className="fa fa-code"></i></div>
                    <div className="name">Web Design</div>
                    <p>
                    Web design is an important aspect of any website, it helps you to gain more traffic on your website.</p>
                  <ul style={{ListStyleType:'circle'}}>
                      <li>Planning how a website will look, feel and be used</li>
                      <li>Aesthetic aspects such as layout, colour, contrast, font choice, sizing, consistency and unity</li>
                      <li>Navigational aspects and how information will be presented.</li>
                    </ul>
                  </div>
                </div>

                <div className="col col-xs-12 col-m-12 col-t-12 col-d-12 col-d-lg-4">
                  <div className="service-item card-box">
                    <div className="icon"><i className="fa fa-database"></i></div>
                    <div className="name">Back-end Developers</div>
                    <p>Your website has layers</p>
                    <ul style={{ListStyleType:'circle'}}>
                      <li>structure,</li>
                      <li>design, </li>
                      <li>content, </li>
                      <li>functionality.</li>
                  </ul>
                      <p>The back-end is what you don’t see but what makes the site.</p>
                  </div>
                </div>

                <div className="col col-xs-12 col-m-12 col-t-12 col-d-12 col-d-lg-4">
                  <div className="service-item card-box">
                    <div className="icon"><i className="fa fa-database"></i></div>
                    <div className="name">Back-end Developers</div>
                    <p>
                      Your website has layers</p>
                    <ul style={{ListStyleType:'circle'}}>
                      <li>structure,</li>
                      <li>design, </li>
                      <li>content, </li>
                      <li>functionality.</li>
                  </ul>
                      <p>The back-end is what you don’t see but what makes the site run. This is the server, the database and server-side applications (behind the scenes functionality).
                    </p>
                  </div>
                </div>
                </div>
              </div>


            {/*What We Do*/}
            <div className="content clients">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                </div>
              </div>
              <div className="row client-items">
                <div className="col col-m-6 col-t-6 col-d-3 col-d-lg-3">
                  <div className="client-item card-box">
                    <div className="image">
                        <img src="/theme/images/php.png" alt="" />
                        <div className="overlay">
                          <div className="text-icon">Open source general-purpose scripting language</div>
                      </div>
          </div>
                  </div>
                </div>

                <div className="col col-m-6 col-t-6 col-d-3 col-d-lg-3">
                  <div className="client-item card-box">
                    <div className="image">
                        <img src="/theme/images/nodejslogo.png" alt="" />
                        <div className="overlay">
                          <div className="text-icon">Easily builds fast and scalable network applications.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-6 col-t-6 col-d-3 col-d-lg-3">
                  <div className="client-item card-box">
                    <div className="image">
                          <img src="/theme/images/react.png" alt="" />
                          <div className="overlay">
                            <div className="text-icon">JavaScript library for building user interfaces.</div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-6 col-t-6 col-d-3 col-d-lg-3">
                  <div className="client-item card-box">
                    <div className="image">
                        <img src="/theme/images/css.png" alt="" />
                        <div className="overlay">
                          <div className="text-icon">How HTML elements are to be displayed on screen</div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col col-m-6 col-t-6 col-d-3 col-d-lg-3">
                  <div className="client-item card-box">
                    <div className="image">
                        <img src="/theme/images/html.png" alt="" />
                        <div className="overlay">
                          <div className="text-icon">Standard markup language for creating web pages and web applications</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-6 col-t-6 col-d-3 col-d-lg-3">
                  <div className="client-item card-box">
                    <div className="image">
                        <img src="/theme/images/jquery-icon.png" alt="" />
                        <div className="overlay">
                          <div className="text-icon">Makes it much easier to use JavaScript on your website</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
