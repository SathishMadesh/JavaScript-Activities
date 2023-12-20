let movies = [
    {
        name:"Avenger Endgame",
        poster:"http://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster.jpg",
        rating: 8.7
    },
    {
        name:"Justice League",
        poster:"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg",
        rating:7.0
    },
    {
        name:"Avatar",
        poster:"http://3.bp.blogspot.com/-H57vRpipBhs/T92h_GLMFAI/AAAAAAAAAAc/zLYxoSfXv9w/s1600/avatar_movie_poster_final_01.jpg",
        rating:9.0
    },
    {
        name:"Thor Ragnarock",
        poster:"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-thorragnarok.jpg",
        rating:8.5
    },
    {
        name:"Looper",
        poster:"http://graphicdesignjunction.com/wp-content/uploads/2012/05/large/movie-poster-10.jpg",
        rating: 8.0
    },
    {
        name:"The Amazing Spiderman",
        poster:"http://cdn.collider.com/wp-content/uploads/amazing-spider-man-movie-poster.jpg",
        rating:7.5
    },
    {
        name:"1917",
        poster:"https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089",
        rating:8.9
    },
    {
        name:"The Conjuring 2",
        poster:"http://www.horror.land/wp-content/uploads/2016/12/Conjuring_2_Poster.jpg",
        rating: 8.5
    },
]



function searchMovie(){
    let movieName = document.getElementById('search').value;
    
    if(movieName!==""){
        let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase());
        })

        displayMovies(result);
    }
    else if(movieName===""){
        displayMovies(movies);
    }

    
}


function displayMovies(data){

    document.getElementById("movies").innerHTML="";
    
    let htmlString = ``;

    for (let i=0; i<data.length;i++){

        htmlString = htmlString + `
                            <div class="movie">
                                <div class="overly">
                                    
                                    <div class="video">

                                    </div>
                                    <div class="details">
                                        <h1>${data[i].name}</h1>
                                        <h2>IMDB : ${data[i].rating}</h2>
                                    </div>

                                </div>
                                <img class="poster" src="${data[i].poster}" alt="">
                            </div>
                        `;
    }

    document.getElementById("movies").innerHTML = htmlString;

}

displayMovies(movies);







// let movie = document.createElement("div");
//     movie.classList.add("movie");

//     let overlay = document.createElement("div");
//     overlay.classList.add("overlay");
//     let video = document.createElement("div");
//     video.classList.add("video");
//     let details = document.createElement("div");
//     details.classList.add("detailds");
//     let name = document.createElement("h1");
//     let rating = document.createElement("h2");
//     let casting = document.createElement("p");

//     let image = document.createElement("img");
//     image.classList.add("poster");

//     movie.appendChild(overlay);
//     movie.appendChild(image);
//     overlay.appendChild(video);
//     overlay.appendChild(details);
//     details.appendChild(name);
//     details.appendChild(rating);
//     details.appendChild(casting);
    

//     console.log(movie);