import React from 'react';
import {getPagesArray} from '../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {

    // Сделать так, чтобы массив не пересчитывался при каждом
    // рендере, а только тогда, когда пересчитывается общее
    // количество страниц (useMemo) - сделать хук usePagination
    const pagesArray = getPagesArray(totalPages);

    return (
        <div className='paginationButton'>
            { pagesArray.map(p =>
                <span key={p}
                      className={page === p ? 'active' : ''}
                      onClick={() => {
                          changePage(p)
                      }}
                >
                        {p}
                    </span>
            ) }
        </div>
    );
};

export default Pagination;