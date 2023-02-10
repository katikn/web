import axios from "axios";

async function getData() {
    let result = await axios.get('http://localhost:1337/api/articles?populate=*');
    return result;
}

async function getDataUser(id){
    console.log(id);
    let result = await axios.get('http://localhost:1337/api/articles?populate=users_permissions_user&filters[users_permissions_user][id][$eq]=' + id);
    return result;
}

async function registerUser(namee, emaill, passwordd, usernamee){
    await axios.post(`http://localhost:1337/api/auth/local/register`, {
        email: emaill,
        name: namee,
        password: passwordd,
        username: usernamee
    })
    return 1;
}

async function loginUser(emaill, passwordd){
    const res = await axios.post(`http://localhost:1337/api/auth/local`, {
        identifier: emaill,
        password: passwordd
    });
    return res
}

async function loginUser2(userid, jwt){
    const res2 = await axios.get(`http://localhost:1337/api/users/${userid}?populate=*`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    })
    return res2
}

async function makenewPost(jwt, titl, desc){
    const res = await axios.post('http://localhost:1337/api/articles', {
        title: titl,
        description: desc,
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    })
    return res
}

export { getData, getDataUser, registerUser, loginUser, loginUser2, makenewPost };
