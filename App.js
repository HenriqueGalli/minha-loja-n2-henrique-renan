import React from 'react';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import CadastroProdutos from './pages/CadastroProdutos';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    CadastroProdutos
  })
);

export default function App() {
  return (
    <Routes/>      
    );
}
