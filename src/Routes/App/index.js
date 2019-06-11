import React from 'react';
import './index.css';
import classNames from 'classnames/bind';
import Loader from 'react-loader-spinner';
import logo from '../../images/logo-large.png';
import { connect } from 'react-redux';
import { toggleLoading, getMain, changeIndex, changeHeaderToggle } from '../../action';
import { NavbarBrand, Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import toggle from '../../icons/align-justify.svg';
import cancel from '../../icons/x-circle.svg';


class App extends React.Component {

componentDidMount() {
    this.props.mainGet();
  }

  render() {
    const {mainCategory: {categoryOptions}} = this.props.app;
    console.log(categoryOptions);
    return(
      <main>
             <Navbar light  expand="md"  className="sticky-top">
                <NavbarBrand>
                  <img src={logo} alt="img" style={{width: 'auto', height: '30px'}}/>
                </NavbarBrand>
                {/* <span className={classNames(this.props.app.isOpen ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-align-justify' )} onClick={() => { */}
                {/*   this.props.headerToggle(); */}
                {/* }} /> */}
                <NavbarToggler className="toggler" onClick={() => {
                  this.props.headerToggle();
                }} />
                <Collapse isOpen={this.props.app.isOpen} navbar>
                  <Nav className="categories-flex-container">
                        {categoryOptions && categoryOptions.map((item, index) => (
                          <div key={item.id} className={classNames('tab', this.props.app.selectedTab === index && 'bold')} onClick={() => {
                            this.props.indexChange(index);
                            this.props.headerToggle();
                            }}>
                            <span>{item.properties.name}</span>
                          </div>
                          ))
                         }
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
