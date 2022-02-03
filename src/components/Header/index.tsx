import React from 'react';
import {} from 'react-bootstrap'
import Icon from '../../assets/svg/header.svg'

function Header() {
  return (
    <div className="align-items-center d-flex justify-content-center header-container" >
     <img src={Icon} />
     <div className="p-2">
     <span className='header-text1'>Home</span><span>Page</span>
     </div>
    </div>
  );
}

export default Header;
