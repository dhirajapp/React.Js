import React , {useState, useSyncExternalStore} from 'react'

export default function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    
   const [allLogin , setAllLogin] = useState([]);

   const submitForm =(e)=>{
    e.preventDefault();
      const newlogin={email:email ,password:password};
      setAllLogin([ ...allLogin, newlogin]);
      console.log(allLogin);
   }
  return (
    <>
      <form action='' onSubmit={submitForm}>
       <div>
        <label htmlFor='email'>Email : </label>
        <input type='text' name='email' id='email'  autoComplete='off'
        value={email}  
            onChange={(e)=>setEmail(e.target.value)}
        />
       </div>

       <div>
        <label htmlFor='password'>Password : </label>
        <input type='password' name='password' id='password' autoComplete='off'
         value={password} 
         onChange={(e)=>setPassword(e.target.value)}
         />
       </div>

       <button type='submit'>Login</button>

      </form>

      <div>
        {
            allLogin.map((curElement)=>{
                return(
                    <div className=' '>
                    <p>{curElement.email}</p>
                    <p>{curElement.password}</p>

                    </div>
                )
            })
        }
      </div>
    </>
  )
}


//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;   regex for email validation