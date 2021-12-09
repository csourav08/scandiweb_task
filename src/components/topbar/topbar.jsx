import React, { Component } from "react"
import "./topbar.css"

class Topbar extends Component {
  render() {
    return (
      <div className={"topbar"}>
        <div className="wrapper">
          <div className="container">
            <div>
              <a href="#Women" className="navbtn">
                Women
              </a>
            </div>
            <div>
              <a href="#Men" className="navbtn">
                Men
              </a>
            </div>
            <div>
              <a href="#Kids" className="navbtn">
                Kids
              </a>
            </div>
          </div>

          <div className="container">
            <img className="profile-photo" src={require("../../images/logo.jpeg")} alt={"Logo"} />
          </div>
          <div className="container">
            <div>
              <img className="profile-photo" src={require("../../images/currency.png")} alt={"currency"} />
            </div>
            <div>
              <img className="profile-photo" src={require("../../images/cart.png")} alt={"cart"} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Topbar

// export default function Topbar({ menuOpen, setMenuOpen }) {
//   return (
//     <div className={"topbar " + (menuOpen && "active")}>
//       <div className="wrapper">
//         <div className="left">
//           <a href="#intro" className="logo">
//             genius.
//           </a>
//           <div className="itemContainer">
//             {/* <Person className="icon" /> */}
//             <span>+44 924 12 74</span>
//           </div>
//           <div className="itemContainer">
//             {/* <Mail className="icon" /> */}
//             <span>safak@genius.com</span>
//           </div>
//         </div>
//         <div className="right">
//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             <span className="line1"></span>
//             <span className="line2"></span>
//             <span className="line3"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // export default Topbar
