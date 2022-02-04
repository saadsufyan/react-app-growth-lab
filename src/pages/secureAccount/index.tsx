import React, { useState } from 'react';
import PagesHeader from 'components/PagesHeader';
import { RightOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Progress } from 'antd';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { addUser } from 'redux/appSlice';

function SecureAccount() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const { app } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    let data = {
      user: { ...app?.user, password: values?.password },
    };
    dispatch(addUser(data));
    history.push('/secure-account');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <PagesHeader title='Secure your account' />
      <Progress percent={75} showInfo={false} />
      <Container className='CreateAccountPage p-4'>
        <div className='mt-4'>
          <p className='heading'>
            Keep your apps safe from other with access to your computer.
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
            label='Password'
            name='password'
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}>
            <Input.Password onChange={() => setIsDisabled(false)} />
          </Form.Item>

          <Form.Item
            label='Confirm Password'
            name='confirm'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              htmlType='submit'
              className={`${
                isDisabled ? 'disable-continue-btn' : 'bg-primary'
              } subBtn d-flex justify-content-center align-items-center`}>
              Continue <RightOutlined />
            </Button>
          </Form.Item>
        </Form>

        <div className='mt-4'>
          <a className='email' href='mailto:claudio@metapool.app'>
            claudio@metapool.app
          </a>
          <p className='term'>
            By creating a NEAR account, you agree to the NEAR Wallet{' '}
            <a href='/'>Terms of Service</a> and <a href='/'>Privacy Policy</a>.
          </p>
        </div>
      </Container>
    </>
  );
}

export default SecureAccount;
