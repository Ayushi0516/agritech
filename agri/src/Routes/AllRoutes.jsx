import React from 'react';
import { Route, Routes } from "react-router-dom";
import CounterApp from '../Components/CounterApp';
import NextPage from '../Components/NextPage';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element= {<CounterApp />} />
    <Route path="/nextpage" element= {<NextPage />} />
   </Routes>
  )
}

export default AllRoutes;