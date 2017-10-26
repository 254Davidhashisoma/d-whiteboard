import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div className="homepage-title">
                <i className="fa fa-flask fa-3x" aria-hidden="true"></i>
                <p className="title">Skin Lab</p>
            </div>
            <div className="homepage-content">
                <div className="homepage-grid">
                    <Link to="/acne" className="homepage-link">Acne</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/aging" className="homepage-link">Aging</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/brightening" className="homepage-link">Brightening</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/dryness" className="homepage-link">Dryness</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/exfoliate" className="homepage-link">Exfoliate</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/pigmentation" className="homepage-link">Pigmentation</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/healing" className="homepage-link">Healing</Link>
                </div>
                <div className="homepage-grid">
                    <Link to="/calming" className="homepage-link">Calming</Link>
                </div>
            </div>
        </div>
    );
}