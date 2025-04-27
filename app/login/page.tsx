'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later connect to real authentication API
    console.log('Logging in with:', email, password);
    alert('Login successful!');
  };

  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login to Japam</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="bg-black text-white px-8 py-3 rounded hover:bg-red-600 transition">
              Login
            </button>
          </div>
        </form>

        {/* Link to Signup */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-red-600 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
