import React, { useContext } from 'react'
import {Theme} from './ThemeProvider'

const ThemeContext = () => {

    const { toggle } = useContext(Theme);

    return (
        <div>
            <div>
                <h2>The toggel selected is {toggle} </h2>
            </div>
        </div>
    )
}

export default ThemeContext