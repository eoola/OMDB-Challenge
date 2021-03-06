const apikey = process.env.REACT_APP_API_KEY;

const OMDB = {

    async search(movieName, page) {
        const searchParam = 'spider man'
        const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${movieName}&type=movie&page=${page}`
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
                        img: movie['Poster'] === "N/A" ? 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg' : movie['Poster']
                    }, extraInfo)
                })), totalResults: (response.totalResults)
            }
        }
    },
    getExtraInfo(imdbID) {
        const url = `https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}&type=movie&plot='short'`
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                let response = jsonResponse
                if (response.Genre) {
                    console.log(response.imdbRating);
                    console.log(response.releaseDate);
                    return {
                        imdbRating: response.imdbRating === "N/A" ? "No Ratings Found" : response.imdbRating,
                        releaseDate: response.Released === "N/A" ? "No Release Date Found" : response.Released,
                        runtime: response.Runtime === "N/A" ? "No Runtime Found" : response.Runtime + 'utes',
                        genre: response.Genre === "N/A" ? "No Genre Found" : response.Genre,
                        director: response.Director === "N/A" ? "No Directors found" : response.Director,
                        plot: response.Plot === "N/A" ? 'Plot not found' : response.Plot
                    }
                }
            })
    }
}


export default OMDB;