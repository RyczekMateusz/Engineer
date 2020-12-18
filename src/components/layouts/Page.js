import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddApartment from '../Pages/AddApartment';
import SearchPage from '../Pages/SearchPage';
import MainPage from '../Pages/MainPage';

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/add" component={AddApartment} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  );
}

export default Page;