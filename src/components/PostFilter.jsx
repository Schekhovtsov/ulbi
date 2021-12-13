import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    return (
        <div className='postsFilter'>
            <div>
                <MyInput placeholder='Поиск'
                         value={filter.query}
                         onChange={e => setFilter({...filter,
                             query: e.target.value})}
                />
            </div>
            <MySelect defaultValue='Сортировка'
                      value={filter.sort}
                      onChange={selectedSort => setFilter({...filter,
                          sort: selectedSort})}
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По описанию'},
                      ]}
            />
            <MySelect value={limit}
                      onChange={value => setLimit(value)}
                      defaultValue='Элементов на странице'
                      options={[
                          {value: 3, name: 3},
                          {value: 5, name: 5},
                          {value: -1, name: 'Показать всё'},
                      ]}
            />
        </div>

    );
};

export default PostFilter;