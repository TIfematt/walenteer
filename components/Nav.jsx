import React from 'react'
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi'

const Nav = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='hover:bg-white cursor-pointer flex flex-row w-60 h-[3.25rem] gap-4 py-[0.88rem] pl-4 items-center ml-[10px] rounded-[10px] mb-[1.75rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.4">
              <path d="M22.5 10H18.5L12.73 2.3C12.6591 2.20797 12.5683 2.13318 12.4644 2.08123C12.3605 2.02927 12.2462 2.0015 12.13 2H11.87C11.7538 2.0015 11.6395 2.02927 11.5356 2.08123C11.4317 2.13318 11.3409 2.20797 11.27 2.3L5.5 10H1.5C1.36739 10 1.24021 10.0527 1.14645 10.1464C1.05268 10.2402 1 10.3674 1 10.5V11.5C1 11.6326 1.05268 11.7598 1.14645 11.8536C1.24021 11.9473 1.36739 12 1.5 12H2L3.71 19.65C3.85643 20.3101 4.22154 20.9013 4.74611 21.3279C5.27067 21.7544 5.92395 21.9913 6.6 22H17.4C18.0812 21.998 18.7415 21.7642 19.2722 21.3371C19.8029 20.91 20.1724 20.315 20.32 19.65L22 12H22.47C22.6026 12 22.7298 11.9473 22.8236 11.8536C22.9173 11.7598 22.97 11.6326 22.97 11.5V10.5C22.9702 10.3724 22.9217 10.2496 22.8343 10.1566C22.7469 10.0637 22.6273 10.0077 22.5 10ZM12 4.67L16 10H8L12 4.67ZM18.37 19.22C18.3192 19.4456 18.1918 19.6466 18.0095 19.7888C17.8271 19.931 17.6012 20.0056 17.37 20H6.6C6.36884 20.0056 6.14286 19.931 5.96054 19.7888C5.77821 19.6466 5.6508 19.4456 5.6 19.22L4 12H20L18.37 19.22Z" fill="black"/>
            </g>
          </svg>
          <h3 className='text-primary hover:text-secondary hover:text-[1rem] hover:font-[600] text-[0.9375rem] font-[500]'
            >
              Groceries
          </h3>
        </div>
        <div className='hover:bg-white cursor-pointer flex flex-row w-60 h-[3.25rem] gap-4 py-[0.88rem] pl-4 items-center ml-[10px] rounded-[10px] mb-[1.75rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H17C17.5304 18 18.0391 17.7893 18.4142 17.4142C18.7893 17.0391 19 16.5304 19 16V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3ZM17 5V8H3V5H17ZM3 16V11H17V16H3ZM21 7V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H19C20.0609 22 21.0783 21.5786 21.8284 20.8284C22.5786 20.0783 23 19.0609 23 18V9C23 8.46957 22.7893 7.96086 22.4142 7.58579C22.0391 7.21071 21.5304 7 21 7Z" fill="black"/>
          </svg>
          <h3 className='text-primary hover:text-secondary hover:text-[1rem] hover:font-[600] text-[0.9375rem] font-[500]'
            >
              Cards Manager
          </h3>
        </div>
        <div className='hover:bg-white cursor-pointer flex flex-row w-60 h-[3.25rem] gap-4 py-[0.88rem] pl-4 items-center ml-[10px] rounded-[10px] mb-[1.75rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 12C12.9889 12 13.9556 11.7068 14.7779 11.1573C15.6001 10.6079 16.241 9.82705 16.6194 8.91342C16.9979 7.99979 17.0969 6.99446 16.904 6.02455C16.711 5.05465 16.2348 4.16373 15.5356 3.46447C14.8363 2.76521 13.9454 2.289 12.9755 2.09608C12.0056 1.90315 11.0002 2.00217 10.0866 2.3806C9.17298 2.75904 8.39208 3.39991 7.84268 4.22215C7.29327 5.0444 7.00003 6.0111 7.00003 7C7.00003 8.32609 7.52681 9.59785 8.46449 10.5355C9.40217 11.4732 10.6739 12 12 12ZM12 4C12.5934 4 13.1734 4.17595 13.6667 4.50559C14.1601 4.83524 14.5446 5.30377 14.7717 5.85195C14.9987 6.40013 15.0581 7.00333 14.9424 7.58527C14.8266 8.16722 14.5409 8.70177 14.1213 9.12132C13.7018 9.54088 13.1672 9.8266 12.5853 9.94236C12.0034 10.0581 11.4002 9.9987 10.852 9.77164C10.3038 9.54458 9.83526 9.16006 9.50562 8.66671C9.17597 8.17337 9.00003 7.59335 9.00003 7C9.00003 6.20435 9.3161 5.44129 9.87871 4.87868C10.4413 4.31607 11.2044 4 12 4ZM21.89 20.55L20 16.76C19.5844 15.9305 18.9461 15.2331 18.1567 14.7456C17.3673 14.2582 16.4578 14 15.53 14H8.47003C7.54224 14 6.63276 14.2582 5.84334 14.7456C5.05391 15.2331 4.41567 15.9305 4.00003 16.76L2.11003 20.55C2.03332 20.7022 1.99679 20.8715 2.00393 21.0419C2.01106 21.2122 2.06162 21.3778 2.15079 21.5231C2.23996 21.6684 2.36479 21.7885 2.51343 21.8719C2.66206 21.9554 2.82956 21.9995 3.00003 22H21C21.1705 21.9995 21.338 21.9554 21.4866 21.8719C21.6353 21.7885 21.7601 21.6684 21.8493 21.5231C21.9384 21.3778 21.989 21.2122 21.9961 21.0419C22.0033 20.8715 21.9667 20.7022 21.89 20.55ZM4.62003 20L5.79003 17.66C6.03871 17.1619 6.4211 16.7428 6.89441 16.4496C7.36772 16.1564 7.91328 16.0008 8.47003 16H15.53C16.0868 16.0008 16.6323 16.1564 17.1056 16.4496C17.579 16.7428 17.9613 17.1619 18.21 17.66L19.38 20H4.62003Z" fill="black"/>
          </svg>
          <h3 className='text-primary hover:text-secondary hover:text-[1rem] hover:font-[600] text-[0.9375rem] font-[500]'
            >
              Account
          </h3>
        </div>
        <div className='hover:bg-white cursor-pointer flex flex-row w-60 h-[3.25rem] gap-4 py-[0.88rem] pl-4 items-center ml-[10px] rounded-[10px] mb-[1.75rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.4">
              <path d="M14.64 21.86L11.64 18.86C11.5674 18.7901 11.5176 18.6998 11.4972 18.6011C11.4767 18.5024 11.4867 18.3998 11.5256 18.3068C11.5645 18.2138 11.6306 18.1347 11.7153 18.08C11.8 18.0252 11.8992 17.9973 12 18H14V10.5C14 10.3674 14.0527 10.2402 14.1464 10.1464C14.2402 10.0527 14.3674 10 14.5 10H15.5C15.6326 10 15.7598 10.0527 15.8535 10.1464C15.9473 10.2402 16 10.3674 16 10.5V18H18C18.0987 17.9994 18.1954 18.0281 18.2778 18.0824C18.3603 18.1366 18.4248 18.2141 18.4633 18.305C18.5018 18.3959 18.5126 18.4962 18.4942 18.5931C18.4758 18.6901 18.4291 18.7795 18.36 18.85L15.36 21.85C15.2657 21.9466 15.137 22.0019 15.0021 22.0038C14.8671 22.0056 14.7369 21.9539 14.64 21.86ZM10 13.5V6H12C12.0987 6.00058 12.1954 5.97193 12.2778 5.91765C12.3603 5.86338 12.4248 5.78591 12.4633 5.69501C12.5018 5.60411 12.5126 5.50385 12.4942 5.40686C12.4758 5.30987 12.4291 5.2205 12.36 5.15L9.36 2.15C9.26485 2.05775 9.13752 2.00616 9.005 2.00616C8.87247 2.00616 8.74515 2.05775 8.65 2.15L5.65 5.15C5.58148 5.21989 5.53497 5.30835 5.51625 5.40441C5.49753 5.50048 5.50741 5.59993 5.54468 5.69043C5.58195 5.78093 5.64495 5.8585 5.72589 5.91353C5.80683 5.96856 5.90213 5.99863 6 6H8V13.5C8 13.6326 8.05267 13.7598 8.14644 13.8536C8.24021 13.9473 8.36739 14 8.5 14H9.5C9.6326 14 9.75978 13.9473 9.85355 13.8536C9.94732 13.7598 10 13.6326 10 13.5Z" fill="black"/>
            </g>
          </svg>
          <h3 className='text-primary hover:text-secondary hover:text-[1rem] hover:font-[600] text-[0.9375rem] font-[500]'
            >
              Transaction
          </h3>
        </div>
        <div className='hover:bg-white cursor-pointer flex flex-row w-60 h-[3.25rem] gap-4 py-[0.88rem] pl-4 items-center ml-[10px] rounded-[10px] mb-[1.75rem]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='hover:text-secondary'>
            <g opacity="0.4">
              <path d="M20.21 14.07C19.9708 13.8714 19.7812 13.6198 19.6562 13.3351C19.5312 13.0504 19.4743 12.7405 19.49 12.43C19.49 12.29 19.49 12.14 19.49 12C19.49 11.86 19.49 11.71 19.49 11.57C19.4743 11.2595 19.5312 10.9496 19.6562 10.6649C19.7812 10.3802 19.9708 10.1286 20.21 9.93001L21.01 9.27001C21.1922 9.1196 21.3152 8.90955 21.3573 8.67708C21.3994 8.44462 21.3579 8.20476 21.24 8.00001L20.08 6.00001C19.9928 5.84887 19.8675 5.7232 19.7166 5.63549C19.5657 5.54777 19.3945 5.50106 19.22 5.50001C19.0997 5.498 18.9803 5.52187 18.87 5.57001L17.87 5.93001C17.647 6.0173 17.4095 6.06141 17.17 6.06001C16.7868 6.05902 16.4119 5.94795 16.09 5.74001C15.8549 5.57761 15.6075 5.43383 15.35 5.31001C15.0725 5.1677 14.8321 4.96246 14.6481 4.7107C14.464 4.45893 14.3414 4.16761 14.29 3.86001L14.12 2.86001C14.0817 2.62339 13.9596 2.4084 13.7761 2.25422C13.5925 2.10004 13.3597 2.01693 13.12 2.02001H10.82C10.5803 2.01693 10.3475 2.10004 10.164 2.25422C9.98041 2.4084 9.85836 2.62339 9.82002 2.86001L9.65002 3.86001C9.6029 4.16384 9.48636 4.45272 9.30946 4.7042C9.13256 4.95568 8.90006 5.16298 8.63002 5.31001C8.37252 5.43383 8.1251 5.57761 7.89002 5.74001C7.56811 5.94795 7.19324 6.05902 6.81002 6.06001C6.57056 6.06141 6.33301 6.0173 6.11002 5.93001L5.11002 5.57001C4.99972 5.52187 4.88036 5.498 4.76002 5.50001C4.58551 5.50106 4.41431 5.54777 4.26344 5.63549C4.11257 5.7232 3.98728 5.84887 3.90002 6.00001L2.76002 8.00001C2.64328 8.20587 2.60333 8.44646 2.64728 8.67899C2.69122 8.91153 2.81621 9.12095 3.00002 9.27001L3.80002 9.93001C4.03925 10.1286 4.22888 10.3802 4.35387 10.6649C4.47885 10.9496 4.53574 11.2595 4.52002 11.57C4.52002 11.71 4.52002 11.86 4.52002 12C4.52002 12.14 4.52002 12.29 4.52002 12.43C4.53574 12.7405 4.47885 13.0504 4.35387 13.3351C4.22888 13.6198 4.03925 13.8714 3.80002 14.07L3.00002 14.73C2.81621 14.8791 2.69122 15.0885 2.64728 15.321C2.60333 15.5536 2.64328 15.7942 2.76002 16L3.92002 18C4.00728 18.1511 4.13257 18.2768 4.28344 18.3645C4.43431 18.4523 4.60551 18.499 4.78002 18.5C4.90036 18.502 5.01972 18.4781 5.13002 18.43L6.13002 18.07C6.35301 17.9827 6.59056 17.9386 6.83002 17.94C7.21324 17.941 7.58811 18.0521 7.91002 18.26C8.1451 18.4224 8.39252 18.5662 8.65002 18.69C8.92752 18.8323 9.1679 19.0376 9.35195 19.2893C9.536 19.5411 9.65862 19.8324 9.71002 20.14L9.88002 21.14C9.91836 21.3766 10.0404 21.5916 10.224 21.7458C10.4075 21.9 10.6403 21.9831 10.88 21.98H13.18C13.4197 21.9831 13.6525 21.9 13.8361 21.7458C14.0196 21.5916 14.1417 21.3766 14.18 21.14L14.35 20.14C14.4014 19.8324 14.524 19.5411 14.7081 19.2893C14.8921 19.0376 15.1325 18.8323 15.41 18.69C15.6675 18.5662 15.9149 18.4224 16.15 18.26C16.4719 18.0521 16.8468 17.941 17.23 17.94C17.4695 17.9386 17.707 17.9827 17.93 18.07L18.93 18.43C19.0403 18.4781 19.1597 18.502 19.28 18.5C19.4545 18.499 19.6257 18.4523 19.7766 18.3645C19.9275 18.2768 20.0528 18.1511 20.14 18L21.3 16C21.4104 15.7875 21.4408 15.5424 21.3857 15.3093C21.3307 15.0763 21.1938 14.8707 21 14.73L20.21 14.07ZM12 17.5C10.9122 17.5 9.84886 17.1774 8.94439 16.5731C8.03992 15.9687 7.33497 15.1098 6.91868 14.1048C6.5024 13.0998 6.39348 11.9939 6.6057 10.927C6.81792 9.86012 7.34175 8.88011 8.11093 8.11092C8.88012 7.34173 9.86013 6.81791 10.927 6.60569C11.9939 6.39347 13.0998 6.50239 14.1048 6.91867C15.1098 7.33496 15.9688 8.0399 16.5731 8.94437C17.1775 9.84885 17.5 10.9122 17.5 12C17.5 13.4587 16.9206 14.8576 15.8891 15.8891C14.8577 16.9205 13.4587 17.5 12 17.5ZM12 10C11.6045 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1523 11.2346C10.0009 11.6001 9.96128 12.0022 10.0385 12.3902C10.1156 12.7782 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0388 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.663 13.1112C13.8827 12.7823 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0392 10.2107 12.5305 10 12 10Z" fill="black"/>
            </g>
          </svg>
          <h3 className='text-primary hover:text-secondary hover:text-[1rem] hover:font-[600] text-[0.9375rem] font-[500]'
            >
              Setting
          </h3>
        </div>
      </div>
      <div className='flex bg-primary w-[13rem] h-[12rem] rounded-[10px] nav-card-filter ml-12'>
        <div className='flex items-end pl-[1.25rem] pb-4'>
          <h3 className='text-white font-normal text-xs leading-5 max-w-[3.7rem]'>
            Try the AI feature
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
            <path d="M16.1913 6.2012L10.9549 0.964854C10.6139 0.623837 10.0617 0.623837 9.72089 0.964854C9.38009 1.30587 9.37987 1.85809 9.72089 2.19889L13.4675 5.94549L1.43614 5.94549C0.954178 5.94549 0.563416 6.33582 0.563416 6.81822C0.563416 7.30062 0.954178 7.69094 1.43614 7.69094L13.4675 7.69094L9.72089 11.4376C9.37987 11.7786 9.37987 12.3308 9.72089 12.6716C9.89129 12.842 10.1147 12.9273 10.3379 12.9273C10.5611 12.9273 10.7845 12.842 10.9549 12.6716L16.1913 7.43524C16.5323 7.09444 16.5323 6.542 16.1913 6.2012Z" fill="white"/>
          </svg>
        </div>
        <div className='relative w-[170px]'>
          <Image 
            src='/assets/robot.png'
            fill={true}
            alt='robot image'
          />
        </div>
      </div>
      <button 
        type='button' 
        className='hover:bg-white w-60 h-[3.25rem] -ml-[30px] mt-[20px] rounded-[10px] text-primary text-[0.9375rem] font-[500] hover:text-secondary hover:text-[1rem] hover:font-[600]'
        >
          <FiLogOut className='w-[1.2rem] h-[1.125rem] relative left-[45px] top-[15px]'/>
          Log Out
      </button>
    </div>
  )
}

export default Nav