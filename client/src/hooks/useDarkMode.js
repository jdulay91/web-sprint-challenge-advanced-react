import { useState, useEffect }from 'react'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState({
        darkMode: true,    
      })
    
      const handleChange = (event) => {
        setDarkMode({ ...darkMode, [event.target.name]: event.target.checked });
      };
    
    useEffect(() => {
        if(darkMode)  {        
        return document.body.style.backgroundColor = '#0e101c' 
      }else{
          return document.body.style.backgroundColor = "white";
      }           
    }, [darkMode])
    
    return[darkMode, handleChange]

}