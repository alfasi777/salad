import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 px-5 flex-wrap items-center mt-8 text-gray-700 font-[family-name:var(--font-geist-sans)]'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-black/75'>סלטי שולחן השבת</h1>
        <p className='text-lg max-w-xl sm:max-w-2xl my-3'>אנו בחברת סלטי שולחן השבת מציעים לכם סלטים ביתיים טריים וטעימים, המושלמים לשולחן השבת שלכם. אנו מתחייבים לאספקה טרייה של מידי שבוע במשלוח חינם.</p>

        <h2 className='text-xl md:text-2xl text-green-800/85 font-bold'>הסלטים שלנו</h2>
        <p className='max-w-xl sm:max-w-2xl'>הסלטים שלנו מיוצרים במרכיבים טבעיים וטריים בלבד, ללא חומרים משמרים. אנו מקפידים על איכות גבוהה וטעם ביתי, כדי שתוכלו ליהנות מחוויה קולינרית מושלמת.</p>

        <h2 className='text-xl md:text-2xl text-green-800/85 font-bold'>משלוחים</h2>
        <p className='max-w-xl sm:max-w-2xl'>אנו מציעים משלוח חינם ביום חמישי. מועד אחרון להזמנות הוא יום רביעי בחצות. אנו עושים את מירב המאמצים כדי לספק את המוצרים באיכות גבוסס ביותר
                    , אם נפלה טעות או נתקלתם במוצר פגום, אנא פנו אלינו בשיחה לנייד או לווצאפ. חברתנו מחוייבת לסטנדרטים הגבוהים ביותר ונשמח לתקן במקרה הצורך</p>

        <h2 className='text-xl md:text-2xl text-green-800/85 font-bold'>הזמנות</h2>
        <p>להזמנות, אנא צרו איתנו קשר בטלפון:<span className='text-blue-500 font-semibold'> 050-1234567 </span></p>

        <h2 className='text-xl md:text-2xl text-green-800/80 font-bold'>הערכים שלנו</h2>
        <ul>
            <li>טריות ואיכות: אנו משתמשים רק במרכיבים טריים ואיכותיים.</li>
            <li>טעם ביתי: הסלטים שלנו מיוצרים בשיטות מסורתיות, לטעם ביתי אמיתי.</li>
            <li>שירות אדיב: אנו כאן כדי לספק לכם שירות אדיב ומקצועי.</li>
        </ul>

        <h2 className='text-ךע md:text-xl text-green-800 font-bold'>צרו קשר</h2>
        <p>נשמח לענות על כל שאלה או בקשה. צרו איתנו קשר בטלפון או במייל:</p>
        <ul className='text-xl text-white bg-gray-300 p-2 rounded-nd mb-3'>
            <li>טלפון: 050-1234567</li>
            <li>מייל: info@salatimshabbat.co.il</li>
        </ul>

    </div>
  )
}

export default page