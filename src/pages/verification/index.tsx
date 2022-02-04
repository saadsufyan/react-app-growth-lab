import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import OtpInput from 'react-otp-input';

import arrow from '../../assets/svg/arrow.svg';
import Header from '../../components/Header';

interface LocationState {
  platform: string;
}

function Verification() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [otp, setIsOtp] = useState('');
  const location = useLocation<LocationState>();
  const { state } = location;
  const history = useHistory();

  const handleGo = () => {
    if (otp) {
      history.push('/create-account');
    }
  };

  return (
    <>
      <Header />
      <Container className='p-4 text-center'>
        <div className='mt-4'>
          <span>
            We've sent a 6-digit verification code to the {state?.platform}
          </span>
        </div>
        <div className='mt-2'>
          <span>johndoe@gmail.com</span>
        </div>
        <div className='mt-4'>
          <span>Enter verification code</span>
        </div>
        <div className='mt-4 otpDiv d-flex justify-content-around align-items-center'>
          <div>
            <OtpInput
              value={otp}
              onChange={(otp: string) => {
                setIsDisabled(false);
                setIsOtp(otp);
              }}
              numInputs={6}
              separator={<span>-</span>}
            />
          </div>
        </div>
        <div className='mt-4'>
          <Button
            disabled={isDisabled}
            onClick={handleGo}
            className={`${isDisabled ? 'disable-continue-btn' : 'primary'}`}>
            Continue
            <img className='p-2' src={arrow} alt='arrow' />
          </Button>
        </div>

        <div className='mt-4 separator' />

        <div className='mt-4'>
          <span>Didn't receive your code?</span>
        </div>
        <div className='mt-4 resend-text'>
          <span>Send to a different email address</span>
        </div>
        <div className='mt-4 resend-text'>
          <span>Resend your code </span>
        </div>
      </Container>
    </>
  );
}

export default Verification;
