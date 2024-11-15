import { View, Text } from 'react-native'
import React, { createContext,type ReactNode } from 'react'
import axios from 'axios';
import { LOGIN_USER } from './apiconfig';

interface UserContextType {
  jwt: string;
  user: {};
}

type UserProviderProps = {
  children: ReactNode
}

type UserLoginProps = {
  identifier: string;
  password: string;
}

export const AuthContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: UserProviderProps) => {

  const userLogin = async ({identifier,password}: UserLoginProps) => {
    
    await axios.post(LOGIN_USER, {
              identifier,
              password
          }).then((response) => {
              // console.log("User profile", response.data.user);
              // console.log("User token", response.data.jwt);
              // console.log(response);
              // router.push('/(tabs)');
          })
          .catch((error) => {
              console.log("An error occurred:", error.response);
          });
  }
}
