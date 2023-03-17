export const host = 'http://localhost:3000';
export const environment = {
  production: true,
  chooseName: {
    get: host + '/chooseName',
  },
  listAuthors: {
    get: host + '/listAuthors',
  },
  blogPost: {
    get: host + '/blogPost',
  },
  featPost: {
    get: host + '/featPost',
  }
};
