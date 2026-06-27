import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFoundPage = () => (
    <div className="page-not-found">
        <SEO title="404 | Page not found" description="The requested page could not be found." />
        <div className="not-found-card">
            <h1>404</h1>
            <p>The page you were looking for cannot be found.</p>
            <Link to="/" className="btn btn-primary">Return home</Link>
        </div>
    </div>
);

export default NotFoundPage;
