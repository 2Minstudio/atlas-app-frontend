// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./logo/logo";
// import { Logout } from "../../helpers/helper";
// class Headerlanding extends React.Component {
//   state = {
//     user: {},
//   };
//   componentDidMount() {
//     const { user } = this.props;
//     this.setState({ user });
//   }
//   static getDerivedStateFromProps(nextProps, prevState) {
//     const { user } = prevState;
//     if (nextProps.user !== user) {
//       return { user: nextProps.user };
//     }
//     return null;
//   }
//   render() {
//     const {
//       user: { first_name },
//     } = this.state;

//     return (
//       <header className=" header bg-light pb-1">
//         <div className="container pt-5">
//           <div className="d-flex d-flex justify-content-between align-items-center pb-2 mb-4 border p-2 border-opacity-10 rounded-pill shadow-sm bg-white">
//             <Logo />
//             <nav className="navigation pe-3">
//               <input type="checkbox" className="toggle-menu"></input>
//               <div className="hamburger"></div>
//               <ul className="nav-menu">
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     Community
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     {" "}
//                     <span className="text-dark">{first_name}</span>{" "}
//                     <FontAwesomeIcon
//                       className="Auser text-primary position-relative"
//                       icon={faCircleUser}
//                     />
//                     <span className="Indicator position-absolute translate-left p-1 bg-success border border-light rounded-circle">
//                       <span className="visually-hidden">New alerts</span>
//                     </span>{" "}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="nav-link">
//                     <Link href={"#"} onClick={() => Logout()}>
//                       Logout
//                     </Link>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

// export default Headerlanding;
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./logo/logo";
import { Logout } from "../../helpers/helper";
class Headerlanding extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    const { user } = this.props;
    this.setState({ user });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { user } = prevState;
    if (nextProps.user !== user) {
      return { user: nextProps.user };
    }
    return null;
  }
  render() {
    const {
      user: { first_name },
    } = this.state;
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className=' my-5 border-radius-60 pb-2 mb-4 border p-2 border-opacity-10 shadow-sm bg-white'>
        <Navbar.Brand className='py-1 ps-3' href="#home"><Logo /></Navbar.Brand>
        <Navbar.Toggle className="me-3" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end d-flex align-items-sm-start align-items-lg-center" id="responsive-navbar-nav">
          
          <Nav>
            <Nav.Link href="#">Community</Nav.Link>
            <Nav.Link href="#" className="nav-link">
                 <span className="text-dark">{first_name}</span>{" "}
                    <FontAwesomeIcon
                      className="AuserNoMargin text-primary position-relative"
                       icon={faCircleUser}
                    />
                     <span className="Indicator position-absolute p-1 bg-success border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span></span>{" "}
                   
            </Nav.Link>
            <Nav.Link href={"#"} onClick={() => Logout()}><b>Logout</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}
}

export default Headerlanding;
