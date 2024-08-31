// src/api/userApi.ts

import api from './config';

export const registerUser = async (name: string, email: string, phone: string, password: string) => {
  try {
    const response = await api.post('/users', { name, email, phone, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error registering user';
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error logging in';
  }
};

export const sendOtp = async (phone: string) => {
  try {
    const response = await api.post('/users/send-otp', { phone });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error sending OTP';
  }
};

export const verifyOtp = async (phone: string, otp: string) => {
  try {
    const response = await api.post('/users/verify-otp', { phone, otp });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error verifying OTP';
  }
};
