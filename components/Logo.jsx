import React from 'react'

const Logo = () => {
  return (
    <div className='w-[1.5625rem] h-[1.5625rem] flex-center gap-[0.63rem]'>
      <div className='bg-logo w-[1.5625rem] h-[1.5625rem] flex-center rounded-[7px] border-none .filter-custom'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none" className='relative top-[2px]'>
          <g filter="url(#filter0_d_101_2147)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.8347 22.0696C40.5803 22.324 40.168 22.324 39.9135 22.0696C38.1324 20.2884 38.1324 17.4007 39.9127 15.6204C40.1671 15.366 40.5811 15.366 40.8356 15.6204L42.3183 17.1031L43.5991 18.384C43.8536 18.6384 43.8527 19.0516 43.5983 19.306L40.8347 22.0696ZM28.1789 34.7249C27.9943 34.9095 27.6942 34.9095 27.5087 34.724C25.6586 32.8739 25.6586 29.874 27.5087 28.0239L30.3913 25.1413L34.879 20.6536C35.0636 20.469 35.3638 20.469 35.5492 20.6544C37.3994 22.5046 37.3994 25.5044 35.5492 27.3546L28.1789 34.7249ZM28.4993 24.0872C25.3666 27.2199 23.0205 29.566 23.0205 29.566C22.8359 29.7506 22.5358 29.7506 22.3503 29.5652C20.5002 27.715 20.5002 24.7151 22.3503 22.865L34.8795 10.3359C35.0649 10.1504 35.3651 10.1504 35.5505 10.3359C37.4006 12.186 37.4006 15.1859 35.5505 17.036C35.5505 17.036 31.6312 20.9554 28.4993 24.0872Z" fill="#F9896B"/>
          </g>
          <defs>
            <filter id="filter0_d_101_2147" x="0.962708" y="0.196777" width="62.8268" height="64.6664" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_2147"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_2147" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <h3 className='text-black text-[1rem] font-extrabold font-google'>Walenteer</h3>
    </div>
  )
}

export default Logo