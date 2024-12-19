
import React, { Component } from 'react'



export class Navbar extends Component {

  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Voice Of Pakistan</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link " href="/business">Business</a></li>
        <li className="nav-item">
          <a className="nav-link "href="/entertainment">Entertainment</a></li>
        <li className="nav-item">
          <a className="nav-link "href="/health">Health</a></li>
        <li className="nav-item">
          <a className="nav-link "href="/science">Science</a></li>
        <li className="nav-item">
          <a className="nav-link "href="/sports">Sports</a></li>
        <li className="nav-item">
          <a className="nav-link "href="/technology">Technology</a></li>


        
      </ul>
      {/* <form className="d-flex" role="search"> 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
// import { link, to } from "react-router-dom";

// const Navbar=()=> {

  
//     return (
//       <div>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Voice Of Pakistan</a>
    
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item" >
//           <a className="nav-link " href="/business">Business</a></li>
//         <li className="nav-item">
//           <a className="nav-link "href="/entertainment">Entertainment</a></li>
//         <li className="nav-item">
//           <a className="nav-link "href="/health">Health</a></li>
//         <li className="nav-item">
//           <a className="nav-link "href="/science">Science</a></li>
//         <li className="nav-item">
//           <a className="nav-link "href="/sports">Sports</a></li>
//         <li className="nav-item">
//           <a className="nav-link "href="/technology">Technology</a></li>


        
//       </ul>
//       {/* <form className="d-flex" role="search"> 
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//     </form>*/}
//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }


// export default Navbar
