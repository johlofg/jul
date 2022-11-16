import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux'

import './ContactUs.css'

const SendEmail = () => { 
const first = useSelector(store => store.survey.fraga1)
const second = useSelector(store => store.survey.fraga2)
const third = useSelector(store => store.survey.fraga3)
const forth = useSelector(store => store.survey.fraga4)

  const form = useRef()

const sendMail = (e) => {
  e.preventDefault()
  emailjs.sendForm('service_jul', 'template_uyiwkza', form.current, )
  .then((result) => {
    console.log(result.text)
}, 
  (error) => {
    console.log(error.text)
})

}



  return (
    <form ref={form} onSubmit={sendMail}>
        <input type='submit' value='Skicka' />
    </form>
  )
}

export default SendEmail


