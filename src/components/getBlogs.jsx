import { baseURL } from "@/app/page";

export const getBlogs = async (page,limit) => {
    try {
      const result = await fetch(`${baseURL}/api/getblog?page=${page}&limit=${limit || ""}`, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, must-revalidate",
        },
      });
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      return result.json();
    } catch (error) {
      console.log(error);
    }
  };