import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Login from '../Components/Login'; 
import Signup from '../Components/Signup';
import Navbar from '../Components/Navbar';
import authPage from '../Style/authPage';

const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <View >
      <Navbar/>
      <View style={authPage.page}>
      {isLogin ? <Login /> : <Signup />}
      <Button
        title={`Already have an account ? ${isLogin ? 'Signup' : 'Login'}`}
        onPress={() => setIsLogin(!isLogin)}
      />
      </View>
    </View>
  );
};

export default AuthPage;