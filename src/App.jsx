import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/blogs/:id" element={<BlogPostPage />} />
        </Routes>
    );
}

export default App;
