import React, { useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Middle from "./Middle";
const Menu = () => {

  return (
    <div id="header">
      <MobileMenu/>
       <DesktopMenu/>
    </div>
  );
};

export default Menu;
