import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    return (
        <div className="app-root">
            {!isHome && (
                <nav className="top-nav">
                    <button className="back-btn" onClick={() => navigate('/')} id="back-home-btn">
                        <span className="back-btn__arrow">←</span>
                        <span className="back-btn__text">Startseite</span>
                    </button>
                    <span className="top-nav__brand">FI251A</span>
                </nav>
            )}
            <main>
                <Outlet />
            </main>
        </div>
    );
}
