import React, { createContext, useState } from 'react';

const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [loggedInUsername, setLoggedInUsername] = useState('');

  return (
    <UsernameContext.Provider value={{ loggedInUsername, setLoggedInUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameContext;
