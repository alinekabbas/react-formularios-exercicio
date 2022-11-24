import { useState } from "react"

export const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const onChangeForm = (event)=>{
        const {name, value} = event.target
        const novoForm = {...form, [name]:value}
        setForm(novoForm)
    }
    return[form, onChangeForm]
}