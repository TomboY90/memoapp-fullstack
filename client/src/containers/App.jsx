import React from 'react';

// Component
import Layout from 'components/Layout';
import Header from 'components/Header';

// Containers
import WriteMemo from './WriteMemo';
import Login from './Login';

const App = () => {
  return (
    <Layout>
      <Header />
      <Layout.Main>
        <Login />
      </Layout.Main>
    </Layout>
  )
}

export default App;