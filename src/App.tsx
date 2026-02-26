import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TurnusplanPage from './pages/TurnusplanPage';
import StundenplanPage from './pages/StundenplanPage';
import PlaceholderPage from './pages/PlaceholderPage';
import LernmaterialPage from './pages/LernmaterialPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/turnusplan" element={<TurnusplanPage />} />
                    <Route path="/lernmaterial" element={<LernmaterialPage />} />
                    <Route path="/quiz" element={<PlaceholderPage />} />
                    <Route path="/stundenplan" element={<StundenplanPage />} />
                    <Route path="/infos" element={<PlaceholderPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
