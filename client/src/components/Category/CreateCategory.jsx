import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CreateCategory = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])


    const [form, setform] = useState({name: ''})

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`/category`, {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(form)
        })
        const result = await res.json()
        if(!result.error){
            return window.location.href = '/account'
        }
        console.log(result.error)
    }
    return (
        <div className='col-lg-12 my-3'>
            <div className='row'>
                <div className="col-lg-4">
                    <h4 className="h4 m-3 fs-5 ">Add Category</h4>
                </div>
                <div className='col-lg-8'>
                    <form onSubmit={handleSubmit} autoComplete='false'>
                        <div className="form-floating mb-3">
                            <input
                            name='name'
                            onChange={handleChange}
                            type="text"
                            className="form-control bg-transparent border-dark"
                            id="name"
                            placeholder="Name"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3 d-flex justify-content-end">
                            <button
                            className='btn '>
                                Add
                                <i className="fas fa-plus mx-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory
