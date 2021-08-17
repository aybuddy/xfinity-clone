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
    <div>
      <div
        className='flex flex-1 flex-col md:flex-row items-center justify-start md:full-image-large-half bg-gray-50'
        style={{
          position: 'relative',
          backgroundPosition: 'center center',
          overflow: 'hidden',
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className='flex flex-col items-center full-image-content-half max-w justify-center px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-16 md:full-image-content-half'
          style={{ zIndex: 1 }}
        >
          <div className='bg-grey-50 overflow-hidden'>
            <div className='h-full'>
              <div
                className='bg-cover bg-no-repeat bg-center content-center h-full mx-auto relative flex flex-col '
                style={{ backgroundImage: 'unset' }}
              >
                <div className='w-full px-4 py-8 md:py-12 lg:py-16 lg:px-11 xl:px-12 2xl:px-20 text-left'>
                  <h4 className='text-base font-bold leading-6'>
                    {extraText1}
                  </h4>
                  <h2 className='mt-4 text-4xl'>
                    <div>
                      {titleA} <span className='text-green-500'>{titleB}</span>
                    </div>
                  </h2>
                  <div className='mt-4 text-lg'>{desc}</div>
                  <div className='mt-8 flex flex-col 2xl:flex-row'>
                    <div className='inline-flex 2xl:mr-8'>
                      <Link
                        to='/'
                        className='xds-btn-sm bg-gray-900 text-white rounded no-underline text-base font-bold'
                      >
                        {buttonText}
                      </Link>
                    </div>
                    {extraText2 ? (
                      <div className='inline-flex mt-4 2xl:mt-0 2xl:ml-2'>
                        <Link
                          to='/'
                          className='border-b-2 border-gray-300 text-sm font-bold'
                        >
                          {extraText2}
                        </Link>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
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
