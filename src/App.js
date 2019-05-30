import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import Loader from 'react-loader-spinner'

class Item extends React.Component {
  state = {
    type: {},
    firstTab: false,
    secondTab: false,
    thirdTab: false,
    fourthTab: false,
    mainCategory: [],
    mainBool: true,
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
    // console.log(response)
    const res = await response.json();
    // console.log(res);
    this.setState({mainCategory: res.data, loading: false})
  }

  scroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30,
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
        <div className="header-flex-container" id="header">
            <div>To other forms</div>
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
          {this.state.mainBool ? categoryOptions  && 
            <div className="categories-flex-container">
              <div className="categories-item"  onClick={() => this.setState({
                  firstTab: true,
                  secondTab: false,
                  thirdTab: false,
                  fourthTab: false,
                  mainBool: false
                  })}>
                <span>{categoryOptions[0].properties.name}</span>
                <img className="Images" src={categoryOptions[0].properties.photo} alt="img"></img>
              </div>
              <div className="categories-item"  onClick={() => this.setState({
                  firstTab: false,
                  secondTab: true,
                  thirdTab: false,
                  fourthTab: false,
                  mainBool: false
                  })}>
                <span>{categoryOptions[1].properties.name}</span>
                  <img className="Images"  src={categoryOptions[1].properties.photo} alt="img"></img>
              </div>
              <div className="categories-item"  onClick={() => this.setState({
                  firstTab: false,
                  secondTab: false,
                  thirdTab: true,
                  fourthTab: false,
                  mainBool: false
                  })}>
                <span>{categoryOptions[2].properties.name}</span>
                <img className="Images" src={categoryOptions[2].properties.photo} alt="img"></img>
              </div>
              <div className="categories-item"  onClick={() => this.setState({
                  firstTab: false,
                  secondTab: false,
                  thirdTab: false,
                  fourthTab: true,
                  mainBool: false
                })}>
                <span>{categoryOptions[3].properties.name}</span>
                <img className="Images" src={categoryOptions[3].properties.photo} alt="img"></img>
                </div>
            </div>
           : (
         <Button className="button" onClick={() => this.setState({
          mainBool: true,
          firstTab: false, 
          secTab: false, 
          thTab: false
        })}>Back</Button>
          )

        }
             

         {this.state.firstTab && categoryOptions && 
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
