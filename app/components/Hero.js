import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gray-50/40 rounded-b-xl flex flex-wrap items-center justify-center p-5  max-w-6xl mx-auto font-sans
                    gap-0 lg:justify-around'>
        <Image
          className=""
          src="/logoKosher.png"
          alt="logo Kosher logo"
          width={500}
          height={500}
          priority
        />
        <div className='flex flex-col items-center justify-around p-5 bg-white sm:h-[500px] w-[500px]'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-700 '>ברוכים הבאים לדף ההזמנה</h1>
            <h3 className='text-lg font-light text-gray-600'>אנו מודים לכם שבחרתם בסלטי שולחן השבת. הבית שלכם לאוכל טרי ובריא. אנו פתוחים להזמנות גם השבוע.</h3>
            <ol className="list-inside list-decimal text-md text-right p-2 ">
              <li className="">.מלא פרטים אישיים וכתובת למשלוח</li>
              <li>סמן שמונה או ארבעה עשר אריזות סלטים שונים לבחירתך.</li>   
              <li>בחר בתשלום מזומן לשליח או העברה בביט</li>
              <li>שלח את ההזמנה עד יום רביעי, ותהנה <span className='text-green-500 font-semibold text-lg'>ממשלוח חינם</span> ביום חמישי.</li>
            </ol>
        </div>
    </div>
  )
}

export default Hero