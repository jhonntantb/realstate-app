import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com"

export const fetchApi= async(url)=>{
    const res=await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '8a7196252emsh7dde79b5cfd8602p100b9ajsn8e4d9ff8ed4c'
          }
    })

    return res.data
}