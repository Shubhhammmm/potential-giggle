const savedBtn = document.querySelector(".news-button");
const displayElements = document.querySelector(".old-save-news");

savedBtn.addEventListener("click",function(){
    const news = JSON.parse(localStorage.getItem("oldnews"))
    console.log("news from local "+news);
    if(news && news.length>0){
        for(let newsContent of news){
            const name = document.createElement("h2");
            name.textContent = `By ${newsContent.author}`;
            const p = document.createElement("p");
            p.textContent = `${newsContent.content} <a href=${newsContent.url}>Read More...</a>`;
            
            displayElements.append(name);
            displayElements.append(p);
             
        }
    }else{
        const paraElement = document.createElement("p");
        paraElement.textContent = "No news available";
        displayElements.append(paraElement);
    }
})

