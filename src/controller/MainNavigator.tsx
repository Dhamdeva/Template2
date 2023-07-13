import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/home/Dashboard";
import { Footer } from "../view/dashboard/footer/Footer";
import { Header } from "../view/dashboard/header/Header";
import { Bankaccount } from "../view/dashboard/consumers/Bankaccount";
import { Payments } from "../view/dashboard/consumers/Payments";
import { Loans } from "../view/dashboard/consumers/Loans";
import { Investment } from "../view/dashboard/consumers/Investment";
import { Insurances } from "../view/dashboard/consumers/Insurances";
import { Microatm } from "../view/dashboard/dbos/Microatm";
import { Aeps } from "../view/dashboard/dbos/Aeps";
import { Dmt } from "../view/dashboard/dbos/Dmt";
import { Insuranceservices } from "../view/dashboard/dbos/Insuranceservices";
import { Cash } from "../view/dashboard/dbos/Cash";
import { Bbps } from "../view/dashboard/dbos/Bbps";
import { Msme } from "../view/dashboard/dbos/Msme";
import { Merchants } from "../view/dashboard/dbos/Merchants";
import { Anagent } from "../view/dashboard/dbos/Agent";
import { About } from "../view/dashboard/About";
import { Contact } from "../view/dashboard/Contact";
import { Remuneration } from "../view/dashboard/footer/policies/Remuneration";
import { Login } from "../view/dashboard/login/Login";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bankaccount" element={<Bankaccount />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/insurances" element={<Insurances />} />
        <Route path="/microatm" element={<Microatm />} />
        <Route path="/aeps" element={<Aeps />} />
        <Route path="/dmt" element={<Dmt />} />
        <Route path="/insuranceservices" element={<Insuranceservices />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/bbps" element={<Bbps />} />
        <Route path="/msme" element={<Msme />} />
        <Route path="/merchants" element={<Merchants />} />
        <Route path="/anagent" element={<Anagent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
        <Route path="login" element={<Login />} />

        <Route path="/remuneration" element={<Remuneration />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
