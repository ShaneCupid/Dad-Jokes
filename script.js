const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept : 'application/json',
    },
  }
  fetch('https://icanhazdadjoke.com', config)
  .then((res) => res.json())
  .then((data)=> {
jokeEl.innerHTML = data.jokefdf
})
}


















// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept : 'application/json',
//     },
//   }
// //const res = await fetch('https://icanhazdadjoke.com', config)
// const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', config)
//
//
// const data = await res.json()
//
// jokeEl.innerHTML = data.joke
//
// }
