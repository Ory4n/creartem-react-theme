import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="particles-bg" className="slide" style={{backgroundImage: 'url(/theme/images/bg.jpg)'}}></div>
      <div className="card-inner card-started active" id="home-card">

          <div className="vertical-center">
            <div class="home-logo"><img src="/Logo.png" alt="Creartem Logo" /></div>

            <div className="title"><span>CREARTEM</span> WEB AGENCY</div>
            <div className="subtitle">

              <div className="typing-title">
                <p>a <strong>Student Initiative </strong></p>
                <p>Work <strong>in a Team</strong></p>
                <p>Gain <strong>real life experience</strong></p>
              </div>
              <span className="typed-title"></span>
            </div>

          </div>
      </div>
    </div>
    );
  }
}

export default Home;
