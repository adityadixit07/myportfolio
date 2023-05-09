import React from 'react'
import PropTypes from 'prop-types'
const ThemeContext=React.createContext();
const Theme = ({children}) => {
    const [themename,setthemename]=React.useState("dark");
    const toggleTheme=()=>{
        themename==="light"?setthemename("dark"):setthemename("light");
    };
  return (
    <ThemeContext.Provider value={[{themename,toggleTheme}]}>
        {children}
    </ThemeContext.Provider>
  )
}
Theme.propTypes={
    children:PropTypes.node.isRequired
};

export {Theme,ThemeContext};