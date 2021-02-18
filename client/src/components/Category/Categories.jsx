import React,{useState} from 'react'
import {useSelector} from 'react-redux'

const Categories = () => {
    const [isAdd, setisAdd] = useState(false)

    const categories = useSelector(state=>state.category.category)

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

    const CategoryList = () => {
        return(
            <div className="modal-content">
                <div style={{border:'none'}} className="modal-header ">
                    <h5 className="modal-title" id="deleteItemLabel">
                        All Categories
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories && categories.map(category => (
                                    <tr key={category._id}>
                                        <td className='d-flex align-items-center justify-content-lg-between'>
                                            {category.name}
                                            <button className="btn p-0">
                                                Delete
                                                <i className="fas fa-trash mx-1"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div style={{border:'none'}} className="modal-footer">
                    <button 
                    onClick={() => setisAdd(true)}
                    type="button" 
                    className="btn">
                        <i className="fas fa-plus-circle mx-1"></i>
                        Add Category
                    </button>
                </div>
            </div>
        )
    }

    const createCategory = () => {
        return(
            <div className="modal-content">
                <div style={{border:'none'}} className="modal-header ">
                    <h5 className="modal-title" id="deleteItemLabel">
                        Create a new category
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
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
                    </form>
                </div>
                <div style={{border:'none'}} className="modal-footer">
                    <button 
                    onClick={() => setisAdd(false)}
                    type="button" 
                    className="btn">
                        <i className="far fa-arrow-alt-circle-left mx-1"></i>
                        Back
                    </button>
                    <button 
                    type="button" 
                    className="btn">
                        Save
                        <i className="far fa-check-circle mx-1"></i>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#deleteItem">
                Category
            </button>

            <div className="modal fade" id="deleteItem" tabIndex="-1" aria-labelledby="deleteItemLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    {
                        isAdd === false ? CategoryList() : createCategory()
                    }
                </div>
            </div>
        </>
    )
}

export default Categories
