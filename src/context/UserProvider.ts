import React, { createContext, useContext } from 'react';
import myImage from './../assets/images/profile-pic.png';
type User = {
  name: string;
  email: string;
  image: string;
  url: string;
  status?: string;
};

const userData: User = {
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  image: myImage,
  url: 'https://jsplaceholder.com/user',
  status: "Active",
};

export const UserContext = createContext<User>(userData);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => 
  React.createElement(
    UserContext.Provider,
    { value: userData },
    children
  );