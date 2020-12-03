import React from 'react';
import { connect } from 'react-redux'

// Component
import Layout from 'components/Layout';
import Header from 'components/Header';

// Containers
import Login from './Login';
import Memo from './Memo';

const App = ({ authenticated }) => {
  return (
    <Layout>
      <Header />
      <Layout.Main>
        {
          !authenticated && <Login />
        }

        {
          authenticated && <Memo />
        }
      </Layout.Main>
    </Layout>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(App);