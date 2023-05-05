import React, { useRef, useState } from 'react'
import { useRouter } from "next/router";

export const Form = () => {
  const router= useRouter()
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("")
  const [msg, setMsg] = useState("")
  
  const fName = useRef('')
  const lName = useRef('')
  const eMail = useRef('')
  const password = useRef('')
  const dateOfBirth = useRef('')
  const country = useRef('')
  const city = useRef('')
  const state = useRef('')

  const ondateChange=(e)=>{
    const birthDate = new Date(e.target.value); 
    const difference = Date.now() - birthDate.getTime();
    const cAge = new Date(difference);
    const ageLimit =(cAge.getUTCFullYear() - 1970)
    setAge(ageLimit);
    if(ageLimit>14){
      setMsg("")
    }
    else{
      setMsg("Age should be Greater than 14 to fill this form")
    }
  }

  const onHandleSubmit=async(e)=>{
    if(gender!="" && age>14){
      e.preventDefault()
      const deatils={
        "fName":fName.current.value,
        "lName":  lName.current.value ,
        "eMail":  eMail.current.value ,
        "password":  password.current.value ,
        "country": country.current.value,
        "city": city.current.value,
        "state": state.current.value,
        "gender": gender,
        "dateOfBirth": dateOfBirth.current.value,
      }

      const response= await fetch("/api/record",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(deatils)
      })
      const res= await response.json()
      if(res.stat==true){
        // router.push("/details")
        router.push("/shivamResume.jpg")
      }
      else if(res.stat==false){
        setMsg("Form Not submited: Please fill the correct credentials and try again")
      }
    }

  }


  return (
    <>
    <div className='container'>
    <form>
  <div className="mb-2 d-flex">
    <input type="text" className="form-control mx-2" aria-describedby="emailHelp" placeholder='First Name'  pattern="[A-Za-z]+" ref={fName} required/>
    <input type="text" className="form-control mx-2"aria-describedby="emailHelp" placeholder='Last Name'  pattern="[A-Za-z]+" ref={lName}/>
  </div>

  <div className="mb-2">
    <input type="email" className="form-control m-2" placeholder='E-Mail' required ref={eMail}/>
    <input type="password" className="form-control m-2" placeholder='Password' required autoComplete="false" ref={password}/>
  </div>



  <div className="mb-2">
    <select className="form-control m-2" aria-label="Default select example" ref={country}>
  <option defaultValue>Select Country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>


  <div className="mb-2 d-flex">
  <select className="form-control m-2" aria-label="Default select example" ref={city}>
  <option defaultValue>Select City</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select className="form-control m-2" aria-label="Default select example" ref={state}>
  <option defaultValue>Select State</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>



  <div className="mb-2">
  <div onChange={(e)=>{setGender(e.target.value)}}>
        <input className="mx-2" type="radio" value="MALE" name="gender"/> Male
        <input className="mx-2" type="radio" value="FEMALE" name="gender"/> Female
        <input className="mx-2" type="radio" value="null" name="gender" /> Prefer Not to say
      </div>
  </div>

  <div className="mb-2 d-flex justify-content-start">
    <div className='align-self-center'>
    <label className="" htmlFor="dateOfBirth">
    Date of Birth
  </label>
  </div>
  <div>
    <input type="date" className="form-control m-2" id='dateOfBirth' onChange={(e)=>ondateChange(e)} ref={dateOfBirth} required/>
  </div>
  <div className='mx-2'>
    <input type="number" className="form-control m-2" value={age} readOnly/>
  </div>
  </div>


  <button type="submit" className="btn btn-primary" onClick={onHandleSubmit}>Submit</button>
</form>
  </div>
  <div>
    <p className='text-danger'>{msg}</p>
  </div>
    
    </>
  )
}
