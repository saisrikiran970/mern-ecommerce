import React, { useState } from 'react'
import API from '../api/axios'

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("")

    function handleRegister(e) {
        e.preventDefault()

        API.post("/auth/register", {
            name,
            email,
            password,
            mobile: Number(mobile)
        })
        .then((res) => {
            if (res.status === 201) {
                alert("User registered successfully")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                
                <h2 className="text-center mb-4 text-success">Create Account</h2>

                <form onSubmit={handleRegister}>
                    
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" onChange={(e) => setMobile(e.target.value)} />
                    </div>

                    <button className="btn btn-success w-100">Register</button>

                </form>
            </div>
        </div>
    )
}










// import React,{useState} from 'react'
// import API from '../api/axios'
// export default function Register() {
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [mobile,setMobile]=useState("")
//     function handleRegister(e){
//         e.preventDefault()
//         API.post("/auth/register",{name,email,password,mobile:Number(mobile)})
//             .then((res)=>{
//                 console.log(res)
//                 if(res.status===201){
//                     alert("User registered successfully")
//                 }
//             })
//             .catch(err=>{
//                 console.log(err)
//             })
//     }
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <form onSubmit={handleRegister} className='col-12 col-md-6'>
//                     <div className='mb-3'>
//                         <h1>Register</h1>
//                     </div>
//                     <div class="mb-3">
//                         <label htmlFor="" class="form-label">Name</label>
//                         <input 
//                             type="text" 
//                             class="form-control" 
//                             name="name"
//                             onChange={(e)=>setName(e.target.value)}/>
//                     </div>
//                     <div class="mb-3">
//                         <label htmlFor="" class="form-label">Email</label>
//                         <input 
//                             type="email" 
//                             class="form-control" 
//                             name="email"
//                             onChange={(e)=>setEmail(e.target.value)}/>
//                     </div>
//                     <div class="mb-3">
//                         <label htmlFor="" class="form-label">Password</label>
//                         <input 
//                             type="password" 
//                             class="form-control" 
//                             name="password"
//                             onChange={(e)=>setPassword(e.target.value)}/>
//                     </div>
//                     <div class="mb-3">
//                         <label htmlFor="" class="form-label">Mobile Number</label>
//                         <input 
//                             type="text" 
//                             class="form-control" 
//                             name="mobile"
//                             onChange={(e)=>setMobile(e.target.value)}/>
//                     </div>
//                     <button className='btn btn-success'>Register</button>
//                 </form>
//             </div>

//         </div>
//     )
// }