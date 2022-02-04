import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import arrow from '../../assets/svg/arrow.svg';
import Header from '../../components/Header';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { useHistory } from 'react-router-dom';
import { addUser } from 'redux/appSlice';

function Signup() {
  const [isEmail, setIsEmail] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const history = useHistory();
  const { app } = useAppSelector((state) => state);
  const dispacth = useAppDispatch();

  const checkValid = () => {
    if (isEmail && email) {
      let data = { user: { ...app.user, isEmail: true, email } };
      dispacth(addUser(data));
      history.push('/verification', { platform: isEmail ? 'email' : 'phone' });
    } else if (!isEmail && phone) {
      let data = { user: { ...app.user, isEmail: false, phone } };
      dispacth(addUser(data));
      history.push('/verification', { platform: isEmail ? 'email' : 'phone' });
    } else {
      console.warn('Must fill the feild');
    }
  };

  return (
    <>
      <Header />
      <Container className='p-4 text-center'>
        <div className='d-flex align-items-center justify-content-center'>
          <div
            onClick={() => setIsEmail(true)}
            className={isEmail ? 'check-btn' : ''}>
            <span>Email</span>
          </div>
          <div
            onClick={() => setIsEmail(false)}
            className={!isEmail ? 'check-btn ml-15' : 'ml-15'}>
            <span>Phone</span>
          </div>
        </div>
        <div className='mt-4'>
          {isEmail ? (
            <input
              type='email'
              className='p-2 input'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsDisabled(false);
              }}
              placeholder='johndoe@gmail.com'
            />
          ) : (
            <input
              type='number'
              className='p-2 input'
              value={phone}
              onChange={(e) => {
                setIsDisabled(false);
                setPhone(e.target.value);
              }}
              placeholder='Ex (337) 378 8383'
            />
          )}
        </div>
        <div className='mt-4'>
          <Button
            disabled={isDisabled}
            onClick={checkValid}
            className={`${isDisabled ? 'disable-continue-btn' : 'primary'}`}>
            Continue
            <img className='p-2' src={arrow} alt='arrow' />
          </Button>
        </div>
        <div className='mt-4'>
          <span>
            by clicking continue you must agree to near labs{' '}
            <span className='terms-cond-text'>Terms & Conditions</span> ans{' '}
            <span className='terms-cond-text'> Privacy Policy</span>
          </span>
        </div>
        <div className='mt-4 separator' />
        <div className='mt-4'>
          <span>Already have NEAR account?</span>
        </div>
        <div className='mt-4'>
          <Button className='lgn-btn'>
            Log in with NEAR
            <img className='p-2' src={arrow} alt='arrow' />
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Signup;
