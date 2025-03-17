"use client"
import React, { useState } from 'react'
import ChecklistItem from './ChecklistItem';
import { saladList } from '@/assets/assets';
import Image from 'next/image';

const Contact = () => {

  const [result, setResult] = useState("");
  const [activeItemsCount,setActiveItemsCount] = useState (0);
  const [maxItems,setMaxItems] = useState(8);
  const [isBit,setIsBit] = useState(false);

  const items = saladList.map((item, index) => {
    return (
      <ChecklistItem
        key={index}
        index={index}
        title = {item.title}
        weight = {item.weight}
        bgImage = {item.bgImage}
        activeItemsCount = {activeItemsCount}
        setActiveItemsCount = {setActiveItemsCount}
        maxItems = {maxItems}
      />
    );
  });

  const changeHandler = () => {
    setMaxItems((prev) => 22-prev);
  };

  const handleChange = () => {
    setIsBit(false);
  };

  const handleChange2 = () => {
    setIsBit(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("שולח...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7897d0e-ed09-4dc4-aa69-50b167e2ec6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("ההודעה נשלחה בהצלחה! תודה שבחרת סלטי שולחן השבת, המשלוח יגיע לביתך ביום חמישי לפני הבישולים לשבת.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contactForm' className=''>
     <form onSubmit={onSubmit} className='max-w-7xl mx-auto p-5'>
            <div className='grid grid-cols-auto gap-6'>
              <div className='grid grid-cols-auto sm:grid-cols-2 gap-6'>
                  <input
                      type='text' name='שם' placeholder='שם ומשפחה' required
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                                  dark:bg-darkHower/30 dark:border-white/90 
                                  ' />
                  <input 
                      type='text' name='כתובת' placeholder='כתובת מלאה - עיר רחוב ומספר בית' required
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                                  dark:bg-darkHower/30 dark:border-white/90 ' />
              </div> 
              <div className='grid grid-cols-auto sm:grid-cols-2 gap-6'>
                <input
                      type='text' name='נייד' placeholder='מספר טלפון' required
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                                  dark:bg-darkHower/30 dark:border-white/90 ' />

                  <input 
                      type='email' name='אימייל' placeholder='אימייל' required 
                      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                                  dark:bg-darkHower/30 dark:border-white/90 '/>
              </div>
            </div>
            <fieldset
                className='mt-6 m-4 flex flex-col gap-2'
             >
                <div className="flex items-center">
                  <input id="items-option-1" type="radio" name="מספר יחידות" value="שמונה יחידות" onChange={changeHandler} disabled={activeItemsCount > 8}  defaultChecked = {true}
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="items-option-1" 
                          className="block ms-2  text-md font-semibold text-gray-800/90">
                    8 יחידות - 99 שקלים
                  </label>
                </div>

                <div className="flex items-center">
                  <input id="items-option-2" type="radio" name="מספר יחידות" value="14 יחידות" onChange={changeHandler}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="items-option-2" 
                          className="block ms-2 text-md font-semibold text-gray-800/90">
                    14 יחידות - 149 שקלים
                  </label>
                </div>
            </fieldset>
            {/*<h1> Active : {activeItemsCount}    Max: {maxItems}</h1>*/}
            <fieldset
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12'
             >

              {items}
             </fieldset>
             
             <h4 
                className='max-w-fit p-2 rounded-b-md mt-6 mb-2 text-xl font-Outfit text-green-900 font-semibold shadow inset-shadow-black'>דרך התשלום המועדפת עליך</h4>
             <fieldset
                className='max-w-fit flex flex-col p-2  gap-2 mb-2'
             >
                <div className="flex items-center">
                  <input id="country-option-1" type="radio" name="צורת תשלום" value="תשלום במזומן" onChange={handleChange} defaultChecked={true}
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="country-option-1" className="block ms-2 font-medium text-gray-800/90">
                    תשלום במזומן
                  </label>
                </div>
                  <div className=''>
                    <div className="flex items-center gap-4 ">
                      <div className="flex items-center">
                          <input id="country-option-2" type="radio" name="צורת תשלום" value="העברה בביט" onChange={handleChange2}
                                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                          <label htmlFor="country-option-2" className="block ms-2 font-medium text-gray-800/90">
                        העברה בביט
                      </label>
                    </div>
                    
                    <input type='text' name='אסמכתה ביט' placeholder='מספר אסמכתה' hidden={!isBit} required={isBit ? true : false}
                        className='flex-1 p-0 max-w-[50%] outline-none border-[0.5px] border-green-400 rounded-md bg-white
                                    dark:bg-darkHower/30 dark:border-white/90 
                                    ' />
                    
                  </div>
                  
                </div>
            </fieldset>

            <textarea 
                name='message' rows='6' placeholder='הודעה...' 
                className='md:w-[45%] w-[85%] p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
                dark:bg-darkHower/30 dark:border-white/90'></textarea>
            

             <button
               type='submit' disabled = { activeItemsCount === maxItems ? false : true}
               className='text-lg py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
             text-white rounded-full mx-auto hover:bg-black duration-500 font-semibold'>שלח הזמנה
                <Image src="/vercel.svg"  alt='send' width={20} height={20}/>
             </button>
            
             <p className='mt-4'>{result}</p>
        </form>
               
    </div>
  )

}

export default Contact
