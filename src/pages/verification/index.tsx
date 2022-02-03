import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import arrow from "../../assets/svg/arrow.svg";
import Header from "../../components/Header";

interface LocationState {
      platform: string;
  }

function Verification() {
  const [isChecked, setIsChecked] = useState(false);
 const location = useLocation<LocationState>()
 const {state} = location;

  return (
    <>
      <Header />
      <Container className="p-4 text-center">
      <div className="mt-4">
          <span>
          We've sent a 6-digit verification code to the {state?.platform}
          </span>
        </div>
        <div className="mt-2">
            <span>johndoe@gmail.com</span>
        </div>
       <div className="mt-4">
           <span>Enter verification code</span>
       </div>
       <div className="mt-4 d-flex justify-content-around align-items-center" >
        <div >
        <input maxLength={2} className="otp-input" />
        </div>
        <div >
        <input maxLength={2} className="otp-input" />
        </div>
        <div >
        <input maxLength={2} className="otp-input" />
        </div>
        <div >
        <input maxLength={2} className="otp-input" />
        </div>
        <div >
        <input maxLength={2} className="otp-input" />
        </div>
        <div >
        <input maxLength={2} className="otp-input" />
        </div>
       </div>
        <div className="mt-4">
          <Button disabled className="disable-continue-btn">
            Continue
            <img className="p-2" src={arrow} />
          </Button>
        </div>
        
        <div className="mt-4 separator" />
       
        <div className="mt-4"><span>Didn't receive your code?</span></div>
       <div className="mt-4 resend-text"><span>Send to a different email address</span></div>
       <div className="mt-4 resend-text"><span>Resend your code </span></div>
      </Container>
    </>
  );
}

export default Verification;
