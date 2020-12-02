import React from 'react';

// Component
import Layout from 'components/Layout';
import Header from 'components/Header';

// Containers
import WriteMemo from './WriteMemo';

const App = () => {
  return (
    <Layout>
      <Header />
      <Layout.Main>
        <WriteMemo />
      </Layout.Main>
    </Layout>
  )
}

export default App;