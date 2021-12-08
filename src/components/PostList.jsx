import React from 'react';
import PostItem from './PostItem';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';

const PostList = ({posts, title, remove, selectedSort, sortPosts}) => {

    return (
        <div>
            <h1 className='titleHeader'>{title}</h1>



            <div className='postsManipulatePanel'>
                <div>
                    <MyInput placeholder='Поиск'
                    />
                </div>
                <MySelect defaultValue='Сортировка'
                          value={selectedSort}
                          onChange={sortPosts}
                          options={[
                              {value: 'title', name: 'По названию'},
                              {value: 'body', name: 'По описанию'},
                          ]}
                />
            </div>

            {posts.length
                ? posts.map((post, index) =>
                    <PostItem post={post}
                              number={index + 1}
                              remove={remove}
                              key={post.id}/>)
                : 'Posts not found!'
            }
        </div>
    );
};

export default PostList;