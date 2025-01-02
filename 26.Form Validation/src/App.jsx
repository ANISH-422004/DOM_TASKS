import React from "react";
import { useState } from "react";
import { use } from "react";

const App = () => {


  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [Confirm, setConfirm] = useState('')


  console.log(Name);
  

  const HandelSubmit = (e)=>{
    e.preventDefault()

    if(Name.trim()==="" ||  Name.trim().length<4){
      alert("Name Should Have min 4 letters")
    }
    else if(Email.trim()==="" || !Email.includes("@") || !Email.includes(".com")){
      alert("Email is either empty or its not a valid email")
    }
    else if (password.trim()===""){
      alert("password is Mandatory")
    }
    else if (password.trim()===""){
      alert("Re-enter password field is Mandatory")
    }
    else if (password.trim()!==Confirm.trim()){
      alert("password and ConfirmPassword Donot Match")
    }



  
    setName('')
    setEmail('')
    setpassword('')
    setConfirm('')

  }

  return (
    <div className="h-screen w -full bg-black text-green-400 flex justify-center p-3 ">
      <form className="w-[60%] flex flex-col gap-5">
  
        <h1 className="text-center text-5xl font-mono" >Exprience Thrill </h1>

      
        <div className="flex flex-col ">
          <label htmlFor="">Name</label>
          <input  
          value={Name}
          onChange={(e)=>{setName(e.target.value)}}
          className="text-lg bg-transparent border rounded-xl p-1 text-slate-300 border-emerald-500" type="text" placeholder="Enter name " />
        </div>
        
        <div className="flex flex-col ">
          <label htmlFor="">Email</label>
          <input  
          value={Email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className="text-lg bg-transparent border rounded-xl p-1 text-slate-300 border-emerald-500" type="text" placeholder="Enter Email" />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="">Create Password</label>
          <input  
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          className="text-lg bg-transparent border rounded-xl p-1 text-slate-300 border-emerald-500" type="password" placeholder="Enter Passowrd" />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="">Confirm Password</label>
          <input  
          value={Confirm}
          onChange={(e)=>{setConfirm(e.target.value)}}
          className="text-lg bg-transparent border rounded-xl p-1 text-slate-300 border-emerald-500" type="password" placeholder="Re-Enter Passowrd" />
        </div>


        <button 
        onClick={(e)=>{HandelSubmit(e)}}  
        className="bg-emerald-500 w-20  text-black font-mono font-semibold">
          Log
        </button>
      
      </form>
    </div>
  );
};

export default App;
