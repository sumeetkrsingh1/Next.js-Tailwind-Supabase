'use client'; 
import { useRouter } from 'next/router';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; 

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setMessage('');
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError('Invalid credentials. Please try again.');
    } else {
      setMessage('Login successful!');
      router.push('/dashboard'); 
    }
  };
    

  const handleRegister = async () => {
    const { email, password } = formData;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setMessage('Check your email to confirm your registration!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-600 to-green-500 font-['Roboto']">
      <div className="w-[360px] bg-white p-12 shadow-lg text-center">
        {isRegistering ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-100 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-100 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-100 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white text-sm uppercase hover:bg-green-700 transition"
            >
              Create
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
            <p className="text-sm text-gray-400 mt-4">
              Already registered?{' '}
              <button
                type="button"
                className="text-green-600 underline"
                onClick={() => setIsRegistering(false)}
              >
                Sign In
              </button>
            </p>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-100 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-100 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white text-sm uppercase hover:bg-green-700 transition"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
            <p className="text-sm text-gray-400 mt-4">
              Not registered?{' '}
              <button
                type="button"
                className="text-green-600 underline"
                onClick={() => setIsRegistering(true)}
              >
                Create an account
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
