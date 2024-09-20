"use client";
import React, { PropsWithChildren } from "react";

function Layout({children}: PropsWithChildren){
    return <div className="border-4 border-blue-700">{children}</div>
}

export default Layout;