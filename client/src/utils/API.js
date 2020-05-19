import axios from "axios";

export default {
  booksSearch: (search) => {
    return axios.get("/api/googlebooks", {
      params: { q: `intitle:${search}` },
    });
  },
  getSavedBooks: () => {
    return axios.get("/api/books")
  },
  newSavedBook: (bookData) => {
    return axios.post("/api/books", bookData)
  },
  deleteSavedBook: (id) => {
    return axios.delete("api/books/" + id)
  }
};
