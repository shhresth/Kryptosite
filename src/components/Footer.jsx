import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <footer>
          <p>{currentYear} <AiOutlineCopyright />  Kryptosite</p>
    </footer>
  )
}
