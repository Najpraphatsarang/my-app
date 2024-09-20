import axios from "axios";

export const login = async (username: string,password: string) =>{
    try{
        const res = await axios.post("/api/office/login",{
            username,
            password,
        });
        return res.data;
    }catch(error){}
};