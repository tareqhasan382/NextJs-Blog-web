import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: 0,
  setBlog: (total) => set({ blogs: total }),
}));

export default useBlogStore;
// setCatId: (newCatId) => set({ catId: newCatId }),
//const setCatId = useSubCattStore((state) => state.setCatId);
