const { prompt } = require('inquirer')

const info = ['name', 'age', 'email', 'username', 'password', 'address', 'phone number', 'ssn']

let questions = []
for (let i = 0; i < info.length; i++) {
  questions.push({
  type: 'input',
  name: info[i],
  message: `What is your ${info[i]}?`
  })
}

prompt(questions)
  .then(data => {
    console.log(data)
  })
  .catch (err => console.log(err))

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

