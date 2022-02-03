import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import arrow from "../../assets/svg/arrow.svg";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

function Signup() {
  const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();
  return (
    <>
      <Header />
      <Container className="p-4 text-center">
        <div className="d-flex align-items-center justify-content-center">
          <div
            onClick={() => setIsChecked(true)}
            className={isChecked ? "check-btn" : ""}
          >
            <span>Email</span>
          </div>
          <div
            onClick={() => setIsChecked(false)}
            className={!isChecked ? "check-btn ml-15" : "ml-15"}
          >
            <span>Phone</span>
          </div>
        </div>
        <div className="mt-4">
          {isChecked ? (
               <input
               type="email"
               className="p-2 input"
               placeholder="johndoe@gmail.com"
             />
        
          ) : (
            <input
            type="number"
            className="p-2 input"
            placeholder="Ex (337) 378 8383"
          />
          )}
        </div>
        <div className="mt-4">
          <Button onClick={() => history.push('/verification', {platform:isChecked ? 'email' : 'phone'})} className="continue-btn">
            Continue
            <img className="p-2" src={arrow} />
          </Button>
        </div>
        <div className="mt-4">
          <span>
            by clicking continue you must agree to near labs{" "}
            <span className="terms-cond-text">Terms & Conditions</span> ans{" "}
            <span className="terms-cond-text"> Privacy Policy</span>
          </span>
        </div>
        <div className="mt-4 separator" />
        <div className="mt-4">
          <span>Already have NEAR account?</span>
        </div>
        <div className="mt-4">
          <Button className="lgn-btn">
            Log in with NEAR
            <img className="p-2" src={arrow} />
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Signup;
