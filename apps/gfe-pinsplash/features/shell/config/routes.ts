export const routes = {
  home: () => '/',
  topic: (slug: string) => `/topics/${slug}`,
  photo: (id: string) => `/photos/${id}`,
};
