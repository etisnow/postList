import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function PostList({ posts, title, deletePost }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {posts.length ? title : 'Посты не найдены'}
            </h1>
            <TransitionGroup>
                {posts.map((post, i) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            post={post}
                            number={i + 1}
                            deletePost={deletePost}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
