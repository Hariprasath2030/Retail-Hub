import React from 'react';
import { Card, Typography, Form, Input, Button, Spin, Alert } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import registerImage from '../assets/register.jpg'; // Correct image import
import useSignup from '../hooks/useSignup';
import '../Auth/form.css';

const Register = () => {
  const {loading,error, registerUser} = useSignup(); // Importing useAuth hook
  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className='form-container'>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}> {/* Using a standard div for Flex layout */}
        <div style={{ flex: 1 }}> {/* Using a standard div for vertical flex */}
          <Typography.Title level={3} strong className='title'>
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Enter your details
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete='off'>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input size="large" placeholder="Enter your Full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your Email!' },
                { type: 'email', message: 'The input is not a valid Email!' },
              ]}
            >
              <Input size="large" placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="large" placeholder="Enter your Password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
              <Input.Password size="large" placeholder="Re-enter your Password" />
            </Form.Item>

            {error && (
              <Alert 
              description={error} 
              type="error" 
              showIcon 
              closable
              className='alert'
              />
            )}
            
            <Form.Item>
              <Button 
              type={`${loading ? '' : 'primary'}`}
               htmlType="submit" size="large" className='btn'>
              { loading ? <Spin /> : 'Create Account' }
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className='btn'>
                  Sign in
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
        <div style = {{ flex: 1 }}>
          <img src={registerImage} alt="Register" className='auth-image' />
        </div>
      </div>
    </Card>
  );
};

export default Register;
