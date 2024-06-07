import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
const Home = lazy(()=> import('../pages/Home'));
const Contact = lazy(()=> import('../pages/Contact'));
const About = lazy(()=> import('../pages/About'));


const Router = () => {
    return (
            <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
        </Suspense>
    )
}

export default Router;

