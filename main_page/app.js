const innerMovies = document.getElementById("innerMovies");
const main_con3tent = document.getElementById("main_cont3nt");
const inner_main = document.getElementById("inner_main");

innerMovies.innerHTML = ``;

async function getMovies() {
    const res = await fetch("data.json"); // Replace with your API endpoint
  
    

    const data = await res.json();
    
    return(data);

  
}

let movieData = [];
document.addEventListener("DOMContentLoaded", async () => {

    movieData = await getMovies();

    localStorage.setItem("search_for_me", JSON.stringify(movieData));

    console.log(JSON.parse(localStorage.getItem("search_for_me")));
    
    innerMovies.innerHTML = movieData.map((movie) => {
        const {id, name, image, vid, year} = movie;
        return `
                   
                              <div class="movie_card">
                                    <div class="movie_img">
                                        <img src="${image}" alt="">
                                </div>

                                    <div class="movie_dets">
                                        <h3 style="font-family: sans-serif;">${name}</h3>

                                        <div class="options">
                                            <button onclick="save_my_vid(${id})">+</button>
                                            <button onclick="watch_now(${id})">watch</button>
                                        </div>
                                    </div>

                                </div>                        
                                

        `
    }
    ).join("");


    
})


let array_dummy = [];
function watch_now(arg) {
    let movie = movieData.find((movie) => movie.id == arg);
    console.log(movie);
    const { id, name, image, vid } = movie;
    
    inner_main.style.backgroundImage = `url(${image})`;
    inner_main.style.backgroundSize = "cover";
    inner_main.style.backgroundPosition = "center";
    inner_main.style.borderRadius = "0.5rem";
    inner_main.style.position = "relative";
    inner_main.style.width = "90%";
    inner_main.style.height = "40vh";

    localStorage.setItem("movie", JSON.stringify(movie));
//    console.log();
   
    
    main_con3tent.innerHTML = `
            <h1>${name}</h1>

                        <div id="main_controls">
                            <button id="main_wishlist">Wishlist</button>
                            <button onclick="my_cinema()" id="main_watch">Watch Now</button>
                        </div>
    `   
    
}



function my_cinema() {
    location.href = "./watch_movie/index.html";
}






let watch_already = []

function save_my_vid(arg) {
     // Find a video based on the id of the selected object
    const search_for_vids = movieData.find(i => i.id == arg)
    // console.log(search_for_vids);
    ;


    
    
    if (watch_already.find((i) => i.id == id)) {
        ''
    }
    else {
        watch_already.push(search_for_vids);
        console.log(watch_already);
        localStorage.setItem('watch_already', JSON.stringify(watch_already));
        console.log(JSON.parse(localStorage.getItem('watch_already')));
    }
}













