import  Axios from "axios";


const Axiosconfig=
    Axios.create({
        baseURL:'http://localhost:3200/'
    });

Axiosconfig.interceptors.request.use((req)=>{
    console.log('Request is Processing')
    console.log(req)
    return req;
},
(err)=>{
    console.log('Error occured while processing request')
    console.log(err)
    return Promise.reject(err);
})

export default Axiosconfig;