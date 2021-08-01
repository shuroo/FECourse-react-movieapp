class MovieModel{

    constructor(movieName, lengthInMins, poster, director, stars){

        this.movieName = movieName;
        this.lengthInMins = lengthInMins;
        this.poster = poster;
        this.director = director;
        this.stars = stars;
        this.key = this.movieName+"_"+this.poster;
    }

    
}

export default MovieModel;