

let addBtn = document.getElementById("addPlayer");
let list = document.getElementById("playerlist");

const arr = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lasttName").value;
  let country = document.getElementById("Country").value;
  let score = document.getElementById("score").value;

  if (fname == "" || lname == "" || country == "" || score == "") {
    alert("plese enter value..");
    return;
  }

  let values = {
    name: fname + " " + lname,
    country: country,
    score: parseInt(score),
  };
  arr.push(values);
  arr.sort((a, b) => {
    return b.score - a.score;
  });


  list.innerHTML = " ";
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    let div = document.createElement("div");

    let name = document.createElement("div");
    let place = document.createElement("div");
    let points = document.createElement("div");
    var deletebtn = document.createElement("span");
    let add = document.createElement("button");
    let minus = document.createElement("button");

    div.classList.add("listdiv");
    name.classList.add("listname");
    add.classList.add("btn0");
    minus.classList.add("btn0");
    place.classList.add('place')
    deletebtn.classList.add('deletbtn')


    add.setAttribute("onclick", `addfuction(${index})`);
    minus.setAttribute("onclick", `minusfuction(${index})`);
    // deletebtn.setAttribute("onclick", `deletefuction(${index})`);

    name.innerText = item.name;
    place.innerText = item.country;
    points.innerText = item.score;

    deletebtn.innerText = "❌";
    add.innerText = "➕ 5";
    minus.innerText = "➖ 5";

    div.append(name, place, points, add, minus, deletebtn);

    list.append(div);


    let allbtns = document.querySelectorAll('.deletbtn')
    allbtns.forEach((items,index)=>{
    items.addEventListener('click',()=>{
    items.parentNode.remove();
    arr.splice(index,1);
    console.log('saf');
  })
})

    document.getElementById("firstName").value='';
    document.getElementById("lasttName").value='';
    document.getElementById("Country").value='';
    document.getElementById("score").value='';

    
  }
});


function updatefuction() {
  let list = document.getElementById("playerlist");
  arr.sort((a, b) => {
    return b.score - a.score;
  });

  list.innerHTML = " ";
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    let div = document.createElement("div");

    let name = document.createElement("div");
    let place = document.createElement("div");
    let points = document.createElement("div");
    var deletebtn = document.createElement("span");
    let add = document.createElement("button");
    let minus = document.createElement("button");

  
    div.classList.add("listdiv");
    name.classList.add("listname");
    add.classList.add("btn0");
    minus.classList.add("btn0");
    place.classList.add('place')
    deletebtn.classList.add('deletbtn')

    add.setAttribute("onclick", `addfuction(${index})`);
    minus.setAttribute("onclick", `minusfuction(${index})`);
    // deletebtn.setAttribute("onclick", `deletefuction(${index})`);

    name.innerText = item.name;
    place.innerText = item.country;
    points.innerText = item.score;

    deletebtn.innerText = "❌";
    add.innerText = "➕ 5";
    minus.innerText = "➖ 5";

    div.append(name, place, points, add, minus, deletebtn);

    list.append(div);

  let allbtns = document.querySelectorAll('.deletbtn')
  allbtns.forEach((items,index)=>{
  items.addEventListener('click',()=>{
  items.parentNode.remove();
  arr.splice(index,1);
  console.log('saf');
})
})

    
  }
}

function addfuction(index) {
  arr[index].score += 5;
  updatefuction();
}
function minusfuction(index) {
  arr[index].score -= 5;
  updatefuction();
}
//
