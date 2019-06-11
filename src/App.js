import React from 'react';
import './App.css';
import classNames from 'classnames/bind';
import Loader from 'react-loader-spinner';
import logo from './images/logo-large.png';
import { connect } from 'react-redux';
import { toggleLoading, getMain, changeIndex, changeHeaderToggle } from './action';
import { NavbarBrand, Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';

class App extends React.Component {

componentDidMount() {
    this.props.mainGet();
    // window.addEventListener("scroll", this.scroll);
  }

//   scroll = () => {
//     const distanceY = window.pageYOffset || document.documentElement.scrollTop,
//       headerEl = document.getElementById("header");
//       let shrinkOn = headerEl.offsetTop;
// 
//     if (distanceY > shrinkOn) {
//       headerEl.classList.add("smaller");
// 
//     } else {
//       headerEl.classList.remove("smaller");
//     }
//   }

  render() {
    const {mainCategory: {categoryOptions}} = this.props.app;
    console.log(categoryOptions);
    return(
      <main>
          {/* <div id="header"> */}
          {/*     <div className="header-flex-container"> */}
          {/*       <div> */}
          {/*         <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mainNavbar"> */}
          {/*           <span className="navbar-toggler-icon"></span> */}
          {/*         </button> */}
          {/*         <img style={{width: '70px', height: '50px'}} src={boss} alt="img" /> */}
          {/*       </div> */}
          {/*     </div> */}
              {/*   <Row id="mainNavbar" className="categories-flex-container collapse navbar-collapse"> */}
              {/* { categoryOptions && categoryOptions.map((item, index) =>  */}
              {/*     <Col sm={{size: '3'}} key={item.id} className={classNames('tab', this.props.app.selectedTab === index && 'bold')} onClick={() => { */}
              {/*       this.props.indexChange(index); */}
              {/*       }}> */}
              {/*       <span>{item.properties.name}</span> */}
              {/*     </Col> */}
              {/* )} */}
              {/*   </Row> */}
             <Navbar light  expand="md"  className="sticky-top">
                <NavbarBrand>
                  <img src={logo} alt="img" style={{width: 'auto', height: '30px'}}/>
                </NavbarBrand>
                <NavbarToggler className="toggler" onClick={() => {
                  this.props.headerToggle()

                }} />
                <Collapse isOpen={this.props.app.isOpen} navbar>
                  <Nav className="categories-flex-container">
                    {/* <Row >  */}
                      {/* <Col xs={{size: '12'}}> */}
                        {categoryOptions && categoryOptions.map((item, index) => (
                          <div key={item.id} className={classNames('tab', this.props.app.selectedTab === index && 'bold')} onClick={() => {
                            this.props.indexChange(index);
                            console.log(item);
                            }}>
                            <span>{item.properties.name}</span>
                          </div>
                          ))
                         }
                      {/* </Col> */}
                    {/* </Row> */}
                  </Nav>
                </Collapse>
            </Navbar>
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
             <div className="listings">
               {categoryOptions[this.props.app.selectedTab].items.map(item => (
                 <div key={item.id} className="listing">
                      <div>
                        <div className="img">
                          <img style={{height: '400px', width: '300px'}} src={item.photos[0].url} alt="img" />
                        </div>
                        <div>
                          <h5>{item.name}</h5>
                          <p>${item.price}</p>
                        </div>
                      </div>
                 </div>
                   ))
               }
             </div>
           }

{/*            {this.props.app.selectedTab === 0 && 
{/*             <div className="listings"> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*             </div> */}
{/*  */}
{/*            } */}
{/*            {this.props.app.selectedTab === 1 && */}
{/*             <div className="listings"> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*             </div> */}
{/*  */}
{/*           } */}
{/*           {this.props.app.selectedTab === 2 && */}
{/*             <div className="listings"> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*             </div> */}
{/*  */}
{/*           } */}
{/*  */}
{/*           {this.props.app.selectedTab === 3 &&  */}
{/*             <div className="listings"> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={jeans} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image2} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image3} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image4} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*               <div className="listing"> */}
{/*                 <div className="img"> */}
{/*                   <img style={{height: '400px', width: '300px'}}src={image5} alt="img" /> */}
{/*                 </div> */}
{/*                 <div> */}
{/*                   <h5>Անուն</h5> */}
{/*                   <p>$10.4040</p> */}
{/*                 </div> */}
{/*               </div> */}
{/*             </div> */}
{/*           } */}
{/*            */}
        </main>

      );
  }
}

const mapStateToProps = state => ({
  app: state
})

const mapDispatchToProps = dispatch => ({
  loadingToggle: () => dispatch(toggleLoading()),
  mainGet: () => dispatch(getMain()),
  indexChange: (index) => dispatch(changeIndex(index)),
  headerToggle: () => dispatch(changeHeaderToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
