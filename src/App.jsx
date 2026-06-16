import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}