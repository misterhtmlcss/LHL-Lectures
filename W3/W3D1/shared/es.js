// const name = 'Roger'

// function bob(name){
//   // ``, $, {}  => `${whatever variable you wish to interpolate}`
//   return `Hi ${name}`
// }


const name = {
  fname: 'Bob',
  lname: 'Seger',
  email: "bob@seger.com",
  phone: "344-444-5555",
  address: 'bobs house of pain'
}

const name2 = {
  fname: 'Dave',
  lname: 'Shatterkirk'
}


function bob(nameObj){
  const { fname, lname } = nameObj
  return `Hi ${fname} ${lname}`
}

bob(name)


const team = ["G-man", "David", "Enzo", "Andy"]

const [ classmate1, classmate2, ...everyoneElse] = team

const store = {
  storename: '711',
  location: 'Calgary'
}

// store.location = "Edmonton"

const newStore = {
  ...store,
  location: "Edmonton"
}


// const crm = {
//   person,
//   company
// }

const person = {
  // person this individual
  // name
  // email
}

const company = {
  // company specific data as it relates to the person
  // location,
  // address,
  // business line
  // buyer or not buyer
}


// const crm = {
//   ...person,
//   ...company
// }





