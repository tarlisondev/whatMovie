
//const token = './key.json';

const banner = document.querySelector('#banner');
const game = document.querySelector('#game');
const more = document.querySelector('#more');

let page = 1;
const titleMovie = [];

const link = 'https://image.tmdb.org/t/p/w500/';

more.addEventListener('click', async () => {
  page += 1;
  await movie();
})

async function movie() {

  const findMovie = await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
      //Authorization: "Bearer " + token,
    }
  })

  const response = await findMovie.json();

  response.results.map((item) => {

    //console.log(item)

    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.setAttribute('id', 'img' + item.id);

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

    const title = document.createElement('h5');
    title.innerText = 'Filme'

    // clicar na imagem
    movie.addEventListener('click', () => {

      const id = movie.getAttribute('id');
      const img = document.querySelector(`#${id} img`).src;
      //console.log(img.src)

      const closeGame = document.createElement('div');
      closeGame.innerText = 'X';
      closeGame.style.position = 'fixed';
      closeGame.style.top = '5%';
      closeGame.style.right = '5%';
      closeGame.style.color = 'red';
      closeGame.style.cursor = 'pointer';
      closeGame.style.fontSize = '20px';

      closeGame.addEventListener('click', () => {
        game.innerHTML = '';
        game.setAttribute('style', 'display: none; ');

        document.querySelector(`#${id} h5`).innerHTML = item.title
        console.log(item.title)
      })

      const image = document.createElement('img');
      image.src = img;

      const option = document.createElement('div');
      option.classList.add('option');



      for (let i = 0; i < item.title.length; i++) {

        const lyricInput = document.createElement('input');
        lyricInput.setAttribute('type', 'text');

        if (item.title[i] === " ") {

          lyricInput.setAttribute('style', ' border: none; width: 8px; background: transparent;');
          //console.log(lyricInput.getAttribute('id'));

        } else if (item.title[i] === ":" || item.title[i] === "!") {
          lyricInput.setAttribute('style', 'display: none;');
        } else {
          lyricInput.setAttribute('id', item.title[i].toUpperCase() + i);
        }



        lyricInput.addEventListener('keyup', () => {
          const lyricInputId = lyricInput.getAttribute('id');
          const lyricInputValue = lyricInput.value.toUpperCase() + i;

          if (lyricInputValue == lyricInputId) {
            lyricInput.setAttribute('style', 'border: 3px solid green;');
            return
          } else {
            lyricInput.setAttribute('style', 'border: 3px solid red');
            lyricInput.value = '';
            return
          }
        })

        option.appendChild(lyricInput);
      }

      game.appendChild(closeGame);
      game.appendChild(image);
      game.appendChild(option);

      //console.log(movie.getAttribute('id'));
      game.setAttribute('style', 'display: flex; ');

    })

    movie.appendChild(image);
    movie.appendChild(title);
    banner.appendChild(movie);

  })
}

movie()