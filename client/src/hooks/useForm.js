// write your custom hook here to control your checkout form
import { useState, useEffect } from 'react'

export const useForm = (initialData) => {
    
    const [values, setValues] = useState(initialData);
    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [showSuccessMessage,setShowSuccessMessage] = useState(false)


    
    return [handleChanges,values,showSuccessMessage,setShowSuccessMessage]
}