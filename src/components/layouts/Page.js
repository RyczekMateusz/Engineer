import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddApartment from '../Pages/AddApartment';
import SearchPage from '../Pages/SearchPage';

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={AddApartment} />
      <Route path="/add" component={AddApartment} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  );
}

export default Page;