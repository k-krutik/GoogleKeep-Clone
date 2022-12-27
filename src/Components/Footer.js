import React from 'react'

function Footer() {
    const date = new Date()
    let copyYear = date.getFullYear()
  return (
    <div className='footer'>
        <p >Copyright Ⓒ{copyYear}</p>
    </div>
  )
}

export default Footer