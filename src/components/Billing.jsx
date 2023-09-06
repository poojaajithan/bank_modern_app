import React from 'react'
import { google, apple, bill } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] -left-1/2 rounded-full top-0 white__gradient w-[50%] h-[50%]'></div>
        <div className='absolute z-[0] -left-1/2 rounded-full bottom-0 pink__gradient w-[50%] h-[50%]'></div>
      </div>

      <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2}`}>
                Easily control your <br className='sm:block hidden'/>
                billing & invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
              <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
              <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          </div>
      </div>
    </section>
  )
}

export default Billing;