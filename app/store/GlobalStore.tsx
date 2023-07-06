import { atom, useAtom } from 'jotai'
import { createContext } from 'react'

const ThemeContext = createContext({"appTheme": "default"})


const appTheme = atom('default')


export{appTheme, ThemeContext}

