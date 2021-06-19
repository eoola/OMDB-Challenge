const apiKey = 'e4906035'

const OMDB = {

    async search(movieName, page) {
        console.log('got called');
        const searchParam = 'spider man'
        const url = `http://www.omdbapi.com/?apikey=e4906035&s=${movieName}&type=movie&page=${page}`
        let response = await fetch(url);
        response = await response.json();
        if (response.Search) {
            return {
                movies: await Promise.all(response.Search.map(async movie => {
                    const extraInfo = await this.getExtraInfo(movie.imdbID);
                    return Object.assign({
                        id: movie['imdbID'],
                        title: movie['Title'],
                        year: movie['Year'],
                        img: movie['Poster']
                    }, extraInfo)
                })),
                totalResults: (response.totalResults)
            }
        }
    },
    getExtraInfo(imdbID) {
        const url = `http://www.omdbapi.com/?apikey=e4906035&i=${imdbID}&type=movie&plot='short'`
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                let response = jsonResponse
                if (response.Genre) {
                    return {
                        runtime: response.Runtime,
                        genre: response.Genre,
                        director: response.Director
                    }
                }
            })
    }
}


export default OMDB;