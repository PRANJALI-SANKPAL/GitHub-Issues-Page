import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './IssuesPage.css';
import Pagination from './Pagination';

const IssuesPage = () => {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/2factorauth/twofactorauth/issues'
        );
        setIssues(response.data);
        setTotalPages(Math.ceil(response.data.length / 8)); // Assuming 8 issues per page
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const visibleIssues = issues.slice(startIndex, endIndex);

  return (
    <div className="issues-container">
      <div className="table">
        <div className="table-row">
          <div className="table-cell heading">Github Issues</div>
          <div className="table-cell pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <ul className="table-body">
          {visibleIssues.map((issue) => (
            <li key={issue.id} className="table-row">{issue.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IssuesPage;