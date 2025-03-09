export const routes = {
  home: () => '/',
  topic: (slug: string) => `/topics/${slug}`,
  photo: (id: string) => `/photos/${id}`,
  search: (slug: string) => `/search/${slug}`,
};
