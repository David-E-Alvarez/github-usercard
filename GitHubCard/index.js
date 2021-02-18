import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/David-E-Alvarez')
  .then(function(response){
    console.log("response: ", response);
    gitHubUserCard(response)
  })
  .catch(function(error){
    console.log("error--->", error)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubUserCard(object){
  console.log("github user card function object: ", object.data.name)
  const div = document.createElement("div");// <div>
  div.className = "card";//<div class="card">

  const img = document.createElement("img");// <img>
  img.src = object.data.avatar_url // <img src>
  div.appendChild(img);// add img to div

  const div2 = document.createElement("div");//<div>
  div2.className = "card-info";//<div class="card-info"
  div.appendChild(div2)//add div2 to div

  const h3 = document.createElement("h3")
  h3.className = "name"
  const h3_text = document.createTextNode("Name: " + object.data.name)
  div2.appendChild(h3)
  h3.appendChild(h3_text)
  
  const p = document.createElement("p")
  p.className = "username"
  const p_text = document.createTextNode("Username: " + object.data.login)
  div2.appendChild(p)
  p.appendChild(p_text)

  const p2 = document.createElement("p")
  const p2_text = document.createTextNode("Location: " + object.data.location)
  div2.appendChild(p2)
  p2.appendChild(p2_text)

  const p3 = document.createElement("p")
  div2.appendChild(p3)
  const a = document.createElement("a")
  a.href = "https://github.com/David-E-Alvarez"
  const a_text = document.createTextNode("GitHub: " + object.data.html_url)
  a.appendChild(a_text)
  p3.appendChild(a)

  const p4 = document.createElement("p")
  div2.appendChild(p4)
  const p4_text = document.createTextNode("Followers: " + object.data.followers)
  p4.appendChild(p4_text)

  const p5 = document.createElement("p")
  div2.appendChild(p5)
  const p5_text = document.createTextNode("Following: " + object.data.following)
  p5.appendChild(p5_text)

  const p6 = document.createElement("p")
  div2.appendChild(p6)
  const p6_text = document.createTextNode("Bio: " + object.data.bio)
  p6.appendChild(p6_text)




  





  document.body.appendChild(div);
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
