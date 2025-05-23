import React, { useEffect } from 'react'
import usePostStore from '../stores/postStore'
import PostItem from '../components/PostItem'

function PostPage() {

  const actionFetchPost = usePostStore(state => state.actionFetchPost)
  const posts = usePostStore((state) => state.posts)

  useEffect( () => {
    actionFetchPost()
  } , [] )

  return (
    <div>{posts.map (item => (
        <PostItem key={item.id} item={item} />
    ))}</div>
  )
}

export default PostPage