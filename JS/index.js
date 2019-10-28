let books;

fetch("https://api.myjson.com/bins/1h3vb3", {})
  .then(function(response) {
    return response.json();
  })

  .then(function(data) {
    books = data.books;
    getCovers(books);
  })

  .catch(function(error) {
    console.log(error);
  });
document.addEventListener("keyup", filterBooks, false);

function getCovers(infoBooks) {
  let imgContainer = document.getElementById("imgContainer");
  imgContainer.innerHTML = "";
  for (let i = 0; i < infoBooks.length; i++) {
    let images = document.createElement("img");
    let src = document.createAttribute("src");
    let divContainer = document.createElement("div");
    let divImg = document.createElement("div");
    let divTitle = document.createElement("div");
    let paragraphTitle = document.createElement("h3");
    let paragraphDescription = document.createElement("p");
    let backButton = document.createElement("button");
    let linkphoto = document.createElement("a");
    let href = document.createAttribute("href");
    let dataCaption = document.createAttribute("data-caption");
    let dataFancybox = document.createAttribute("data-fancybox");
    let classTitle = document.createAttribute("class");
    let classImg = document.createAttribute("class");
    let classContainer = document.createAttribute("class");
    src.value = infoBooks[i].portada;
    images.setAttributeNode(src);

    classContainer.value = "flipCardInner";
    backButton.innerHTML = "+Info";
    classImg.value = "front";
    classTitle.value = "back";
    href.value = infoBooks[i].detalle;
    dataFancybox.value = "images";
    dataCaption.value = infoBooks[i].titulo;
    paragraphTitle.innerHTML = infoBooks[i].titulo;
    paragraphDescription.innerHTML = infoBooks[i].descripcion;

    linkphoto.setAttributeNode(href);
    linkphoto.setAttributeNode(dataFancybox, dataCaption);

    divContainer.setAttributeNode(classContainer);
    divTitle.setAttributeNode(classTitle);
    divImg.setAttributeNode(classImg);

    divImg.append(images);
    divTitle.append(paragraphTitle, paragraphDescription, linkphoto);
    linkphoto.append(backButton);
    divContainer.append(divTitle, divImg);
    imgContainer.append(divContainer);
  }
}

function filterBooks() {
  let input = document.getElementById("myInput");
  let filterValue = input.value.toUpperCase();
  let filterArray = [];

  for (let i = 0; i < books.length; i++) {
    let titleValue = books[i].titulo.toUpperCase();

    if (titleValue.includes(filterValue)) {
      filterArray.push(books[i]);
      console.log(titleValue);
    }
  }
  getCovers(filterArray);
}
