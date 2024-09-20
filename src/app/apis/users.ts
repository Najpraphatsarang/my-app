import axios from "axios";

export const me = async () =>{
    try{
        const res = await axios.get("api/users/me");
        return res.data;
    }catch(error){

    }
};