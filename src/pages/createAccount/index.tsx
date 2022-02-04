import React, { useState } from 'react';
import PagesHeader from 'components/PagesHeader';
import { RightOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Progress } from 'antd';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { addUser } from 'redux/appSlice';

function CreateAccount() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const { app } = useAppSelector((state) => state);
  const dispacth = useAppDispatch();
  const onFinish = (values: any) => {
    let data = {
      user: { ...values, ...app.user },
    };
    dispacth(addUser(data));
    history.push('/secure-account');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <PagesHeader title='Create NEAR account' />
      <Progress percent={50} showInfo={false} />
      <Container className='CreateAccountPage p-4'>
        <div className='mt-4'>
          <p className='heading'>
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </p>
        </div>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            label='Full Name'
            name='fullName'
            rules={[
              { required: true, message: 'Please input your full name!' },
            ]}>
            <Input
              onChange={() => setIsDisabled(false)}
              placeholder='Ex. John doe'
            />
          </Form.Item>

          <Form.Item
            label='Account ID'
            name='accountId'
            rules={[{ required: true, message: 'Account ID already taken!' }]}>
            <Input addonAfter={<span>.near</span>} placeholder='yourname' />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType='submit'
              className={`${
                isDisabled ? 'disable-continue-btn' : 'bg-primary'
              } mx-auto subBtn d-flex justify-content-center align-items-center`}>
              Continue <RightOutlined />
            </Button>
          </Form.Item>
        </Form>

        <div className='mt-4'>
          <p className='term'>
            By creating a NEAR account, you agree to the NEAR Wallet{' '}
            <a href='/'>Terms of Service</a> and <a href='/'>Privacy Policy</a>.
          </p>
        </div>
        <div className='mt-4 separator' />

        <div className='mt-4 description w-100 d-flex justify-content-between align-items-between flex-column'>
          <span>Already have NEAR account?</span>
          <Button className='btnNear d-flex justify-content-center align-items-center'>
            Log in with NEAR <RightOutlined />
          </Button>
        </div>
      </Container>
    </>
  );
}

export default CreateAccount;
