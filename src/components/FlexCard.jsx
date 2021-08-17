import React from 'react';
import { Link } from 'react-router-dom';

const FlexCard = ({
  titleA,
  titleB,
  desc,
  buttonText,
  extraText1,
  extraText2,
  image,
}) => {
  return (
    <div
      className='flex flex-1 flex-col md:flex-row items-center justify-center full-image-large-full md:full-image-large-half'
      style={{
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className='flex flex-col items-center px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-16 full-image-content-full md:full-image-content-half'
        style={{ zIndex: 1 }}
      >
        <div>
          <div className='h-full'>
            <div
              className='bg-cover bg-no-repeat bg-center content-center h-full mx-auto relative flex flex-col'
              style={{ backgroundImage: 'unset' }}
            >
              <div className='w-full px-16 xl:px-48 2xl:px-80 py-32 md:py-48 lg:py-64 text-left'>
                {extraText1 ? (
                  <div className='space-y-2'>{extraText1}</div>
                ) : (
                  <div></div>
                )}
                <div className='mt-16'>
                  <div>
                    {titleA} <span className='text-green-500'>{titleB}</span>
                  </div>
                </div>
                <div className='mt-16'>{desc}</div>
                <div className='mt-32 flex flex-col 2xl:flex-row'>
                  <div className='inline-flex 2xl:mr-8'>
                    <Link to='/' className=''>
                      {buttonText}
                    </Link>
                  </div>
                  {extraText2 ? (
                    <div className='inline-flex'>
                      <Link to='/' className='border-b border-gray-300'>
                        {extraText2}
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexCard;
