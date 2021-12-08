import React from 'react';
import PostItem from './PostItem';
import PostFilter from './PostFilter';

const PostList = ({posts, title, remove,
                  filter, setFilter}) => {

    return (
        <div>
            <h1 className='titleHeader'>{title}</h1>

            <PostFilter filter={filter} setFilter={setFilter}/>

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