const genButton = document.getElementById("generate-btn");
const container = document.getElementById("profile-card");
const photoContainer = document.getElementById("photo");
const userInfo = document.getElementById("user-info");

console.log(container.innerHTML);

let user;

function requestNewProfile() {
  photoContainer.innerHTML = "";
  userInfo.innerHTML = "";

  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((json) => {
      user = json.results;
      // 1: Retrieving and inserting user's photo
      let photo = document.createElement("img");
      photo.src = user[0].picture.large;
      photoContainer.append(photo);

      // 2: Creating User info list
      const name = user[0].name;
      const age = user[0].dob.age;
      const p = document.createElement("p");
      p.classList.add("name");
      p.innerText = name.first + " " + name.last + ", " + age;
      userInfo.append(p);

      const info = document.createElement("ul");
      let li = "";

      const email = user[0].email;
      li = document.createElement("li");
      li.innerText = "Email: " + email;
      info.append(li);

      const phone = user[0].phone;
      li = document.createElement("li");
      li.innerText = "Phone: " + phone;
      info.append(li);

      const city = user[0].location.city;
      const country = user[0].location.country;
      li = document.createElement("li");
      li.innerText = "Address: " + city + " " + country;
      info.append(li);

      // 3: Appending info list to container
      userInfo.append(info);
    });
}

genButton.addEventListener("click", requestNewProfile);
document.addEventListener("DOMContentLoaded", requestNewProfile);
