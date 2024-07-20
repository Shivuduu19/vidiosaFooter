

import bgtop from './assets/Vidiosa_ Explainer Video Production Company for SaaS/6642119114c3e3ec7222ed15_Ellipse 173 (1).webp'
import bgtop500 from './assets/Vidiosa_ Explainer Video Production Company for SaaS/6642119114c3e3ec7222ed15_Ellipse 173 (1)-p-500.webp'
import bgtop800 from './assets/Vidiosa_ Explainer Video Production Company for SaaS/6642119114c3e3ec7222ed15_Ellipse 173 (1)-p-800.webp'
import bgtop1080 from './assets/Vidiosa_ Explainer Video Production Company for SaaS/6642119114c3e3ec7222ed15_Ellipse 173 (1)-p-1080.webp'
import bgtop1600 from './assets/Vidiosa_ Explainer Video Production Company for SaaS/6642119114c3e3ec7222ed15_Ellipse 173 (1)-p-1600.webp'
import facebook from './assets/facebook logo in white colour.svg'
import instagram from './assets/instagram logo in white colour.svg'
import twitter from './assets/twitter logo in white colour.svg'
import linkedin from './assets/linkedIn logo in white colour.svg'
import tiktok from './assets/Tiktok logo in white colour.svg'
import youtube from './assets/svgexport-18.svg'
import vidiosa from './assets/665d8f19e5ffc6a7503d910d_Vidiosa_gif.gif'
import Social from './components/Social';

