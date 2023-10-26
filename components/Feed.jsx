"use client"

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt, index) => (
        <PromptCard
          key={prompt.id}
          post={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
    console.log(searchText)
  }
  useEffect(
    () => {
      const fetchPosts = async () => {
        const response = await fetch('/api/prompt')
        const data = await response.json();
        setPost(data)
      }
      console.log(post)
      fetchPosts()
    }, []
  )
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text"
          placeholder="Search for prompts/tags/userName"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={post}
        handleTagClick={() => { }}

      />
    </section>
  )
}

export default Feed
