import React from "react";

type AppProps = {
  title: string;
}
function PagesHeader(props:AppProps) {
  return (
    <div className='align-items-center d-flex justify-content-center header-container'>
      <div className='w-100 d-flex justify-content-center align-items-center position-relative'>
        {props?.title}
        <button className="XBtn d-flex justify-content-center align-items-center "><img src='/cross.svg' alt='Cross' /></button>
      </div>
    </div>
  );
}

export default PagesHeader;