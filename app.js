const { prompt } = require('inquirer')

const info = ['name', 'age', 'email', 'username', 'password', 'address', 'phone number', 'ssn']
const { writeFile } = require('fs')
const { promisify } = require('util')
const writeFileSync = promisify(writeFile)

let questions = []
for (let i = 0; i < info.length; i++) {
  questions.push({
  type: 'input',
  name: info[i],
  message: `What is your ${info[i]}?`
  })
}

const profile = data => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${data.name}</h1>
        <h2>${data.age}</h2>
        <h3>${data.email}</h3>
        <h4>${data.username}</h4>
        <h5>${data.password}</h5>
        <h6>${data.phone}</h6>
        <h6>${data.address}</h6>
        <h6>${data.ssn}</h6>
    </body>
  </html>
  `
}

prompt(questions)
  .then(data => writeFileSync('profile.html', profile(data)))
  .then (() => {
    console.log('success!')
  })


// This won't work because of the asynchronisity 
// for (let i =0; i< info.length; i++) {
//  prompt({
//    type: 'input',
//    name: info[i],
//    message: `What is your ${info[i]}?`
//  })
//  .then (data => {
//    console.log(data)
//  })
//  .catch(err => console.log(err))
// }


// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'name',
//     message: 'Name:'
//   },
//   {
//     type: 'input',
//     name: 'age',
//     message: 'Age:'
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: 'Email:'
//   },
//   {
//     type: 'input',
//     name: 'username',
//     message: 'Username:'
//   },
//   {
//     type: 'input',
//     name: 'password',
//     message: 'Password:'
//   },
//   {
//     type: 'input',
//     name: 'address',
//     message: 'Address:'
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: 'Phone Number:'
//   },
//   {
//     type: 'input',
//     name: 'ssn',
//     message: 'SSN:'
//   }
// ])
//   .then(data => {
//     console.log(data.example)
//   })
//   .catch(err => console.log(err))

