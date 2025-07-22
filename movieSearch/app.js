const form = document.querySelector("form");
const imageCont = document.querySelector(".img-container");

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let query = document.querySelector('input').value;
    // console.log(query);
    tvApi(query);
})


async function tvApi (query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    makeImages(movies);
}

function makeImages(movies){
    for (let movie of movies){
        let src = movie.show.image.medium;

        // create element
        const img = document.createElement('img');
        img.src = src;
        imageCont.appendChild(img);
    }
}