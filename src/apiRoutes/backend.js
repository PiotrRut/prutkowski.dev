// When in production, use the remote backend, otherwise local dev server
export default process.env.NODE_ENV === 'production'
  ? 'https://prutkowski-backend.herokuapp.com'
  : 'http://localhost:3001';
