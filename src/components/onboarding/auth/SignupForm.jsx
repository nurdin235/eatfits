import React from 'react';

export const SignupForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="input-group">
        <label className="text-primary dark:text-primary text-sm font-semibold ml-1">Full Name</label>
        <input type="text" className="form-input" placeholder="Jane Doe" />
      </div>
      <div className="input-group">
        <label className="text-primary dark:text-primary text-sm font-semibold ml-1">Email Address</label>
        <input type="email" className="form-input" placeholder="jane@example.com" />
      </div>
      <div className="input-group">
        <label className="text-primary dark:text-primary text-sm font-semibold ml-1">Password</label>
        <input type="password" className="form-input" placeholder="Min. 8 characters" />
      </div>
      <div className="input-group">
        <label className="text-primary dark:text-primary text-sm font-semibold ml-1">Confirm Password</label>
        <input type="password" className="form-input" placeholder="Re-enter password" />
      </div>
    </div>
  );
};