import React from 'react';
import './index.css';
import Loader from 'react-loader-spinner';
import logo from '../../images/logo-large.png';
import { connect } from 'react-redux';
import { toggleLoading, getMain, changeIndex, changeHeaderToggle, modalToggle } from '../../action';
import toggle from '../../images/align-justify.svg';
import cancel from '../../images/close-button.png';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


class Home extends React.Component {

  componentDidMount() {
      this.props.mainGet();
    }
  toHome = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
  }

  render() {
    console.log(this.props)
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
                  <img style={{width: '30px', height: '30px'}} src={cancel} alt="img" className="toggle" onClick={() => {
                    this.props.headerToggle();
                  }} />
                  ) : (
                  <img src={toggle} alt="img" className="toggle" onClick={() => {
                    this.props.headerToggle();
                  }} />
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
                        <p>${item.price}</p>
                      </div>
                    </div>
               </div>
                 ))
             }
           </div>
         }
              <Modal isOpen={this.props.app.modalIsOpen} fade={false}
                       toggle={this.props.toggleModal} style={{width: "200px", display: "block", justifyContent: 'center'}}>
                    <ModalHeader toggle={this.props.toggleModal}>

                    </ModalHeader>
                    <ModalBody>
                        <h1>
                          Number of Artist: +374********
                        </h1>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.props.modalToggle}>
                            Ok
                        </Button>
                        <Button onClick={this.props.modalToggle}>Cancel</Button>
                    </ModalFooter>
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
