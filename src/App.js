import React from "react";
import PostIcon from "@material-ui/icons/Book";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate, PostShow } from "./posts";
import { UserList } from "./users";
import authProvider from "./authProvider";

const App = () => (
  <Admin
    dataProvider={jsonServerProvider(
      "https://my-json-server.typicode.com/dhyey35/demo",
    )}
    authProvider={authProvider}
  >
    <Resource
      name="Expense"
      icon={MoneyOffIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
    <Resource
      name="Income"
      icon={MonetizationOnIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
    <Resource
      name="Debtors"
      icon={AccountBalanceWalletIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
    <Resource
      name="Creditors"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
  </Admin>
);
export default App;
