import React from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { Route, Redirect, Switch } from "react-router-dom";

import { Home, Coming, Staking, Accounts, History, Validators, Government, Proposals } from "pages";

const routePublic = (path, component) => ({
  path,
  component,
  auth: false,
});

const routePrivate = (path, component) => ({
  path,
  component,
  auth: true,
});

const routes = {
  Home: routePublic("/", Home),
  Accounts: routePrivate("/accounts", Accounts),
  History: routePrivate("/history", History),
  Staking: routePublic("/staking", Staking),
  Validators: routePublic("/staking/validators/:address", Validators),
  Government: routePublic("/government", Government),
  Proposals: routePublic("/government/proposals/:id", Proposals),
  Swap: routePublic("/swap", Coming),
  News: routePublic("/news", Coming),
  Supports: routePublic("/supports", Coming),
  BuyFirma: routePublic("/market", Coming),
  Explorer: routePublic("/explorer", Coming),
};

const CustomRoute = ({ auth, component: Component, ...p }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { address } = useSelector((state) => state.wallet);

  const renderFunc = (props) => {
    if (auth) {
      if (address === "") {
        enqueueSnackbar("You Need Login First", {
          variant: "error",
          autoHideDuration: 1000,
        });

        return <Redirect to={{ pathname: "/" }} />;
      }
    }
    return <Component {...props} />;
  };

  return <Route {...p} render={renderFunc} />;
};

const route = () => (
  <Switch>
    {Object.values(routes).map((x, i) => (
      <CustomRoute key={i} exact path={x.path} component={x.component} auth={x.auth} />
    ))}
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default route;
