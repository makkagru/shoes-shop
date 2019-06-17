import React from 'react';
import './index.css';
import Loader from 'react-loader-spinner';
import logo from '../../images/logo.png';
import { connect } from 'react-redux';
import { toggleLoading, getMain, changeIndex, changeHeaderToggle, modalToggle } from '../../action';
import cancel from '../../images/close-button.png';
import android from '../../images/android-brands.svg';
import ios from '../../images/apple-brands.svg';
import { Modal, ModalBody } from 'reactstrap';


class Home extends React.Component {

  componentDidMount() {
      this.props.mainGet();
    }

  toHome = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
  }

  openNewTab = (url) => {
    window.open(url, '_blank');
  }

  render() {
    const {mainCategory: {categoryOptions}} = this.props.app;
    return(
      <main>
        <header className="sticky-top">
          <div className="header">
            <div className="logoToggle">
              <div>
                <img src={logo} className="logo" alt="img" onClick={this.toHome} />
              </div>
              <div>
                {this.props.app.isOpen ? (
                  <div className="menu" style={{backgroundColor: '#fff'}} onClick={() => {
                    this.props.headerToggle();
                    }}>
                    <div className="line">
                      
                    </div>
                    <div className="line">
                      
                    </div>
                    <div className="line">
                      
                    </div>
                  </div>
                  ) : (
                  // <img src={toggle} alt="img" className="toggle" onClick={() => {
                  //   this.props.headerToggle();
                  // }} />
                  <div className="menuClose" style={{backgroundColor: '#fff'}} onClick={() => {
                    this.props.headerToggle()
                    }}>
                    <div className="line">
                      
                    </div>
                    <div className="line">
                      
                    </div>
                    <div className="line">
                      
                    </div>
                  </div>
                  )
                }
              </div>
            </div>
              <div className="categories-flex-container">
                {categoryOptions && categoryOptions.map((item, index) => (
                  <div style={{cursor: 'pointer'}} className={this.props.app.isOpen ? 'openTab' : 'closeTab'} key={item.id} onClick={() => {
                    this.props.indexChange(index);
                    this.props.headerToggle();
                    }}>{item.properties.name}
                  </div>
                ))
                }
              </div>
          </div>
         </header>
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
                      <div className="img" onClick={() => {this.props.toggleModal()}}>
                        <img style={{height: '400px', width: '300px'}} src={item.photos[0].url} alt="img" />
                      </div>
                      <div>
                        <h5>{item.name}</h5>
                        <p>{item.price}Դ</p>
                      </div>
                    </div>
               </div>
                 ))
             }
           </div>
         }
              <Modal isOpen={this.props.app.modalIsOpen} fade={false}
                       toggle={() => {this.props.toggleModal()}} className="modal">
                <div>
                  <img className="modalCancel" src={cancel} alt="img" onClick={() => {
                    this.props.toggleModal()
                    }} />
                </div>
                <ModalBody>
                  <h2 style={{textAlign: 'center'}}>
                    Install our application in your divice
                  </h2>
                    <div className="modalButtons">
                      <div>
                        <button className="androidBtn" onClick={() => {
                          this.openNewTab('https://www.google.com/');
                          this.props.toggleModal();
                        }}>
                          <div>
                            <img src={android} alt="img"  style={{width: '30px', height: 'auto'}} />
                          </div>
                          <div className="androidText">
                            Android
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="iosBtn" onClick={() => {
                          this.openNewTab('https://www.youtube.com');
                          this.props.toggleModal();
                        }}>
                          <div>
                            <img src={ios} alt="img" style={{width: '25px', height: 'auto'}} />
                          </div>
                          <div className="iosText">
                            IOS
                          </div>
                        </button>
                      </div>
                    </div>
                </ModalBody>
              </Modal>

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
  headerToggle: () => dispatch(changeHeaderToggle()),
  toggleModal: () => dispatch(modalToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
