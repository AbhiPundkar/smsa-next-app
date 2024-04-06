import React from 'react'
import SectionHeaders from './SectionHeaders'

const ContactSection = () => {
  return (
    <>
        <section className='text-center pt-6'>
            <SectionHeaders
                subHeader="Dont Hesitate"
                mainHeader="Contact Us"
            />
            <div className='text-gray-600 text-4xl pt-8 underline'>
                <h1>+91 1111111111</h1>
            </div>
        </section>
    </>
  )
}

export default ContactSection