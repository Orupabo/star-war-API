// const search = document.querySelector("#search");
// fetch('https://swapi.dev/api/people')
//     .then(Response => {
//         return Response.json();
        
//     })
//     .then(data => {
//         data.forEach(user => {
//         const markup = `<li>${user.name}</li>`;

//         document.querySelector('#userlist').insertAdjacentHTML('beforeend', markup);
//         })
//     })

// const userList = document.querySelector('li');
// const userName = document.getElementById('user-name');
// const userGender = document.getElementById('user-gender');
// const userHeight = document.getElementById('user-height');
// const name = userList.value;

const imageArray = [
  "https://nsabers.com/cdn/shop/articles/opolar_A_super_realistic_scene_of_Luke_Skywalker_holding_his__e21e8637-47d5-413c-b53d-e78c8a275e90_1.png?v=1718860845",
  "https://media.cnn.com/api/v1/images/stellar/prod/231002162004-01-c3po-head-star-wars-auction-restricted.jpg?c=original",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfScnx-t7Xm97Wzk9ngTPLRqAaUQa_Qj__xA&s",
  "https://nsabers.com/cdn/shop/articles/bebec223da75d29d8e03027fd2882262.png?v=1708781179",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAW3We4bzBZ2Y2jnFGjkcmrdmCtcMRhX8gg&s",
  "https://www.starwarsaddicted.it/wp-content/uploads/2022/05/databank_owenlars_01_169_effce0f8.jpeg",
  "https://swrpggm.com/wp-content/uploads/2022/05/Beru-Lars_FE.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=466%2C0%2C888%2C666",
  "https://lumiere-a.akamaihd.net/v1/images/image_157136c7.png?region=0,178,816,459",
  "https://www.liveabout.com/thmb/F5lfgFptU9DNTDCT-xNEtot0lQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg"

]

// fetch('https://swapi.dev/api/people')
//     .then(res => {
//       return res.json();
        
//     })
//     .then(data => {
//         data.results.forEach(user => {
//           const markup = `<li>${user.name}</li>`;

//           document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//           // document.querySelector('ul').innerHTML = `${user.name}`
//           document.querySelector('#username').innerHTML = `${user.name}`;
//           document.querySelector('#height').innerHTML = `${user.height}`;
//           document.querySelector('#gender').innerHTML = `${user.gender}`;

//               // markup.addEventListener('click', () => displayUserDetails(user));
//               // userList.appendChild(markup);
//         });

        
      
//     })
//     .catch(error => console.log(error));

function displayUserDetails() {
  fetch('https://swapi.dev/api/people')
   .then(res => res.json())
   .then((data) => {
    console.log(data.results);
    
    const profile2 = document.querySelector("ul")

    data.results.forEach((user,index) => {
      const imageHTML = `
      <div class="prof" > 
      <img src="${imageArray[index]}" alt="pictures" >
      <h3> ${user.name}</h3>
      <h4> ${user.height} </h4>
      </div>`
      
      profile2.innerHTML += imageHTML
    });
   })
    // userName.textContent = data.username;
    // userGender.textContent = data.gender;
    // userHeight.textContent = data.height;
        
}

displayUserDetails();
