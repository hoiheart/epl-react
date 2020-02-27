const staticPath: string = (process.env.NODE_ENV === 'production') ? 'https://epl-react.herokuapp.com/static' : 'http://localhost:3000/static'

export {
  staticPath
}
