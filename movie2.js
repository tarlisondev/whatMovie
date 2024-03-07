
const more = document.querySelector("#more");
const game = document.querySelector("#game");
const banner = document.querySelector("#banner");

const url = "https://image.tmdb.org/t/p/w500/";
const secretKeyApi = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2Y4ODFjMjBkMTNhNTQ1ZWVlZGVkNjNhODIzNGU5YSIsInN1YiI6IjY1MzU0NTNmYzE0ZmVlMDBjNmVlMzk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7xRogEg3YszQi2L6IPPjgzmmNQ2Vuk8oLiFMrJfdPMg";

let page = 1;
const listLyric = [];

const nextPage = async () => {
  page += 1;
  await whatMovie()
};

const whatMovie = async () => {
  const findMovie = await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secretKeyApi}`,
    }
  })

  const { results } = await findMovie.json();
  await pageMain(results)
  return results;
};

const findProduct = async (product) => {
  const oneProduct = Math.floor(Math.random() * product.length);
  return oneProduct;
}

const pageMain = async (results) => {

  results.map(async (product) => {

    const movie = document.createElement('div');
    movie.classList.add('movie');

    const image = document.createElement('img');
    image.src = `${url + product.backdrop_path}`;

    const title = document.createElement('p');
    title.innerText = 'Movie';

    movie.addEventListener("click", async () => {
      await pageGame(product.backdrop_path, product.title)
    });

    movie.appendChild(image);
    movie.appendChild(title);
    banner.appendChild(movie);

  })
}

const pageGame = async (img, title) => {

  const image = document.createElement("img");
  image.src = url + img;

  const option = document.createElement("div");
  option.classList.add('option');

  for (let i = 0; i < title.length; i++) {

    if (title[i] === " ") {

      const field = document.createElement('div');
      field.setAttribute("style", "width: 10px; border: none; background: transparent;");
      option.appendChild(field);

    } else if (title[i] === ":" || title[i] === "!") {

      const field = document.createElement('div');
      field.setAttribute("style", "display: none;");
      option.appendChild(field);

    } else {

      const field = document.createElement('div');
      field.classList.add("field");
      field.setAttribute("id", title[i].toUpperCase() + i);
      option.appendChild(field);

    }
  }

  const lyric = document.createElement('input');
  lyric.setAttribute("type", "text");

  lyric.addEventListener("keyup", ({ key }) => {

    const options = document.querySelectorAll(`.field`);

    options.forEach((item) => {

      const lyric = item.getAttribute("id").split("")[0];

      if (lyric === key.toUpperCase()) {

        const fields = document.querySelector(`#${item.getAttribute("id")}`);
        fields.innerHTML = key.toUpperCase();

      }
    })
  })

  const close = document.createElement('button');
  close.setAttribute("id", "close");
  close.innerText = "X";

  close.addEventListener("click", () => {
    game.innerHTML = "";
    game.style.display = 'none';
  })


  game.appendChild(image);
  game.appendChild(option);
  game.appendChild(lyric);
  game.appendChild(close);

  game.style.display = 'flex';

};

const compareLyric = (item) => {

  console.log(item);

}

more.addEventListener('click', nextPage);

whatMovie();
