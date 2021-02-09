import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getAllCategories } from '../../store/Actions/categoryAction';


const Editpost = ({data}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const {id} = params;
    

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    

    const category = useSelector(state=>state.category.category)

    const [form, setform] = useState({title: data.title, category: data.category, description: data.description})

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`/posts/${id}`, {
            method: "PUT",
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
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="editpanel">Do u really wanna change ?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                
                <form onSubmit={handleSubmit} autoComplete='false'>
                    <div className="form-floating mb-3">
                        <input 
                        value={form.title}
                        name='title'
                        onChange={handleChange}
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Title"/>
                        <label htmlFor="title">Title</label>
                    </div>

                    <div className="form-floating mb-3">
                        <select value={form.category} name='category' onChange={handleChange} className="form-select" id="category">
                            {
                                category && category.map(item => (<option value={item.name} key={item._id}>{item.name}</option>))
                            }
                        </select>
                        <label htmlFor="category">Category</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea 
                        value={form.description}
                        name='description'
                        onChange={handleChange}
                        style={{resize:"none", minHeight:'10em'}}
                        className="form-control" 
                        placeholder="Description" 
                        id="description"></textarea>
                        <label htmlFor="description">Description</label>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn m-0 d-flex align-items-center" data-bs-dismiss="modal">
                            Back
                            <i className="far mx-1 fa-hand-point-left"></i>
                        </button>
                        <button type="submit" className="btn m-0 d-flex align-items-center">
                            Save
                            <i className="far fa-check-circle mx-1"></i>
                        </button>
                    </div>

                </form> 

            </div>
            
        </>
    )
}

export default Editpost



