import React from "react";
import { Routes,Route } from "react-router-dom";
import Multivitamins from "../pages/Multivitamins";
import Devices from "../pages/Devices";


const AllRoutes = () => {
  return <Routes>
    <Route path='/multivitamins' element={<Multivitamins/>}></Route>
    <Route path='/devices' element={<Devices/>}></Route>
  </Routes>;
};

export default AllRoutes;