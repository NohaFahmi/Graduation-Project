const baseURL = "http://localhost:3005/users";

export const getAllUsers = async() => {
    
    const res = await fetch(baseURL);

    let payload = await res.json();

    return {
        type: 'GET_USERS',
        payload
    }
}

export const filterUsers = async(keyword) => {
    
    const res = await fetch(baseURL);

    let payload = await res.json();
    return {
        type: 'FILTER_USERS',
        payload: payload.filter( (user) => {
            return user.name.toLowerCase().includes(keyword.toLowerCase());
        })
    }
}

export const addUser = async(userInfo) => {
    
    const res = await fetch(baseURL, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(userInfo)
    });

    let payload = await res.json();
    
    return {
        type: 'ADD_USER',
        payload
    }
}