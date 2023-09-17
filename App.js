import React from 'react';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import CadastroProdutos from './pages/CadastroProdutos';
import ListarProdutos from './pages/ListarProdutos'
import Cart from './pages/Cart'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    CadastroProdutos,
    ListarProdutos,
    Cart
  })
);

export default function App() {
  return (
    <Routes/>      
    );
}
