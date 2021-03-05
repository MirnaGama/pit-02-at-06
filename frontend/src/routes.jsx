import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages';
import Header from './components/Header';
import User from './pages/User';
import EditUser from './pages/User/edit-user';
import Todos from './pages/Todos';
import Todo from './pages/Todos/Todo';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

const routes = [
  {
    path: '/',
    component: Index,
    name: 'Home',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/cadastro',
    component: Cadastro,
    name: 'Cadastro',
  },
  {
    path: '/todo',
    component: Todos,
    name: 'Todo',
  },
  {
    path: '/todo/:id',
    component: Todo,
    name: 'Todo',
    header: false,
  },
  {
    path: '/user',
    component: User,
    name: 'User',
  },
  {
    path: '/user/:id',
    component: EditUser,
    name: 'User',
    header: false,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Header title="Pitang 2" routes={routes} />
    <Switch>
      {routes.map(({ component, path }) => (
        <Route
          exact
          key={path}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
