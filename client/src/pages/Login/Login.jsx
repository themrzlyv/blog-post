import React,{useState} from 'react'
import Alert from '../../components/Alert/Alert'

const Login = () => {
    const [error, seterror] = useState(false)
    const [form, setform] = useState({email: '', password: ''})

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`/user/login`, {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(form)
        })
        const result = await res.json()
        if(!result.err && !result.error){
            return window.location.href = '/'
        }
        seterror(result.err)
    }

    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-5 mx-auto my-2">
                    <h4 className="h4 fw-bold fs-5">
                        <i className="fas fa-door-open mx-2"></i>
                        Login
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 mx-auto">
                    {error !== false ? <Alert value={error} type='danger'/> : null}
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 mx-auto my-3'>
                    <form onSubmit={handleSubmit} autoComplete='false'>
                        <div className="form-floating mb-3">
                            <input
                            name='email'
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            name='password'
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating mb-3 d-flex">
                            <button
                            className='btn fw-bold  d-flex align-items-center w-100 '>
                                <i className="far fa-arrow-alt-circle-right mx-1"></i>
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

