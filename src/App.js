import React from "react"
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"
import Registration from "./Pages/Registration"

import Success from "./Pages/Success"
import LoginPage from "./Pages/LoginPage"
import DataTable from "./Pages/DataTable"
import UserDetails from "./Pages/UserDetails"

import ErrorBoundries from "./errorBoundries.js"
import LandingPage from "./Pages/LandingPage.js"
import HeaderNameContext from "./Contexts/HeaderNameContext.js"

import { BrowserRouter as Router } from "react-router-dom"

const PartnerDetails = React.lazy(() => import("./BasicComponents/PartnerDetail"))

function App() {
  const BigContainer = styled.div`
    margin-left: 130px;
    margin-right: 130px;
    height: 100%;
  `

  return (
    <Router>
      <Switch>
        <BigContainer>
          <ErrorBoundries>
            <HeaderNameContext.Provider value={{ Text: "FATCA/QI Forms" }}>
              <React.Suspense
                fallback={<h1>Please wait , I am fetching details for you....</h1>}
              >
                <Route exact path="/" component={LoginPage} />

                <Route path="/landingPage" component={LandingPage} />
                <Route exact strict path="/registration" component={Registration} />
                <Route path="/registration/:key" component={Registration} />
                <Route path="/Success" component={Success} />
                <Route path="/datatable" component={DataTable} />
                <Route path="/partnerDetail/:id" component={PartnerDetails} />
                <Route path="/userdetails/:task" component={UserDetails} />
              </React.Suspense>
            </HeaderNameContext.Provider>
          </ErrorBoundries>
        </BigContainer>
      </Switch>
    </Router>
  )
}

export default App
