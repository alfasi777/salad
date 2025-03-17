import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 px-5 py-4 flex-wrap items-center justify-around">
        <div className="row-start-3 flex gap-5 flex-wrap items-center justify-center">
            <a
            className="flex items-center gap-1 hover:underline hover:underline-offset-4"
            href="/about"
            rel="noopener noreferrer"
            >
            אודותינו
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
            />
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="tel:052-868-8999"
            target="_blank"
            rel="noopener noreferrer"
            >
            נייד
            <Image
                aria-hidden
                src="/phone.svg"
                alt="Phone icon"
                width={16}
                height={16}
            />
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://wa.me/972528688999"
            target="_blank"
            rel="noopener noreferrer"
            >
            קבוצת הווצאפ
            <Image
                aria-hidden
                src="/whatsApp.svg"
                alt="WhatsApp icon"
                width={16}
                height={16}
            />
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href= "mailto: asafb.amal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            אימייל
            <Image
                aria-hidden
                src="/email.svg"
                alt="Email icon"
                width={16}
                height={16}
            />
            </a>
        </div>
        <div>
            <h3 className='font-[family-name:var(--font-rubik-bubbles)]'>&copy; סיינט-אלף בניית אתרים <span className='text-red-400 font-bold font-sans text-sm'>2025</span></h3>
        </div>
      </footer>
  )
}

export default Footer