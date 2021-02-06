export const  Postvalidate = (title,category,description) => {
    let err;
    if(!title || !description || !category)
        return err = "Please fill all inputs";

    if(title.length > 35)
        return err = "Title must be max 35 character!";

    if(description.length > 120)
        return err = "Description must be max 120 character";

    if(category.length > 35)
        return err = "Category name must be max 120 character";
}

export const validator = (email,password) => {
    if(!email || !password)
        return "Please fill all inputs"

    if(password.length < 6) 
        return "Password must be min 6 character"

    if(!validateEmail(email))
        return "Please write correct email"
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}