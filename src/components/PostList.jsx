import React from 'react';
import PostItem from './PostItem';
import PostFilter from './PostFilter';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const PostList = ({posts, title, remove,
                  filter, setFilter}) => {

    return (
        <div>
            <h1 className='titleHeader'>{title}</h1>

            <PostFilter filter={filter} setFilter={setFilter} />

            {posts.length
                ?   <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem post={post} number={index + 1} remove={remove} />
                        </CSSTransition>
                    )}
                    </TransitionGroup>
                : 'Posts not found!'
            }


        </div>
    );
};

export default PostList;