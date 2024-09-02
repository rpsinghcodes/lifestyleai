import Link from 'next/link';
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
    return (
        <div className="flex justify-center gap-9 items-center my-4 ">
            {currentPage <= 1 ? "" :  <Link href={`/tool-listing/${currentPage - 1}`}>Previous</Link> }
          {totalPages.map(pageNumber => <Link key={pageNumber}  href={`/tool-listing/${pageNumber}`} >{pageNumber}</Link>)}
          <Link href={`/tool-listing/${currentPage + 1}`}>Next</Link>
        </div>
    );
};

export default Pagination;
