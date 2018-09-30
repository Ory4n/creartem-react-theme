import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className="card-inner" id="works-card">
        <div className="row card-container">

          <div className="card-wrap col col-m-12 col-t-12 col-d-12 col-d-lg-12" data-simplebar>



            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">Portfolio</div>
                </div>
              </div>
            </div>

            <div className="content works">
              <div className="row">
                <div className="col col-m-12 col-t-5 col-d-5 col-d-lg-5">
                  <div className="title"><span>Student</span> Portfolio</div>
                </div>
                <div className="col col-m-12 col-t-7 col-d-7 col-d-lg-7">
                </div>
              </div>
              <div className="row grid-items">

                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item photo">
                  <div className="box-item card-box">
                    <div className="image">

                    <a href="/theme/images/works/work1.jpg" className="has-popup-image">

                      <img src="/theme/images/gaming2.png" alt="" title=""/>

                        <span className="info">
                          <span className="icon la la-camera-retro"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                    <p>Student Games Portal</p>
                      <div className="category">MERN</div>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item video">
                  <div className="box-item card-box">
                    <div className="image">
                      <a href="http://www.beachrentals.net.nz/pukehina_beach.php" >
                        <img src="/theme/images/beachrentals1.png" alt="" title=""/>
                        <span className="info">
                          <span className="icon la la-video-camera"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="https://vimeo.com/97102654" className="name has-popup-video">Beach Rentals Pukehina</a>
                      <div className="category">CMS</div>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item music">
                  <div className="box-item card-box">
                    <div className="image">
                      <a href="https://greypower.co.nz/associations/hamilton/">
                        <img src="/theme/images/grey_power_hamilton.png" alt="" title=""/>
                        <span className="info">
                          <span className="icon la la-music"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="/" className="name has-popup">Grey Power Hamilton</a>
                      <div className="category">CMS</div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item design">
                  <div className="box-item card-box">
                    <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                      <div className="content">
                        <div className="image">
                          <img src="/theme/images/grey_power_hamilton.png" alt="" title=""/>
                        </div>
                        <div className="desc">
                          <div className="post-box">
                            <h1>Grey Power Hamilton</h1>
                            <div className="blog-detail">CMS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item photo">
                  <div className="box-item card-box">
                    <div className="image">
                      <a href="http://seniornetwhakatane.nz/">
                        <img src="/theme/images/SeniorNet_Whakatane.png" alt="" title=""/>
                        <span className="info">
                          <span className="icon la la-camera-retro"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="/theme/images/works/work5.jpg" className="name has-popup-image">SeniorNet Whakatane</a>
                      <div className="category">CMS</div>
                    </div>
                  </div>
                </div>

                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item music">
                  <div className="box-item card-box">
                    <div className="image">
                      <a href="http://greypowerhuttvalley.org.nz/huttvalley/wainuiomata/">
                      <img src="/theme/images/huttvalley.png" alt="" title=""/>
                        <span className="info">
                          <span className="icon la la-music"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="/" className="name has-popup">Grey Power Hutt Valley</a>
                      <div className="category">CMS</div>
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

export default Portfolio;
