import { useState } from "react";
import axios from 'axios'

const LoginForm =() =>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    
    const handleSubmit=(e)=>{

        e.preventDefault();

        //username and Password => chatengine -->give message
        const authObject={'Project-ID':"ad817d22-0af7-4cc7-af70-3f17b39f05cc",
                           'User-Name':username,
                           'User-Secret':password};


                           try{
                              axios.get('https://api.chatengine.io/chats', { headers : authObject });

                                //works out --->logged in

                                localStorage.setItem('username',username);
                                localStorage.setItem('password',password);
                                window.location.reload();
                           }catch(error){
                               //error -->try with new user
                               setError('Oops,incorrect credentials!!')

                           }
        
       
        

    }

    return (

        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>

                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>

                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>

                </form>
            </div>
        </div>
    )

}

export default LoginForm;