"use client";

import {useState, useEffect} from "react";
import {me} from "@/app/apis/users";

function Office(){
    const [user,setUser] = useState(null);

    useEffect(() =>{
        me().then((data)=>setUser(data));
    }, []);
    return <div>
        
    </div>;
}
export default Office;