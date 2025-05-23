/** @format */

import React, { useState } from "react";
import usePostStore from "../stores/postStore";

function PostItem({ item }) {
  const actionFetchPost = usePostStore((state) => state.actionFetchPost)
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    topic: item.topic || "",
    content: item.content || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = async (id) => {
    
    try {
      setIsEdit(false);

      await fetch(`http://localhost:8989/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify(input)
      }); 

      actionFetchPost()
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      fetch(`http://localhost:8989/posts/${id}`, {
        method: "DELETE",
      });
      actionFetchPost()
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {isEdit ? (
        <input
          id="topic"
          value={input.topic}
          onChange={handleChange}
          text="text"
          className="px-4 py-2 bg-gray-200 rounded-xl"
        />
      ) : (
        <h1 className="text-3xl">{item.topic}</h1>
      )}

      <p>{item.content}</p>

      {isEdit ? (
        <button onClick={() => handleSave(item.id)}>Save</button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}

      <button onClick={() => handleDelete(item.id)}>Delete</button>

      <hr />
    </div>
  );
}

export default PostItem;
