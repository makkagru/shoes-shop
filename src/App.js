import React from 'react';
import './App.css';
import classNames from 'classnames/bind';
import Loader from 'react-loader-spinner';
import image from './image.jpg';
import boss from './boss.svg';

class Item extends React.Component {
  state = {
    selectedTab: 0,
    mainCategory: [],
    loading: false
  }

   componentDidMount() {
    this.getmain();
    window.addEventListener("scroll", this.scroll);
  }

  getmain = async () => {
    this.setState({loading: true})
    const response = await fetch(`http://ec2-34-219-117-235.us-west-2.compute.amazonaws.com:8080/categories/main`, {
      method: 'GET',
      headers: { 
        "projectId": "Uun-OVEBx"
      }
    });
    const res = await response.json();
    this.setState({mainCategory: res.data, loading: false})
  }

  scroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    const {mainCategory: {categoryOptions}} = this.state;
    return(
      <div className="main">
          <div id="header">
              <div className="header-flex-container">
                <div>
                  <img style={{width: '70px', height: '70px'}} src={boss} alt="img" />
                </div>
              </div>
                <div className="categories-flex-container">
              { categoryOptions && categoryOptions.map((item, index) => 
                  <div key={item.id} className={classNames('tab', this.state.selectedTab === index && 'bold')} onClick={() => {
                    this.setState({
                      selectedTab: index
                    })
                  }}>
                    <span>{item.properties.name}</span>
                  </div>
              )}
                </div>
          </div>
          {this.state.loading &&
          <Loader
            className="loader" 
            type="Puff"
            color="#00BFFF"
            height="100" 
            width="100"
          />  
          }
           {this.state.selectedTab === 0 && categoryOptions && 
             categoryOptions[0].items.map(item => (
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

           {this.state.selectedTab === 0 && 
            <div className="listings">
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                    <p>$10.4040</p>
                </div>
              </div>
               <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>
              <div className="listing">
                <img style={{height: '400px', width: '300px'}} src={image} alt="img" />
                <div>
                    <h5>Անուն</h5>
                    <p>$10.4040</p>
                  <span>ՀասցեՀասցեՀասցեՀասցեասֆվկա</span>
                </div>
              </div>

            </div>

           }

           {this.state.secondTab && categoryOptions && 
             categoryOptions[1].items.map(item => (
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

           {this.state.thirdTab && categoryOptions && 
             categoryOptions[2].items.map(item => (
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

          {this.state.fourthTab && categoryOptions && 
             categoryOptions[3].items.map(item => (
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
          
        </div>

      );
  }
}

export default Item;
