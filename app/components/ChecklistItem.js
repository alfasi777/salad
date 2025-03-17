import Image from "next/image";
import React, { useState, useEffect } from "react";

const ChecklistItem = ({ index,title, weight, bgImage , activeItemsCount ,  setActiveItemsCount , maxItems}) => {
  const [isActive, setIsActive] = useState(true);
  const [quantity,setQuantity] = useState(0)
  
  const changeHandler = () => {
    
    setQuantity(() => {
      if ( activeItemsCount < maxItems) {
        return quantity + 1;
      }
      return quantity;
    });
    setActiveItemsCount(() => {
      if (activeItemsCount < maxItems) {
        return activeItemsCount + 1;
      }
      return activeItemsCount;
    });
  };

  const changeHandler2 = () => {
    
    setQuantity((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
      return prev;
    });
    setActiveItemsCount((prevCount) => {
      if (prevCount !== 0) {
        
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  {/*
  useEffect(() => {
    if (!isActive) {
      setActiveItemsCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    
    if (isActive) { 
      setActiveItemsCount((prevCount) => prevCount + 1);
    }
  }, [quantity, setActiveItemsCount]);   /*/}




  return (
      <>
      {/*
        <div key={index} className="flex items-center mb-4" >
            <input id={index} type="checkbox" value={title + ' ' + weight + ` גרם `} 
                name={index} checked={isActive}  disabled = {(activeItemsCount === maxItems || activeItemsCount > maxItems) && !isActive ? true : false}  onChange={changeHandler} 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="index" className="ms-2 text-sm text-gray-900 dark:text-gray-300">{title} {weight} גרם</label>
        </div>
            */}
        <div key={index} 
              className="flex items-center gap-8 border border-0.5 border-gray-300/55 p-4 rounded-md  bg-gray-50">
          <Image className="max-h-[100] min-h-[100] rounded-sm"
                  aria-hidden
                  src={bgImage}
                  alt="תמונת מוצר"
                  width={100}
                  height={100}
              />
              <div className="flex flex-col gap-2">
                  <label htmlFor="index" className="text-lg text-gray-900">{title}</label>
                  <div className="flex gap-0 border-2 border-gray-400/50 p-2 rounded-md max-w-max bg-white">
                    <button type="button" onClick={changeHandler} disabled={ (activeItemsCount === maxItems) ? true : false }>
                      <Image src="/vercel.svg"  alt='send' width={32} height={32} className="bg-green-400 p-2 rounded-sm"/>
                    </button>
                    <input
                    type='text' name={title} placeholder="" required value={quantity} readOnly={true}
                    className=' p-0 outline-none  w-12 text-center
                                ' />
                    <button type="button" onClick={changeHandler2} disabled={ (quantity === 0) && (activeItemsCount === maxItems) ? true : false }>
                      <Image src="/vercel.svg"  alt='send' width={32} height={32 } className="bg-red-400 p-2 rotate-180 rounded-sm"/>
                    </button>
                  </div>
              </div>
        </div >
      </>
  )
};

export default ChecklistItem;