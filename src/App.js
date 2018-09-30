import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import Preloader from './Preloader.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Faqs from './Components/Faqs/Faqs.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Team from './Components/Team/Team.jsx';


class App extends Component {
  render() {
    return (
      <div className="page">
    		<Preloader />
    		<Header />
    			<Home />
          <About />
    			<Faqs />
          <Portfolio />
          <Team />

    			{/*Contact*/}

    			<div className="lines-grid">
    				<div className="row">
    					<div className="col col-m-12 col-t-6 col-d-4 col-d-lg-3"></div>
    					<div className="col col-m-12 col-t-6 col-d-4 col-d-lg-3">
    						<div className="lines">
    							<div className="line-1"></div>
    							<div className="line-2" style={{AnimationDelay: '10s'}}></div>
    						</div>
    					</div>
    					<div className="col col-m-12 col-t-6 col-d-4 col-d-lg-3">
    						<div className="lines">
    							<div className="line-1"></div>
    						</div>
    					</div>
    					<div className="col col-m-0 col-t-0 col-d-0 col-d-lg-3">
    						<div className="lines">
    							<div className="line-1"></div>
    							<div className="line-2" style={{AnimationDelay: '0s'}}></div>
    						</div>
    					</div>
    				</div>
    			</div>

    		</div>
    );
  }
}

export default App;
