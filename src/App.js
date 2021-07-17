import React from "react"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import Registration from "./Pages/Registration"
import Basic from "./Pages/Basic.js"
import Success from "./Pages/Success"
import LoginPage from "./Pages/LoginPage"
import DataTable from "./Pages/DataTable"
import UserDetails from "./Pages/UserDetails"

import SignupPage from "./Pages/SignupPage.js"

import ErrorBoundries from "./errorBoundries.js"
import LandingPage from "./Pages/LandingPage.js"
import HeaderNameContext from "./Contexts/HeaderNameContext.js"

import { BrowserRouter as Router } from "react-router-dom"

import FooterContext from "./Contexts/FooterContext"

const PartnerDetails = React.lazy(() => import("./BasicComponents/PartnerDetail"))


function App() {
  const BigContainer = styled.div`
    border: 2px solid white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: 100px;
    margin-right: 100px;
    height: 100%;
  `

  return (
    <Router>
      <Switch>
        <BigContainer>
          <ErrorBoundries>
            <HeaderNameContext.Provider value={{ Text: "FATCA/QI Forms" }}>
              <FooterContext.Provider
                value={{
                  true: true,
                  text1: "All Rights reserved",
                  text2: "A Mihir-Mansi Corporation website",
                  text:"Mihir"
                }}
              >
                <React.Suspense
                  fallback={<h1>Please wait , I am fetching details for you....</h1>}
                >
                  <Route exact path='/loginpage' component={LoginPage} />

                  <Route path='/landingPage' component={LandingPage} />
                  <Route
                    exact
                    strict
                    path='/registration'
                    component={Registration}
                  />
                  <Route path='/registration/:key' component={Registration} />
                  <Route path='/Success' component={Success} />
                  <Route path='/datatable' component={DataTable} />
                  <Route path='/partnerDetail/:id' component={PartnerDetails} />
                  <Route path='/userdetails/:id' component={UserDetails} />
                  <Route path='/basic' component={Basic} />
                  <Route path='/signup' component={SignupPage} />
                </React.Suspense>
              </FooterContext.Provider>
            </HeaderNameContext.Provider>
          </ErrorBoundries>
        </BigContainer>
      </Switch>
    </Router>
  )
}

export default App
