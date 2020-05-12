// backend API environment variable
export default process.env.NODE_ENV === 'production' ? 'https://prutkowski-backend.herokuapp.com' : 'http://localhost:3001'