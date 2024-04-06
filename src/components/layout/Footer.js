import React from 'react'
import { FaHeart } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
        <footer className="pt-6">
            <div className='text-gray-400 text-center  pt-4 border-t flex justify-center items-center'>
            <h2 className=''>Made By KAZUHA with &nbsp;</h2><FaHeart/>
            </div>
        </footer>
    </>
  )
}
