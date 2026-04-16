import React,{useState} from 'react'
import API from '../api/axios'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    function handleLogin(e){
        e.preventDefault()
        API.post("/auth/login",{email,password})
            .then((res)=>{
                if(res.status==200){
                    alert("Login successful")
                    localStorage.setItem("token",res.data.token)
                    navigate("/")
                }
            })
            .catch(err=>{
                console.log(err)
                if(err.status==401){
                    alert(err.response.data.message)
                    return
                }
            })
    }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        
        <div className="card shadow-lg p-4" style={{width:"400px", borderRadius:"15px"}}>
            
            <h2 className="text-center mb-4 text-primary">Welcome Back</h2>

            <form onSubmit={handleLogin}>
                
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control"  
                        placeholder="Enter Email" 
                        onChange={(e)=>setEmail(e.target.value)} 
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control"  
                        placeholder="Enter Password" 
                        onChange={(e)=>setPassword(e.target.value)} 
                    />
                </div>

                <button className="btn btn-primary w-100">
                    Login
                </button>

            </form>

            <p className="text-center mt-3 mb-0">
                Don’t have an account?{" "}
                <span 
                    className="text-success" 
                    style={{cursor:"pointer"}}
                    onClick={()=>navigate("/register")}
                >
                    Register
                </span>
            </p>

        </div>

    </div>
  )
}





// import React,{useState} from 'react'
// import API from '../api/axios'
// import {useNavigate} from 'react-router-dom'

// export default function Login() {
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const navigate=useNavigate()
//     function handleLogin(e){
//         e.preventDefault()
//         API.post("/auth/login",{email,password})
//             .then((res)=>{
//                 if(res.status==200){
//                     alert("Login successful")
//                     localStorage.setItem("token",res.data.token)
//                     navigate("/")
//                 }
//             })
//             .catch(err=>{
//                 console.log(err)
//                 if(err.status==401){
//                     alert(err.response.data.message)
//                     return
//                 }
//             })
//     }
//   return (
//     <div className='container'>
//         <div className="row">
//             <form onSubmit={handleLogin} className='col-12 col-md-6'>
//                 <div className='mb-3'>
//                     <h2>Login</h2>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="" className="form-label">Email</label>
//                     <input type="email" className="form-control"  placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="" className="form-label">Password</label>
//                     <input type="password" className="form-control"  placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
//                 </div>
//                 <button className='btn btn-primary btn-lg'>Login</button>
//             </form>
//         </div>
//     </div>
//   )
// }