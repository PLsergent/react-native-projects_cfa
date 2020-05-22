const API_TOKEN = "fd3b3b2724dc8f3b535f3bbbc8a66da4"


export async function getMovies(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text + '&page=' + page
  try {
    const response = await fetch(url)
    return await response.json()
  }
  catch (error) {
    return console.log(error)
  }
}

export function getImage(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export async function getMovieDetails(id) {
  const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=en'
  try {
    const response = await fetch(url)
    return await response.json()
  }
  catch (error) {
    return console.log(error)
  }
}
