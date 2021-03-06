import React from 'react';
import styled from 'styled-components';
import { media } from 'lib/style';

const Wrapper = styled.div`
  padding-top: 60px;
`

const Layout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

Layout.Main = styled.div`
  height: calc(100vh - 60px);
  position: relative;
  transition: all .3s;
  overflow: hidden;

  ${media.desktop`
      width: 990px;
  `}

  ${media.tablet`
      margin-top: 1rem;
      width: calc(100% - 10rem);
  `}

  ${media.mobile`
      margin-top: 0.5rem;
      width: calc(100% - 6rem);        
  `}
`

export default Layout;