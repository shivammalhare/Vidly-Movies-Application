import React, { Component } from 'react'
import lodash  from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
const { itemsCount ,pageSize ,currentPage, onPageChange} = props;


const pagesCount = Math.ceil(itemsCount / pageSize);
if(pagesCount === 1) return null;
const pages = lodash.range(1, pagesCount + 1);



    return (
        <nav>
            <ul className="pagination">
                {pages.map (page =>
                <li key={page} onClick ={()=> onPageChange(page)} className={page === currentPage ? 'page-item active' : 'page-item'} >
                    <a className="page-link">{page }</a></li>
                    )}
            </ul>
        </nav>
    );
}
 
Pagination.propTypes = { itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired ,
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired};

export default Pagination;