
const { prompt } = require('inquirer')
const axios = require('axios')
const { writeFile, appendFile } = require ('fs')
const { promisify } = require('util')

const writeFileSync = promisify(writefile)
const appendFileSync = promisify(appendFile)\\const top = 

writeFileSync('movies.html', top)
    .then(() => )
prompt ([
    {
        type: 'input',
        name: info[i],
        message: 'What is your #1 favorite movie?'
    },
    {
        type: 'input',
        name: info[i],
        message: 'What is your #2 favorite movie?'
    },
    {
        type: 'input',
        name: info[i],
        message: 'What is your #3 favorite movie?'
    }
])
    .then(movies => {
        console.log(movies)
        for (const name in movies) {
            console.log(movies[name])
            axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=3195dc5c'&t=${movies[name]}`)
                .then(({ data })) => {
                    console.log(data)
                }
        }
    })
    .catch(err => console.log(err))
// const axios = require('axios')
// const { writeFile } = require('fs')
// const { promisify } = require('util')
// const writeFileSync = promisify(writeFile)
// const { prompt } = require('inquirer')

// const info = ['title1', 'title2', 'title3']

// let questions = []
// for (let i = 0; i <InputDeviceInfo.length; i++) {
//     questions.push({
//         type: 'input', 
//         name: info[i],
//         message: `Enter one of your favorite movie names: ${info[i]}`
//     })
// }

// axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=3195dc5c')
//     .then(data => {
//         const movies = data.data => {
//             return `
//             <!DOCTYPE html>
//             <html lang="en">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Document</title>
//                 </head>
//                 <body>
//                     <h1>Title: ${data.title}</h1>
//                     <h3>Director: ${data.director}</h3>
//                     <h2>Plot: ${data.plot}</h2>
//                     <h1>Title: ${data.title}</h1>
//                     <h3>Director: ${data.director}</h3>
//                     <h2>Plot: ${data.plot}</h2>
//                     <h1>Title: ${data.title}</h1>
//                     <h3>Director: ${data.director}</h3>
//                     <h2>Plot: ${data.plot}</h2>
//                 </body>
//             </html>
//             `
//         }
//     })
//     .catch(err => console.log(err))

//     prompt(questions)
//         .then(data => writeFileSync('movie.html', movies(data)))
//         .then(() => {
//             console.log('Thanks!')
//         })