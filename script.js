const key = `65416aa4`;
const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('.result');

const getMovie = () => {
    let movieName = document.querySelector('input').value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if(movieName.length === 0){
        result.innerHTML = `<h3>Enter Movie Name</h3>`
    }else{
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.imdbRating);
            console.log(data.Rated);
            console.log(data.Year);
            console.log(data.Runtime);
            console.log(data.Plot);
            console.log(data.Actors);
            result.innerHTML =`
            <div class="movie-stats">
                <div class="movie-img">
                    <img src="${data.Poster}" alt="${data.Title}">
                </div>
                <div class="movie-stat">
                    <h2 id="name">${data.Title}</h2>
                    <span id='rating'><i class="fa-solid fa-star"></i> ${data.imdbRating}</span>
                    <div class="time">
                        <p>${data.Rated}</p>
                        <p>${data.Year}</p>
                        <p>${data.Runtime}</p>
                    </div>
                    <div class="categories">
                        <div>${data.Genre.split(",").join('</div><div>')}</div>
                    </div>
                </div>
            </div>
            <div class="movie-desc">
                <div class="plot">
                    <h3>Plot :</h3>
                    <p>${data.Plot}</p>
                </div>
                <div class="cast">
                    <h3>Cast :</h3>
                    <p>${data.Actors}</p>
                </div>
            </div>
            `
        }).catch(() => {
            result.innerHTML = `<h3>Enter Valid Movie Name</h3>`
        });
    };
};


searchBtn.addEventListener('click',getMovie)