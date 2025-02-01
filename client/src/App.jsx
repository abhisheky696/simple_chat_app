import React, { useEffect, useState } from "react";
import Showpage from "./components/Showpage";
import AddChat from "./components/AddChat";
import EditChat from "./components/EditChat";
import { BrowserRouter, Route,Routes } from "react-router-dom";
export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<Showpage/>}></Route>
                <Route path="/" element={<Showpage/>}></Route>
                <Route path="/users/addChat" element={<AddChat/>}></Route>
                <Route path="/users/editChat/:id" element={<EditChat/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