function App() {


  return (
    <div className='z-0 h-screen tablet:h-full pt-[60px] bg-[#fff9f4] sticky bottom-0 top-auto left-0 right-0 w-full'>
      <div className='z-[1] pointer-events-none text-center absolute flex justify-center items-center w-full top-0 bottom-auto left-0 right-0'>
        <img src={bgtop} alt="" className='align-middle max-w-full inline-block border-0' loading='lazy' srcSet={`${bgtop500} 500w,${bgtop800} 800w,${bgtop1080} 1080w,${bgtop1600} 1600w`} />
      </div>
      <div className='bg-[#fff9f4] w-full pt-[71px] relative top-0'>
        <div className=''>
          <div className='w-full bg-[#0f080333] h-[1px]'></div>

          <div className='w-full bmt:px-[10px] tablet:px-[20px] max-w-[1920px] bL4k:px-[66px] bm4k:px-[88px]  px-[46px] mx-auto'>
            <div className='flex tablet:flex-col justify-between'>

              <div className='flex flex-col bmt:px-0 btl:pl-[14px] btl:pr-[20px]   justify-between text-[#080e03] py-[51px]'>
                <div className='flex flex-col items-start justify-center '>
                  <h2 className='mt-0 mb-[16px] text-[41px] btl:leading-[1.1] font-medium leading-[1] '>
                    Ready to Transform Your Brand?
                  </h2>
                  <div className='mb-[32px] opacity-[.8] '>
                    Don't let confusion and lack of understanding
                    <br />
                    hold your business back any longer.
                  </div>
                  <a href="" className='bg-[#f3681c] hover:bg-[#ff9243] text-[#fff] rounded-[50px] flex flex-col justify-center py-[18px] px-[24px] text-[16px] font-normal leading-[1] relative transition-all duration-[.4s]  overflow-hidden border-0'>Schedule a call</a>
                </div>

              </div>

              <div className='w-[1px]  bg-[#0f080333] mr-[48px] '></div>

              <div className='flex flex-col bmt:px-0 btl:pl-[14px] btl:pr-[20px]   text-[#080e03] py-[51px] justify-between'>
                <div className='text-[18px] font-medium bmt:mb-[20px] btl:[10px] '>Social media</div>
                <div className='gap-x-[16px] grid tablet:flex gap-[15px] py-[10px] gap-y-[16px] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] auto-cols-[1fr]'>
                  <Social app={facebook} />
                  <Social app={instagram} />
                  <Social app={twitter} />
                  <Social app={linkedin} />
                  <Social app={tiktok} />
                  <Social app={youtube} />
                </div>
              </div>

            </div>
          </div>

          <div className='w-full bg-[#0f080333] h-[1px]'></div>

        </div>
        <div className=''>
          <div className='w-full mx-auto bmt:px-[10px] tablet:px-[20px] max-w-[1920px] bL4k:px-[66px] bm4k:px-[88px]    px-[46px] '>
            <div className='grid gap-x-[16px] tablet:grid-cols-[1fr] grid-cols-[1fr_.25fr_1fr_.25fr_1fr] grid-rows-[auto] auto-cols-[1fr]'>
              <div className='flex flex-col py-[59px] '>
                <h3 className='text-[#0e0803] mt-0 mb-[24px] font-medium text-[24px] leading-[30px]'>Service</h3>
                <div className='flex flex-col gap-[12px] '>
                  <a href="" className='text-[#0e0803] hover:text-[#fe681c] transition-all duration-[.4s]'>Animated Explainer Videos</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'>SaaS Product Demo</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'>Video Ad Creative</a>
                </div>
              </div>

              <div className='w-[1px] tablet:h-[1px] tablet:w-full bg-[#0f080333] mr-[48px]'></div>

              <div className='flex flex-col py-[59px] '>
                <h3 className='text-[#0e0803] mt-0 mb-[24px] font-medium text-[24px] leading-[30px]'>More</h3>
                <div className='flex flex-col gap-[12px] '>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'>About us</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'>Contact us</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'>Affiliate program</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'>Clutch reviews</a>
                </div>
              </div>

              <div className='w-[1px] tablet:h-[1px] tablet:w-full bg-[#0f080333] mr-[48px]'></div>

              <div className='flex flex-col py-[59px] '>
                <h3 className='text-[#0e0803] mt-0 mb-[24px] font-medium text-[24px] leading-[30px]'>Contact us</h3>
                <div className='flex flex-col gap-[12px] '>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'><span className='text-[#ffbd77]'>Phone:</span> +1307-225-7167</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'><span className='text-[#ffbd77]'>Email:</span> hello@vidiosa.com</a>
                  <a href="" className='text-[#0e0803]  hover:text-[#fe681c] transition-all duration-[.4s]'><span className='text-[#ffbd77]'>Address: :</span> 30 N gould st ste R sheridan WY 82801</a>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className='w-full bg-[#0f080333] h-[1px]'></div>

        <a href="" className='w-full py-[41px] px-[16px] bm4k:flex bm4k:justify-center bm4k:items-center max-w-full inline-block '>
          <img src={vidiosa} alt="" className='tablet:w-[60%]  align-middle max-w-full inline-block border-0 ' loading='lazy' />
        </a>

        <div className='w-full bg-[#0f080333] h-[1px]'></div>

        <div className=''>
          <div className='mx-auto bmt:px-[10px] tablet:px-[20px] max-w-[1920px] bL4k:px-[66px] bm4k:px-[88px]    px-[46px]  w-full '>
            <div className='flex  btl:flex-col btl:text-center justify-between '>
              <div className='py-[40px] '>
                <div className='text-[18px]'>
                  Copyright © 2024 –
                  <a href="" className='text-[#ff9243] '>Vidiosa LLC</a>
                  | All Right Reserved.
                </div>
              </div>
              <div className='w-[1px] tablet:w-full tablet:h-[1px] bg-[#0f080333] mr-[48px] '></div>
              <div className='py-[40px] '>
                <div className='text-[18px] '>
                  <a href="" className='text-[#0e0803] hover:text-[#ff9243] transition-all duration-[.4s]'>Terms & Conditions</a>
                  {' '}
                  |
                  {' '}
                  <a href="" className='text-[#0e0803] hover:text-[#ff9243] transition-all duration-[.4s]'>Privacy policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#0f080333] h-[1px]'></div>
      </div>
    </div>
  )
}

export default App
