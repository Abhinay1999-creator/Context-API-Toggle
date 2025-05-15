import React, { useContext } from 'react'
import ThemeButton from './ThemeButton'
import ThemeContext from './ThemeContext'
import ThemeProvider from './ThemeProvider'
import { Theme } from './ThemeProvider'

const ThemedContent = () => {
  const { toggle, themeStyles } = useContext(Theme);
  return (
    <>
      <div style={themeStyles[toggle]}>
        <h2>The current theme is: {toggle}</h2>
        <ThemeContext></ThemeContext>
        <ThemeButton />
      </div>
    </>
  )
}

const App = () => {
    return (
        <ThemeProvider>
            <ThemedContent />
        </ThemeProvider>
    );
};

export default App