import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Login from '../Components/Login'; 
import Signup from '../Components/Signup';
import Navbar from '../Components/Navbar';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View >
      <Navbar/>
      {isLogin ? <Login /> : <Signup />}
      <Button
        title={`Switch to ${isLogin ? 'Signup' : 'Login'}`}
        onPress={() => setIsLogin(!isLogin)}
      />
    </View>
  );
};

export default AuthPage;