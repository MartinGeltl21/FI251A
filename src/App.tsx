import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TurnusplanPage from './pages/TurnusplanPage';
import StundenplanPage from './pages/StundenplanPage';
import LernmaterialPage from './pages/LernmaterialPage';
import QuizPage from './pages/QuizPage';
import InfosPage from './pages/InfosPage';
import ITGrundschutzPage from './pages/ITGrundschutzPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/turnusplan" element={<TurnusplanPage />} />
                    <Route path="/lernmaterial" element={<LernmaterialPage />} />
                    <Route path="/it-grundschutz" element={<ITGrundschutzPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/stundenplan" element={<StundenplanPage />} />
                    <Route path="/infos" element={<InfosPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
