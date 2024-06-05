import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ErrorBoundary from '../constsants/Errors/Errors';
const Home = lazy(()=> import('../pages/Home'));


const Router = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
        </Suspense>
        </ErrorBoundary>
    )
}

export default Router;

