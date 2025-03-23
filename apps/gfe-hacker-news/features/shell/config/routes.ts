export const routes = {
  home: () => '/',
  latest: (id: string) => `/latest/${id}`,
  ask: (id: string) => `/ask/${id}`,
  show: (id: string) => `/show/${id}`,
  jobs: (id: string) => `/jobs/${id}`,
};
