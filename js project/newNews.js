
const technology = document.querySelector(".tech");
const science = document.querySelector(".science");
const math = document.querySelector(".math");
const reset = document.querySelector(".reset");
const displayElements = document.querySelector('.displat-contents');

let arr= [];

async function getuser(){
    let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-04&sortBy=publishedAt&apiKey=38da5ebed01c43b2bd8b1f7cbd57498c");
    let data = await response.json();
    return data;
}
getuser().then((data)=>{
   onloadData(displayElements,data.articles);
})
 
 let newNewsbtn = document.querySelector(".oldnewsbtn");



 function onloadData(parentElements,arr){

   console.log("onload");
   for(let news of arr){
     const h2 = document.createElement("h2");
     const div = document.createElement("div");
     div.className= "newsStyle"
     h2.textContent = `By ${news.author}`;
     const p = document.createElement("p");
     p.innerHTML = `${news.content} <a href=${news.url}>Read more....</a>`;
     const btnElements = document.createElement("button");
     btnElements.textContent = "Saved News";
     btnElements.addEventListener("click", function(){
        const localData = JSON.parse(localStorage.getItem("oldnews"));
        console.log("butnclick");
        if(localData && localData.length>0){
           localStorage.push(news);

           localStorage.setItem("oldnews",JSON.stringify(localData));
        }else{
           localStorage.setItem("oldnews",JSON.stringify([news]));
        }
     }) ;
     div.append(h2);
     div.append(p);
     div.append(btnElements);
     parentElements.append(div);
   }
  } 
