const BASE_URL= "https://thinkful-list-api.herokuapp.com/juliabugayev"; 

let fetchBookMark = (...args) => {
    let error = null; 
    return fetch(...args)
    .then ((response) => {
        if (!response.ok) {
            error = {code: response.status}; 
        }
        return response.json(); 
    })
    .then((data) => {
        if (error){
            error.message = data.message;
            return Promise.reject(error);
        }
        return data;
    })
}

let bookMarkDelete =(id) => {
    return fetchBookMark(`${BASE_URL}/${id}}`,{
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
        }, 

    }); 
}; 

let newBookMarkCreate = (bookmark) => {
    let newBookMark = JSON.stringify(bookmark); 
    return fetchBookMark(BASE_URL , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }); 
}; 

let bookmarkGet = (bookmark) => {
    return fetchBookMark(BASE_URL, {
        method: 'GET', 
        headers:{
            'Content-Type': 'application/json',
        }, 
    }); 
}; 