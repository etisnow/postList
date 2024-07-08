import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/modal/MyModal';
import { usePosts } from './components/hooks/usePosts';
import Loader from './components/UI/loader/Loader';

import './styles/App.css'
import MyButton from './components/UI/button/MyButton';
import PostService from './API/PostService';
import { useFetching } from './components/hooks/useFetching';
import { getPageCount } from './utils/pages.js'
import usePagination from './components/hooks/usePagination.jsx';
import MyPagination from './components/MyPagination.jsx';


function App() {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(1);
	const pagesArray = usePagination(totalPages);

	const [fetchPosts, isPostLoading, fetchError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data])
		const total_count = +response.headers['x-total-count']
		setTotalPages(getPageCount(total_count, limit))
	})

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	useEffect(() => {
		fetchPosts();
	}, [])


	const createNewPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const deletePost = (postNumber) => {
		setPosts(posts.filter(item => item.id !== postNumber))
	}

	return (
		<div className='App'>
			<MyButton onClick={fetchPosts}>Загрузить посты</MyButton>
			<MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>Создать пост</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm createNewPost={createNewPost} posts={posts} />
			</MyModal>
			<hr style={{ margin: '15px 0' }}></hr>
			<PostFilter filter={filter} setFilter={setFilter} />
			{fetchError &&
				<h1>Произошла ошибка {fetchError}</h1>
			}
			{isPostLoading
				? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
				: <>
					<PostList posts={sortedAndSearchedPosts} title='Посты про JS' deletePost={deletePost} />
					<MyPagination totalPages={totalPages} currentPage={page} />
				</>
			}
		</div >
	);
}

export default App;
