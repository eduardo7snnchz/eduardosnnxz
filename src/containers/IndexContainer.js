import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Index from '../pages/Index';
import Request from '../async/request';


const IndexContainer = () =>{
    const history = useHistory();
    const [form, setForm] = useState({ email:'', pass:'' });
    const [msg, setMsg]= useState("");

    const onChange = (e) => setForm({...form, [e.target.id] : e.target.value });

    const onSubmit = async (e) =>{
        e.preventDefault();
        const body={
            id: form.email,
            clave: form.pass

        };
        const request = new Request("POST", body, 0, "service/autentica");
        const response= await request.exec();
        if(response.isSuccess){
            sessionStorage.setItem("auth", JSON.stringify(response.data));
            setMsg("");
            history.push( "/welcome", {form: form } );
        
        }else{
            setMsg(response.message)
        }

    }

    return(
        <Index msg={msg} form={form} onChange={onChange} onSubmit={onSubmit} />
    )
};

export default IndexContainer;