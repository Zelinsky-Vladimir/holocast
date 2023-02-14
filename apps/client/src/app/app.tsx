import { Route, Routes, Link } from 'react-router-dom';
import { Content } from '../features/Content';
import { Header } from '../features/Header';
import { Menu } from '../features/Menu';
import './app.style.css';

export function App() {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-[minmax(60px,360px)_minmax(360px,1fr)]">
      <Menu />
      <div className="grid grid-rows-[60px_1fr]">
        <Header />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="*" element={<div>Page not found.</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}
