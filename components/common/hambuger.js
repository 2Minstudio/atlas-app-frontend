import { push as Menu } from 'react-burger-menu'
import React from 'react';
import { auto } from '@popperjs/core';
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';

var styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '36px',
      height: '30px',
      right: '0',
      top: '0px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'absolute',
      height: '100%',
      right: '0%',
      width: '50%',
      top:'0',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      height:'100%',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      left:'50%',
      width:'50%',
      top:'0',
    }
  }
  

  
class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      
        <Menu styles={ styles }>
        <ul className="nav align-items-center">
            
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {" "}
                Take Eligibility Test{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                Enquire Now{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn px-4 btn-md btn-outline-success rounded-pill">
                  {" "}
                  Login{" "}
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn px-4 btn-md btn-success rounded-pill">
                  {" "}
                  Sign Up{" "}
                </button>
              </a>
            </li>
            </ul>
      </Menu>
    );
  }
}

export default Hamburger ;