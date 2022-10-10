import React from 'react'
import NavB1 from './NavB1'
import Schreiben from'./Schreiben'
import Lesen from'./Lesen'
import Hoeren from './Hoeren'
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
const B1 = () => {
  return (
      <div>

<NavB1/>


<Routes>
  <Route path ='/b1' element ={<B1/>}/>
  <Route path ='/b1/hoeren' element ={<Hoeren/>}/>
  <Route path ='/b1/schreiben' element ={<Schreiben/>}/>
  <Route path ='/b1/lesen' element ={<Lesen/>}/>

</Routes>

      </div>
              
     
  );
}

export default B1