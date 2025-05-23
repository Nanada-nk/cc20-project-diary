import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(persist((set) => ({
  posts: [],
  actionFetchPost: async () => {

    try {
      
    const res = await fetch('http://localhost:8989/posts')
    console.log("res===",res)
    const data = await res.json()

    set({ posts: data })
    } catch (error) {
      console.log('error',error)
    }
  },
}),
  {
    name: "post",

  }))

export default usePostStore