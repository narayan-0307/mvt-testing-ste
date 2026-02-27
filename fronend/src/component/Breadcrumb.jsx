import { Link } from "react-router-dom";
import React from "react";
import "./Breadcrumb.css";
import { FaHome } from "react-icons/fa";

const Breadcrumb = ({ currentPage, items }) => {
  const renderItems = () => {
    if (Array.isArray(items) && items.length) {
      return items.map((it, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="breadcrumb-segment">
            {it.to && !isLast ? (
              <Link to={it.to} className="breadcrumb-link-item">
                {it.label}
              </Link>
            ) : (
              <span
                className={isLast ? "breadcrumb-current" : "breadcrumb-text"}
              >
                {it.label}
              </span>
            )}
            {!isLast && <span className="breadcrumb-separator">/</span>}
          </span>
        );
      });
    }

    // fallback: string currentPage
    return <span className="breadcrumb-current">{currentPage}</span>;
  };

  return (
    <div className="breadcrumb-wrapper">
      <div className="breadcrumb-container">
        <nav className="breadcrumb" aria-label="Breadcrumb navigation">
          <Link to="/" className="breadcrumb-link">
            <FaHome className="home-icon" /> Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          {renderItems()}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
