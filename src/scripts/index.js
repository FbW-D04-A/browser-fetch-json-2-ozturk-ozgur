// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import { data } from "./data.js";
// \/ All of your javascript should go here \/
let data2 = JSON.parse(data);
console.log(data2);
let cakes = document.getElementById("cakes");
let biscuits = document.getElementById("biscuits");
let bread = document.getElementById("bread");
cakes.innerHTML = `
    <div class="card m-3 col">
<img src=${data2.cakes[0].image} class="card-img-top img-fluid " style="height:250px">
<div class="card-body "></div>
                <h2>${data2.cakes[0].title}</h2>
                <div class="border-bottom">${data2.cakes[0].author}</div>
                <div style="height:100px">${data2.cakes[0].ingredients}</div>
</div>
</div>
    <div class="card m-3 col">
<img src=${data2.cakes[1].image} class="card-img-top img-fluid" style="height:250px">
<div class="card-body"></div>
                <h2>${data2.cakes[1].title}</h2>
                <div class="border-bottom">${data2.cakes[1].author}</div>
                <div style="height:100px">${data2.cakes[1].ingredients}</div>
</div>
</div>
    <div class="card m-3 w-3 col" >
<img src=${data2.cakes[2].image} class="card-img-top img-fluid" style="height:250px">
<div class="card-body text-align-top text-align-center"></div>
                <h2 class="text-align-top text-align-center">${data2.cakes[2].title}</h2>\n
                <div class="border-bottom">${data2.cakes[2].author}</div>
                <div style="height:100px">${data2.cakes[2].ingredients}</div>
</div>
</div>`;
biscuits.innerHTML = `
    <div class="card w-3 m-3 col">
<img src=${data2.biscuits[0].image} class="card-img-top img-fluid " style="height:250px">
<div class="card-body"></div>
                <h2>${data2.biscuits[0].title}</h2>
                <div class="border-bottom">${data2.cakes[0].author}</div>
                <div style="height:100px">${data2.biscuits[0].ingredients}</div>
</div>
</div>
    <div class="card m-3 col">
<img src=${data2.biscuits[1].image} class="card-img-top img-fluid" style="height:250px">
<div class="card-body"></div>
                <h2>${data2.biscuits[1].title}</h2>
                <div class="border-bottom">${data2.biscuits[1].author}</div>
                <div style="height:100px">${data2.biscuits[1].ingredients}</div>
</div>
</div>
    <div class="card m-3 w-3 col" >
<img src=${data2.biscuits[2].image} class="card-img-top img-fluid" style="height:250px">
<div class="card-body"></div>
                <h2>${data2.biscuits[2].title}</h2>\n
                <div class="border-bottom">${data2.biscuits[2].author}</div>
                <div style="height:100px">${data2.biscuits[2].ingredients}</div>
</div>
</div>`;
bread.innerHTML = `
    <div class="card w-3 m-3 col">
<img src=${data2.bread[0].image} class="card-img-top img-fluid " style="height:250px">
<div class="card-body"></div>
                <h2>${data2.bread[0].title}</h2>
                <div class="border-bottom">${data2.bread[0].author}</div>
                <div style="height:100px">${data2.bread[0].ingredients}</div>
</div>
</div>
    <div class="card m-3 col">
<img src=${data2.bread[1].image} class="card-img-top img-fluid" style="height:250px">
<div class="card-body"></div>
                <h2>${data2.bread[1].title}</h2>
                <div class="border-bottom">${data2.bread[1].author}</div>
                <div style="height:100px">${data2.bread[1].ingredients}</div>
</div>
</div>
    <div class="card m-3 w-3 col" >
<img src=${data2.bread[2].image} class="card-img-top img-fluid" style="height:250px">
<div class="card-body"></div>
                <h2>${data2.bread[2].title}</h2>\n
                <div class="border-bottom">${data2.bread[2].author}</div>
                <div style="height:100px">${data2.bread[2].ingredients}</div>
</div>
</div>`;
