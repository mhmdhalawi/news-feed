import create from 'zustand';

export const useStore = create((set) => ({
  articles: [],
  setArticles: (data) => set(() => ({ articles: data })),
  filteredArticle: [],
  setFilterArticles: (id) =>
    set((state) => ({
      filteredArticle: state.articles.filter((article) => article._id.includes(id)),
    })),
}));
