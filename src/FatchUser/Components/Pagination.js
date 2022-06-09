import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination(){

function handlePageClick(data){
    const selectedPages = data.selected;

    console.log(data.selected);
}

    return(
        <div>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel= {'...'}
                pageCount={15}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-end'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default Pagination;