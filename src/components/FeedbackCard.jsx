import React from 'react'
import styles from '../style';
import { quotes } from '../assets';

const FeedbackCard = ({name, title, content, img}) => {
  return (
    <div className={`feedback-card flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 `}>
      <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain"/>
      <p className="font-poppins font-normaltext-[18px] leading-[32.4px] text-white my-10">
          {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>
        <div className="flex flex-col ml-4">
          <h4 className='font-poppins font-semibold text-white text-[20px] leading-[32px]'>
            {name}
          </h4>
          <p className="font-poppins font-normaltext-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
  </div>  
  )
}

export default FeedbackCard;