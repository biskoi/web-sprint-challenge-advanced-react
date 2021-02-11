// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export default function useForm (init, successFlag) {

   const [formData, setFormData] = useState(init)
   const [showSuccessMessage, setshowSuccessMessage] = useState(successFlag)

   const changeHandler = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: [e.target.value]
      })
   }

   return [formData, setFormData, changeHandler, showSuccessMessage, setshowSuccessMessage];

}