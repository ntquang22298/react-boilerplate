import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Foot from '../Footer';
import Home from '../../pages/Home';
import Head from '../Header';

const { Content, Header, Footer } = Layout;

const Main = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Head />
        </Header>
        <Content>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
};
export default Main;
