import React from 'react';

export const SocialAuth = () => {
  return (
    <>
      <div className="flex items-center gap-4 my-8 px-2">
        <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
        <p className="text-gray-400 text-sm font-medium">Or continue with</p>
        <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
      </div>

      <div className="flex gap-4 mb-6">
        <button type="button" aria-label="Continue with Google" className="flex-1 h-12 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 shadow-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
            <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"></path>
            <path d="M5.50253 14.3003C5.00236 12.8199 5.00236 11.1799 5.50253 9.69951V6.60861H1.51649C-0.18551 10.0056 -0.18551 13.9945 1.51649 17.3915L5.50253 14.3003Z" fill="#FBBC05"></path>
            <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.0344664 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.60861L5.50264 9.69951C6.45064 6.85991 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"></path>
          </svg>
          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Google</span>
        </button>
        <button type="button" aria-label="Continue with Apple" className="flex-1 h-12 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 shadow-sm">
          <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.6046 10.1507C16.5815 12.6074 18.6657 13.993 18.7499 14.0372C18.7309 14.1032 18.3377 15.4674 17.3821 16.8837C16.5529 18.1039 15.6888 19.3333 14.3006 19.3621C12.9345 19.3908 12.4939 18.5367 10.8984 18.5367C9.29864 18.5367 8.81079 19.3333 7.49126 19.3908C6.16937 19.4442 5.19579 18.067 4.36329 16.8509C2.65997 14.3644 1.36536 9.82479 3.11674 6.74609C3.98711 5.21588 5.54139 4.2462 7.27627 4.20926C8.59817 4.18053 9.84594 5.11736 10.6559 5.11736C11.4659 5.11736 12.9861 4.02047 14.5673 4.17643C15.2281 4.20516 17.0869 4.41857 18.2714 6.18784C18.1639 6.2535 16.6341 7.16892 16.6046 10.1507ZM12.7552 2.76618C13.4739 1.88378 13.9566 0.65414 13.8217 0C12.6477 0.0492477 11.2314 0.797782 10.3953 1.814C9.64696 2.71694 9.10214 4.00816 9.25599 5.20764C10.5627 5.30614 11.9163 4.54267 12.7552 2.76618Z"></path>
          </svg>
          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">Apple</span>
        </button>
      </div>
    </>
  );
};