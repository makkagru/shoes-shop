import React from 'react';
import './App.css';
import classNames from 'classnames/bind';
import Loader from 'react-loader-spinner';
import jeans from './images/jeans.jpg';
import boss from './images/boss.svg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import { connect } from 'react-redux';
import { toggleLoading, getMain, changeIndex } from './action';

class App extends React.Component {

componentDidMount() {
    this.props.mainGet();
    window.addEventListener("scroll", this.scroll);
  }

  scroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      headerEl = document.getElementById("header");
      let shrinkOn = headerEl.offsetTop;

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");

    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    const {mainCategory: {categoryOptions}} = this.props.app;
    return(
      <div className="main">
          <div id="header">
              <div className="header-flex-container">
                <div>
                  <img style={{width: '70px', height: '50px'}} src={boss} alt="img" />
                </div>
              </div>
                <div id="categories-flex-container" className="categories-flex-container">
              { categoryOptions && categoryOptions.map((item, index) => 
                  <div key={item.id} className={classNames('tab', this.props.app.selectedTab === index && 'bold')} onClick={() => {
                    this.props.indexChange(index);
                  }}>
                    <span>{item.properties.name}</span>
                  </div>
              )}
                </div>
          </div>
          {this.props.app.loading &&
          <Loader
            className="loader" 
            type="Puff"
            color="#00BFFF"
            height="100" 
            width="100"
          />  
          }

           {categoryOptions && 
             categoryOptions[this.props.app.selectedTab].items.map(item => (
             <div key={item.id} className="categories-flex-container">
                 {item.photos.map((photo) => (
                  <div key={photo.id}>
                    <img className="Images" src={photo.url} alt="img" />
                    <p className="paragraph">{item.name}</p>
                  </div>
                 ))
                }
             </div>
               ))
           }

           {this.props.app.selectedTab === 0 && 
            <div className="listings">
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
            </div>

           }
           {this.props.app.selectedTab === 1 &&
            <div className="listings">
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
            </div>

          }
          {this.props.app.selectedTab === 2 &&
            <div className="listings">
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
            </div>

          }

          {this.props.app.selectedTab === 3 && 
            <div className="listings">
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image2} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image3} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image4} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
              <div className="listing">
                <div className="img">
                  <img style={{height: '400px', width: '300px'}}src={image5} alt="img" />
                </div>
                <div>
                  <h5>Անուն</h5>
                  <p>$10.4040</p>
                </div>
              </div>
            </div>
          }
          
        </div>

      );
  }
}

const mapStateToProps = state => ({
  app: state
})

const mapDispatchToProps = dispatch => ({
  loadingToggle: () => dispatch(toggleLoading()),
  mainGet: () => dispatch(getMain()),
  indexChange: (index) => dispatch(changeIndex(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
