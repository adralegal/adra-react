import React, { useState } from "react"
import PropTypes from "prop-types"
import HamburgerMenu from "react-hamburger-menu";
import Navbar from "./navbar/navbar"
import Sidebar from "./sidebar/sidebar"
import Backdrop from "./ui/backdrop/backdrop";
import "./layout.css"

const Layout = ({ children, mobile }) => {
  const className = mobile ? "Mobile" : "Desktop";

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleMenuClicked = () => {
    setSidebarVisible(prevState => !prevState);
  }
  return (
    <>
      <div className={"Layout"}>

        <div className="sidebar-menu">
          <HamburgerMenu isOpen={sidebarVisible}
            menuClicked={handleMenuClicked}
            width={30}
            height={30}
            color='black'
            strokeWidth={5}
          /></div>
        <header className={className}>

          <Navbar />
        </header>
        {/* <nav className={className +" hidden"}>
          <Sidebar />
        </nav> */}
        <Backdrop isVisible={sidebarVisible} component={<Sidebar />} onCloseHandler={handleMenuClicked} />
        <main className={className}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
