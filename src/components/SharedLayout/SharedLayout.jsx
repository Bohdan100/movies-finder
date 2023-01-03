import React from 'react';

import svg from '../defaultImg/logo.svg';

import {
  SharedLayoutWrapper,
  Navigation,
  NavigationLink,
  Logo,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>
      <Logo src={svg} alt="logo" />
    </SharedLayoutWrapper>
  );
};

export default SharedLayout;
