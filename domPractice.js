var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.className = "flex-ctr";

let topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.className = "flex-around";

let topMenuLinks = [];

let showingSubmenu = false;


function menu(arr, menu1) {
  arr.forEach((element) => {
    // created anchor tags
    let newAnchor = document.createElement("a");

    let Ltext = document.createTextNode(element.text)

    newAnchor.appendChild(Ltext);

    newAnchor.href = element.href;
    // created href attributes
    // newAnchor.setAttribute("href", element.href);

   

    menu1.append(newAnchor);
    topMenuLinks.push(newAnchor);
  });
}
menu(menuLinks, topMenuEl);

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

 topMenuEl.addEventListener("click", function(e){
   e.preventDefault();
 

  let textName = e.target;

if(textName.nodeName !== 'A') {

}

//console.log(textName.nodeName);
 })




//   if(
//     text === "about" ||
//     text === "catolog" ||
//     text === "orders" ||
//     text === "account"
//   ) {
//     console.log(text);
//   } else {
//     return;
//   }
//   for (let i of topMenulinks) {
//     i.classList.remove("active");
//   }
//   e.target.classList.add("active");
// })

//    if(topMenuEl.childNodes !== "A"){
//     return topMenuEl.childNodes
//    }

//   console.log(topMenuEl.childNodes); ;
//  })











 
