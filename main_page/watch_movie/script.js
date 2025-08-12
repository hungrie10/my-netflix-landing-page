const movie = JSON.parse(localStorage.getItem("movie"));


const title = document.querySelector('#title');
const body = document.querySelector('body');
const descr = document.querySelector('#description');

console.log(movie);

const { name, image, vid, p } = movie;
console.log(p)

title.innerText = name;
body.style.backgroundImage = `url(../${image})`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.height = "100vh";
body.style.width = "100%";
descr.innerText = p;

const home_page = document.querySelector('#home_page');

home_page.addEventListener('click', () => {
    location.href = "../index.html";
})


function loader() {
    document.body.querySelector('main').innerHTML = `
        <div id="loader">
        <div id="loading"></div>
        </div>
`;

}

const playBtn = document.querySelector('#play_btn');

playBtn.addEventListener('click', () => {
    loader();
})