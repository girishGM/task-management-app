
const apiCall = (headers, method, url, body) => {
    const requestOptions = {
        method: method,
        headers: {...commonHeaders,headers},
        body: JSON.stringify(body)
    };
    fetch(url, requestOptions).then(response => response.json())
    .then(res => {
            let token = res.result && res.result.token;
            if(token){
                localStorage.setItem('access-token',token);
            }else{
                setErrorMessage('Invalid user credentials');
            }
        }
    );
} 

export default apiCall;