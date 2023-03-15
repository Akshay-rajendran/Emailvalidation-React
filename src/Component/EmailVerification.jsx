
import axios from 'axios';
import React,{ useState }  from 'react'



function EmailVerification() {

   const [gmail,setgmail]=useState("")

    async function submit(){
        let gmails=await axios.get("https://api.apilayer.com/email_verification/"+gmail,{headers:{apikey:"ikUWoNfLgCScsFlaPoEOhDspQFOa3HCr"}})
         console.log(gmails);
         if(gmails.data.can_connect_smtp==true){
          alert("valied gmail")
         }else{
          alert("invalied")
         }
    }

  return (
    <>
    <h1>Verify Email</h1>
    <input type="email" value={gmail} onChange={(e)=>{setgmail(e.target.value) }}/><br />
    <button onClick={submit}>Check</button>
    <p></p>
    </>
  )
}

export default EmailVerification