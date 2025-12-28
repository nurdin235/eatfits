import React from 'react';

export const LoginForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="input-group">
        <label className="text-gray-900 dark:text-gray-400 text-sm font-semibold ml-1">Email Address</label>
        <input type="email" className="form-input" placeholder="jane@example.com" />
      </div>
      <div className="input-group">
        <label className="text-gray-900 dark:text-gray-400 text-sm font-semibold ml-1">Password</label>
        <input type="password" className="form-input" placeholder="••••••••" />
      </div>
    </div>
  );
};