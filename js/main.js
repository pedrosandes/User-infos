const URL = 'https://reqres.in/api/users?page=1';

fetch(URL) // Faz uma requisição.
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    createContainer();
    json.data.forEach(({ avatar, first_name, last_name, email, id }) => {
      user(avatar, first_name, last_name);
    });
  })
  .catch(function (err) {
    console.log('Aconteceu um ' + err);
  });

/* User List */
// Cria o elemento "div" com meu "container".
function createContainer() {
  let divElem = document.createElement('div');
  divElem.setAttribute('class', 'container');
  document.body.appendChild(divElem);
  divElem.appendChild(title());
  divElem.appendChild(userList());
}
// Cria o elemento "h1".
function title() {
  let titleElem = document.createElement('h1');
  titleElem.setAttribute('class', 'title');
  titleElem.textContent = 'User List';
  return titleElem;
}

// Cria meu elemento "Ul".
function userList() {
  let ulElem = document.createElement('ul');
  ulElem.setAttribute('class', 'list');
  return ulElem;
}

// Cria o elemento "Li".
function user(img, firstName, lastName) {
  let containerUl = document.querySelector('ul');

  let liElem = document.createElement('li');

  liElem.setAttribute('class', 'list__item');
  containerUl.appendChild(liElem);
  liElem.appendChild(userImg(img));
  liElem.appendChild(userName(firstName, lastName));

  // Ao clicar no li, adiciona o modal
  liElem.addEventListener('click', function createModal() {
    let modalElem = document.createElement('div');
    modalElem.setAttribute('class', 'modal');
    document.body.appendChild(modalElem);
    modalElem.appendChild(userInfo());
    modalElem.appendChild(createUserModalImg(img));
    // Seleciono o botão "close".
    let close = document.querySelector('.close');
    // Remove o modal da tela.
    close.addEventListener('click', () => {
      modalElem.remove();
    });
  });
}

// Cria o elemento "Img".
function userImg(avatarLink) {
  let imgElem = document.createElement('img');
  imgElem.setAttribute('src', avatarLink);
  imgElem.setAttribute('class', 'list__img');
  return imgElem;
}

// Cria o elemento "p".
function userName(firstName, lastName) {
  let pElem = document.createElement('p');
  pElem.setAttribute('class', 'list__text');
  pElem.textContent = `${firstName} ${lastName}`;
  return pElem;
}

/* MODAL */
// Cria uma "div", com meu UserInfo
function userInfo() {
  let infoElem = document.createElement('div');
  infoElem.setAttribute('class', 'user');
  infoElem.appendChild(close());
  return infoElem;
}

function close() {
  let closeElem = document.createElement('i');
  closeElem.setAttribute('class', 'close');
  return closeElem;
}

function createUserModalImg(imgLink) {
  let modalImg = document.createElement('img');
  modalImg.setAttribute('class', 'user__modalImg');
  modalImg.setAttribute('src', imgLink);
  modalImg.setAttribute('alt', 'Avatar image');
  return modalImg;
}

// function userHeader() {
//   let headerElem = document.createElement('div');
//   headerElem.setAttribute('class', 'user__header');
//   return headerElem;
// }
