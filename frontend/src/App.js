import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AktAjanlatok from './pages/AktAjanlatok';
import UjHirdetes from './pages/UjHirdetes';
import Layout from './pages/Layout';
import Fooldal from './pages/Fooldal';

function App() {
  return (
    <div className="App">
      <header className="App-header">sfdghjklé</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Fooldal />} />
            <Route path="ajanlatok" element={<AktAjanlatok />} />
            <Route path="uj-hirdetes" element={<UjHirdetes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
