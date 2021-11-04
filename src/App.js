import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Domain from "./pages/domain/Domain";
import Community from "./pages/community/Community";
import Contact from "./pages/contact/Contact";
import LoadingSpinner from "./components/misc/LoadingSpinner";
import Error from "./components/misc/Error";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/domain">
              <Domain />
            </Route>
            <Route path="/community">
              <Community />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;