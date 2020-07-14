function userAuth() {
  event.preventDefault()
  document.getElementById('user-auth').style.display = "none"
  // if login button clicked, log in form displays
  if (event.target.innerText === "Log In") {
    document.querySelector('#user-form').innerHTML = `<form id="login" onsubmit="handleLogin()">
      <input type="text" placeholder="Username" id="userLog">
      <input type="password" placeholder="Password" id="passLog">
      <input type="submit" value="Log In">
    </form>`
  }
  // if sign up button clicked, sign up form displays
  else {
    document.querySelector('#user-form').innerHTML = `<form id="signup" onsubmit="handleSignup()">
      <input type="text" placeholder="Username" id="username">
      <input type="password" placeholder="Password" id="password">
      <input type="submit" value="Sign Up">
    </form>`
  }
}
function handleLogin() {
  event.preventDefault()
  let userLog = {
    username: document.getElementById('userLog').value,
    password: document.getElementById('passLog').value
  }
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(userLog)
  })
  .then(resp => resp.json())
  .then(obj => console.log(obj))
}

// Sends to sessions controller
function handleSignup() {
  event.preventDefault()

  let userSign = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  }
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(userSign)
  })
  .then(resp => resp.json())
  .then(user => console.log(user))
  .catch( err => {
    console.log(err)})
}