import React from 'react'

function ContactForm() {
  return (
    <div className='w-full relative'>
      <div className='max-w-screen-xl mx-auto pt-[8vw]'>
        <div className='w-1/2 min-h-[20vw] flex flex-col justify-between'>
          <h1 className='text-[5vw] uppercase leading-none'>Don't Be Shy with us</h1>
          <div>
            <p>
              Don’t like forms? Well, too bad! This one is connected to our CRM and makes everything 
              easier. Ok ok... here we go:
            </p>
            <button 
              className='text-[3vw] sm:text-[.8vw]
              py-[3vw] px-[5vw] sm:px-[1.3vw] mt-[4vw]
              sm:py-[.5vw] rounded-full sm:mt-[1vw] 
              border-[1px] border-secondary'
            >
              hello@refokus.com  
            </button>
          </div>  
        </div>
        
      </div>
    </div>
  )
}

export default ContactForm
