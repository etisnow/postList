import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

export default function PostForm({ createNewPost, posts }) {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (event) => {
        event.preventDefault();
        const ids = posts.map(post => post.id);
        let max_id = Math.max.apply(null, ids);
        createNewPost({ ...post, id: ++max_id })
        setPost({ title: '', body: '' });
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder='Название поста'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder='Описание поста'
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}
