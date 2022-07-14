const axios = require("axios");

const imgContentHtml = document.querySelector(".imgContent");

/* ============ getImg ============ */
const getImgBtn = document.querySelector("#getImg");
function getImg() {
  axios.get("https://api.thecatapi.com/v1/images/search?limit=1").then((res) => {
    const element = document.createElement("div");
    element.innerHTML = "请求成功";
    imgContentHtml.appendChild(element);

    let img = document.createElement("img");
    img.src = res.data[0].url;
    imgContentHtml.appendChild(img);
  });
}

getImgBtn.addEventListener("click", getImg);

/* ============ getContent ============ */

const getCommentsBtn = document.querySelector("#getComments");

function getComments() {
  axios.get("http://jsonplaceholder.typicode.com/posts/2").then((res) => {
    const element = document.createElement("div");
    element.innerHTML = `请求成功-${res.data.title}`;
    imgContentHtml.appendChild(element);
  });
}

getCommentsBtn.addEventListener("click", getComments);

/* ============ getAMBU ============ */
const getAMBUBtn = document.querySelector("#getAMBU");

function getAMBUB() {
  axios.get("https://10.168.1.108/md/bsms").then((res) => {
    console.log(res);
    const element = document.createElement("div");

    element.innerHTML = `AMBU请求成功`;
    imgContentHtml.appendChild(element);
  });
}

getAMBUBtn.addEventListener("click", getAMBUB);
