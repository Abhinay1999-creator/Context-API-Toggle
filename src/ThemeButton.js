import React, { useContext } from 'react'
import {Theme} from './ThemeProvider'

const ThemeButton = () => {

     const { ToggleTheme } = useContext(Theme);
    

  return (
    <div>
        <div>
            <button onClick={ToggleTheme}>Toogle me</button>
        </div>
    </div>
  )
}

export default ThemeButton