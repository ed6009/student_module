import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="space-y-4">
        <header className="flex flex-wrap w-full py-3 text-sm bg-gray-800 sm:justify-start sm:flex-nowrap dark:bg-white">
          <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80 dark:text-neutral-800"
                href="#"
              >
                ED Tech
              </a>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="relative flex items-center justify-center gap-2 text-sm font-medium text-gray-400 align-middle bg-gray-800 border border-gray-700 rounded-lg shadow-sm hs-collapse-toggle size-7 hover:bg-gray-700/20 focus:outline-none focus:bg-gray-700/20 dark:bg-white dark:hover:bg-gray-100 dark:border-gray-200 dark:text-gray-600 dark:focus:bg-gray-100"
                  id="hs-navbar-dark-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-dark"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-dark"
                >
                  <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hidden hs-collapse-open:block shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span className="sr-only">Toggle</span>
                </button>
              </div>
            </div>
            <div
              id="hs-navbar-dark"
              className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
              aria-labelledby="hs-navbar-dark-collapse"
            >
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a
                  className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="font-medium text-white focus:outline-none dark:text-black"
                  href="#"
                  aria-current="page"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
