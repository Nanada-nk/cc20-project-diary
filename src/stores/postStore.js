import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePostStore = create(persist((set) => ({
  posts: [],
  // ดึงข้อมูล จาก หน้า post,create ด้วย method post,put,delete
  // ผ่าน http://localhost:8989/posts เรียก api data
  // มาโพส บนหน้า เพจ website
  // ดังนั้นหน้านี้ มีแค่คำว่า fetch ก็เข้าใจได้ว่า มันคือ method get โดยไม่ต้องระบุเหมือน method อื่นๆ
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