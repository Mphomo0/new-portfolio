import itunes from '/public/images/itunes.jpg'
import shopix from '/public/images/shopix.jpg'
import todo from '/public/images/todo.jpg'
import hangman from '/public/images/hangman.jpg'

export const projectsData = [
  {
    id: 1,
    name: 'Shopix Online Shop',
    description: 'Ecommerce Web Application built with the MERN Stack..',
    live: 'https://shopix-ilxf.onrender.com',
    github: 'https://github.com/Mphomo0/shopix',
    image: shopix,
  },
  {
    id: 2,
    name: 'Hangman Game',
    description:
      'A guessing game where you have to guess a word by suggesting letters,',
    live: 'https://hangmanbympho.netlify.app/',
    github: 'https://github.com/Mphomo0/hangman-game',
    image: hangman,
  },
  {
    id: 3,
    name: 'Todo APP',
    description: 'MERN Stack Todo App that store a JWT in a http-only cookie.',
    live: 'https://mern-todo-52f9.onrender.com/',
    github: 'https://github.com/Mphomo0/mern-stack-task-app',
    image: todo,
  },
  {
    id: 4,
    name: 'Itunes Search API',
    description:
      'My team and I developed a newspaper management dashboard application called',
    live: 'https://mpho-search-api.onrender.com',
    github: 'https://github.com/Mphomo0/my_itunes_api',
    image: itunes,
  },
]
