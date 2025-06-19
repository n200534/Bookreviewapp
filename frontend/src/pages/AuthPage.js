// src/pages/AuthPage.js
import { useState } from 'react';
import LoginForm from '../components /LoginForm';
import RegisterForm from '../components /RegisterForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);
    // call backend API here
  };


  const handleRegister = (data) => {
    console.log('Registering with:', data);
    // call backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        {isLogin ? (
          <LoginForm onSubmit={handleLogin} />
        ) : (
          <RegisterForm onSubmit={handleRegister} />
        )}
        <div className="text-center mt-4">
          <button
            className="text-blue-600 underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
