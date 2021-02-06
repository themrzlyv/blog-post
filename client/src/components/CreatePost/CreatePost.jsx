import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllCategories } from '../../store/Actions/categoryAction';

const CreatePost = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const category = useSelector(state=>state.category.category)

    const [form, setform] = useState({title: '', category: '', description: ''})

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`/posts`, {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(form)
        })
        const result = await res.json()
        if(!result.error){
            return window.location.href = '/'
        }
        console.log(result.error)
    }
    return (
        <form onSubmit={handleSubmit} autoComplete='false'>
            <div className="form-floating mb-3">
                <input 
                name='title'
                onChange={handleChange}
                type="text" 
                className="form-control" 
                id="title" 
                placeholder="Title"/>
                <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-3">
                <select name='category' onChange={handleChange} className="form-select" id="category">
                    {
                        category && category.map(item => (<option value={item.name} key={item._id}>{item.name}</option>))
                    }
                </select>
                <label htmlFor="category">Category</label>
            </div>

            <div className="form-floating mb-3">
                <textarea 
                name='description'
                onChange={handleChange}
                style={{resize:"none", minHeight:'10em'}}
                className="form-control" 
                placeholder="Description" 
                id="description"></textarea>
                <label htmlFor="description">Description</label>
            </div>

            <div className="form-floating mb-3 d-flex justify-content-end">
                <button 
                className='btn btn-outline-dark'>
                    Write
                </button>
            </div>
        </form>
    )
}

export default CreatePost
