import React, {useContext} from 'react'
import { Navbar } from '../layout/navbar/Navbar'
import './header.scss'

import { RateContext } from '../../context/RateContext'

export const Header = () => {

    const {modalShowHandler} = useContext(RateContext)

    return(
        <div className = 'header'>
            <div className = 'headerWrap'>
                <div className='logo'>
                    <a href = '/'>
                        <h2>RateApp</h2>
                    </a>
                </div>
                <Navbar />
                <div className = 'person'>
                    <i className='fa fa-user' aria-hidden = 'true' onClick = {modalShowHandler}></i>
                </div>
            </div>
            <hr/>
        </div>
    )
}