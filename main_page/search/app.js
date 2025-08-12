let defmovies = [
  { id: 1, name: "Inception", year: 2010, img: "https://i.pinimg.com/1200x/47/0d/a0/470da03c158d7b731c65e6284fac61f0.jpg" },
  { id: 2, name: "Interstellar", year: 2014, img: "https://i.pinimg.com/736x/e2/14/76/e214761d0ae3bb432241b5e4dcb491f4.jpg" },
  { id: 3, name: "The Dark Knight", year: 2008, img: "https://i.pinimg.com/1200x/eb/3e/d8/eb3ed8f95b129dbb95d74fa04a2aa3d0.jpg" },
  { id: 4, name: "The Matrix", year: 1999, img: "https://i.pinimg.com/1200x/21/7b/76/217b767c28358ce5aa07ccf614e59d80.jpg" },
  { id: 5, name: "Avengers: Endgame", year: 2019, img: "https://i.pinimg.com/736x/7f/1d/0f/7f1d0fdd5ad51059c540fc62e7acef9c.jpg" },
  { id: 6, name: "Parasite", year: 2019, img: "https://i.pinimg.com/736x/c6/1c/bb/c61cbb9709b44e13d6113ba8ea746a21.jpg" },
  { id: 7, name: "Joker", year: 2019, img: "https://i.pinimg.com/1200x/45/f7/e2/45f7e2cc04fa9a45e5d923db91769e4a.jpg" },
  { id: 8, name: "Titanic", year: 1997, img: "https://i.pinimg.com/736x/01/63/0d/01630dd284778302c2b2d305ba905517.jpg" },
  { id: 9, name: "Gladiator", year: 2000, img: "https://i.pinimg.com/736x/aa/c2/1f/aac21f447b61b07526e8255716873abd.jpg" },
  { id: 10, name: "Avatar", year: 2009, img: "https://i.pinimg.com/736x/26/36/63/263663f0ec713082a74263aabe2467cc.jpg" },
  { id: 11, name: "Black Panther", year: 2018, img: "https://i.pinimg.com/736x/64/bb/69/64bb69f40946c1b47039962b214625f0.jpg" },
  { id: 12, name: "Frozen", year: 2013, img: "https://i.pinimg.com/originals/28/a9/c7/28a9c77ed727247e45694d23ef4ed798.jpg" },
  { id: 13, name: "The Lion King", year: 1994, img: "https://i.pinimg.com/736x/ad/4b/c0/ad4bc053b821ce95fbbb30bee994fc19.jpg" },
  { id: 14, name: "Finding Nemo", year: 2003, img: "https://i.pinimg.com/736x/0f/d3/b2/0fd3b2920beb374b04c5fa799a3f45fa.jpg" },
  { id: 15, name: "Shrek", year: 2001, img: "https://i.pinimg.com/736x/50/f1/55/50f155590bb3399570681bebb7ffb1d6.jpg" },
  { id: 16, name: "Spider-Man: No Way Home", year: 2021, img: "https://i.pinimg.com/1200x/c5/1a/97/c51a977e435a8e48b517af8e802d6ba4.jpg" },
  { id: 17, name: "Doctor Strange", year: 2016, img: "https://i.pinimg.com/736x/91/44/29/914429061105f3809a24f6d66d5e1e14.jpg" },
  { id: 18, name: "The Godfather", year: 1972, img: "https://i.pinimg.com/1200x/f1/3e/12/f13e12c1c43477ef391b4026a7d3eb21.jpg" },
  { id: 19, name: "Pulp Fiction", year: 1994, img: "https://i.pinimg.com/736x/4c/bc/ff/4cbcff53804eddf987fd3a2ad1ae9d94.jpg" },
  { id: 20, name: "Forrest Gump", year: 1994, img: "https://i.pinimg.com/originals/8d/16/cc/8d16ccfc23c79c1da5bb9becbb9834ee.png" }
];
const movies =   JSON.parse(localStorage.getItem("search_for_me")); 
const inner2 = document.querySelector("#inner2");


function renderMovies(arg) {
    inner2.innerHTML = ``;

    try{
    arg.forEach(movie => {
        const { id, name ,year , image} = movie;
        inner2.innerHTML += `
    <div class="show">

                            <div class="showImg">
                                <img width="40" src="../${image}" alt="">
                            </div>
                            
                            <div style="color: #fff;" class="content">

                                <div class="showName">
                                    <h1>${name}</h1>
                                    <p>2024</p>
                                </div>

                                <button onclick="watchMe(${id})" class="play"><i class="fa-regular fa-circle-play"></i></button>
                            </div>



                        </div>
    `
    })
    } catch (error) {
        inner2.innerHTML = `<p style="color: red;">No movies found.</p>`;
    }


}
renderMovies(movies);
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const search = document.querySelector("#search");

const elements = [form, submit]

elements.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
    })
}
)


search.addEventListener("input", () => {     
    
    const findMe = movies.filter(movie => movie.name.toLowerCase().includes(search.value.toLowerCase())); 
    console.log(findMe);
    renderMovies(findMe);
        
    })
    
// document.addEventListener("", (e) => { })
    
function watchMe(id) {
    const to_be_watched = movies.find(movie => movie.id === id);
    console.log(to_be_watched);
    localStorage.setItem("movie", JSON.stringify(to_be_watched));
    location.href = `../watch_movie/index.html`;
}





















