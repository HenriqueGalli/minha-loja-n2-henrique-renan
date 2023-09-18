import React from 'react';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import CadastroProdutos from './pages/CadastroProdutos';
import ListarProdutos from './pages/ListarProdutos'
import ComprarProdutos from './pages/ComprarProdutos'
import Cart from './pages/Cart'
import Catalog from './models/Catalog';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    CadastroProdutos,
    ListarProdutos,
    ComprarProdutos,
    Catalog,
    Cart
  })
);

export default function App() {
  return (
    <Routes/>      
    );
}
