import React from 'react';
import { Link } from 'react-router-dom';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header>
      {/* Top Navigation */}
      <div className='bg-black text-center'>
        <nav className='relative flex justify-between items-center h-11 px-0 py-3 my-0 mx-auto max-w-screen-xl'>
          <div className='flex justify-between items-center flex-2'>
            <ul className='flex m-0 p-0 list-none items-center flex-1auto'>
              <li>
                <Link className='no-underline text-white ml-0 m-3 tracking-wide text-xs uppercase'>
                  Shop
                </Link>
              </li>
              <li>
                <Link className='no-underline text-linkColor ml-0 m-3 tracking-wide text-xs uppercase'>
                  My Account
                </Link>
              </li>
              <li>
                <Link className='no-underline text-linkColor ml-0 m-3 tracking-wide text-xs uppercase'>
                  Support
                </Link>
              </li>
              <li>
                <Link className='no-underline text-linkColor ml-0 m-3 tracking-wide text-xs uppercase'>
                  My Xfinity
                </Link>
              </li>
              <li>
                <Link className='no-underline text-linkColor ml-0 m-3 tracking-wide text-xs uppercase'>
                  Comcast Business
                </Link>
              </li>
              <li>
                <Link className='no-underline text-linkColor ml-0 m-3 tracking-wide text-xs uppercase'>
                  Find a Store
                </Link>
              </li>
            </ul>
            <ul className='flex m-0 p-0 list-none items-center text-right'>
              <li>
                <Link className='p-0 text-center w-6 mt-0 mx-3'>
                  <AiOutlineMail className='text-linkColor inline-block w-6 h-6' />
                </Link>
              </li>
              <li>
                <Link className='p-0 text-center w-6 mt-0 mx-3'>
                  <RiComputerLine className='text-linkColor inline-block w-6 h-6' />
                </Link>
              </li>
            </ul>
            <div className='relative text-right pr-12 mr-1 min-w-110'>
              <Link className='no-underline text-linkColor ml-0 m-3 tracking-wide text-xs uppercase'>
                Sign In
              </Link>
            </div>
          </div>
        </nav>
        <div className='max-w-full z-50 relative border-t border-gray-50'>
          <div className='flex justify-between h-16 my-0 mx-auto max-w-7xl py-0 px-3'>
            <nav className='flex items-center flex-75'>
              <Link to='https://www.xfinity.com' className='text-linkColor'>
                <img
                  className='w-16'
                  src='https://cdn.comcast.com/-/media/E020F7373720426891AC068F01DA5A2A'
                  alt='Official logo of Comcast, Official logo of Xfinity'
                />
              </Link>
              <ul className='flex p-0 m-0 list-none items-center'>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='cursor-pointer m-0 mr-1 ml-0 py-1 px-3 text-linkColor text-18'>
                    Internet
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='cursor-pointer m-0 mr-1 ml-0 py-1 px-3 text-linkColor text-18'>
                    TV &amp; Streaming
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='cursor-pointer m-0 mr-1 ml-0 py-1 px-3 text-linkColor text-18'>
                    Mobile
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='cursor-pointer m-0 mr-1 ml-0 py-1 px-3 text-linkColor text-18'>
                    Home Security
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='cursor-pointer m-0 mr-1 ml-0 py-1 px-3 text-linkColor text-18'>
                    Home Phone
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='cursor-pointer m-0 mr-1 ml-0 py-1 px-3 text-linkColor text-18'>
                    All Deals
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className='flex justify-between flex-initial'>
              <ul className='flex p-0 m-0 list-none items-center'>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='p-0 text-center w-6 mt-0 mx-3'>
                    <AiOutlineShoppingCart className='text-linkColor inline-block w-6 h-6' />
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <Link className='p-0 text-center w-6 mt-0 mx-3'>
                    <FiSearch className='text-linkColor inline-block w-6 h-6' />
                  </Link>
                </li>
                <li className='flex items-center h-full flex-initial'>
                  <div className='text-linkColor text-sm tracking-wider my-0 mr-0 ml-1'>
                    <Link className='text-white rounded-sm p-1.5'>En</Link>
                    <span>|</span>
                    <Link className='text-white rounded-sm p-1.5'>Es</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
