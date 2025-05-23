/** @format */

import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { schemaPost } from "../validate/schemaPost";
import * as Yup from 'yup'
import { yupToFormError } from "../validate/yupToFormError";
import axios from "axios";

const initialInput = {
  topic: "",
  content: "",
};

function CreatePostPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
      try {
        e.preventDefault();

         // validate
        await schemaPost.validate(input, {abortEarly:false})
        // console.log("input",input)

        // api
        await fetch("http://localhost:8989/posts", {
          method: "POST",
          body: JSON.stringify(input),
        })

        setInput(initialInput)

      } catch (error) {
        console.log(error)

        if(error instanceof Yup.ValidationError) {
          const err = yupToFormError(error);
          // console.log("err",err)
          setInputError(err)
        }
      }

   

    // alert
  }

  return (
    <div>
      <div className="w-2/5 space-y-4 mx-auto">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <InputForm
            id="topic"
            value={input.topic}
            textInput="Topic"
            handleChange={handleChange}
            error={inputError.topic}
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="content">Content</label>
            <textarea
              value={input.content}
              onChange={handleChange}
              rows={5}
              className="px-4 py-2 bg-gray-200 outline-0 rounded-md"
              placeholder="Enter your Content"
              id="content"></textarea>
            {inputError.content && (
              <small className="text-red-500 text-xs">{inputError.content}</small>
            )}
          </div>

          <button className="w-full py-2 bg-amber-700 text-white hover:underline hover:bg-amber-600 rounded-md cursor-pointer">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePostPage;
