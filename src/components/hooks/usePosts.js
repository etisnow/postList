import { useMemo } from "react";

export function useSortedPosts(posts, sort) {
    const sortedPosts = useMemo(() => {
        let buffer = [...posts];
        if (sort) buffer.sort((a, b) => a[sort].localeCompare(b[sort]));
        return buffer;
    }, [sort, posts])

    return sortedPosts
}

export function usePosts(posts, sort, query) {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        let buffer = [...sortedPosts]
        if (query) buffer = buffer.filter(post => {
            const wholeInfo = Object.values(post).join(' ');
            return wholeInfo.toLowerCase().includes(query.toLowerCase())
        })
        return buffer;
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}