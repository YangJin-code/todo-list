import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <header className='Header'>
            <h3>📆 오늘은 📆</h3>
            <h1>
                {/* {new Date().toDateString()} */}
                {new Date().toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                })}

            </h1>
        </header>
    )
}

export default Header

