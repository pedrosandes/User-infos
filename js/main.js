const URL = 'https://reqres.in/api/users?page=1';

fetch(URL) // Faz uma requisição.
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    createContainer();
    json.data.forEach(({ avatar, first_name, last_name, email, id }) => {
      createUser(avatar, first_name, last_name, email, id);
    });
  })
  .catch(function (err) {
    console.log('Aconteceu um ' + err);
  });

/* -------------- User list ---------------*/
// Cria o elemento "div" com meu "container".
function createContainer() {
  let divElem = document.createElement('div');
  divElem.setAttribute('class', 'container');
  document.body.appendChild(divElem);
  divElem.appendChild(createTitle());
  divElem.appendChild(createUserList());
}
// Cria o elemento "h1".
function createTitle() {
  let titleElem = document.createElement('h1');
  titleElem.setAttribute('class', 'title');
  titleElem.textContent = 'User List';
  return titleElem;
}

// Cria meu elemento "Ul".
function createUserList() {
  let ulElem = document.createElement('ul');
  ulElem.setAttribute('class', 'list');
  return ulElem;
}

// Cria o elemento "Li".
function createUser(img, firstName, lastName, email, id) {
  let containerUl = document.querySelector('ul');

  let liElem = document.createElement('li');

  liElem.setAttribute('class', 'list__item');
  containerUl.appendChild(liElem);
  liElem.appendChild(createUserImg(img));
  liElem.appendChild(createUserName(firstName, lastName));

  // Ao clicar no li, adiciona o modal
  liElem.addEventListener('click', function createModal() {
    let modalElem = document.createElement('div');
    modalElem.setAttribute('class', 'modal');
    document.body.appendChild(modalElem);
    modalElem.appendChild(createUserInfo(img, firstName, lastName, email, id));
    // Seleciono o botão "close".
    let close = document.querySelector('.close');
    // Remove o modal da tela.
    close.addEventListener('click', () => {
      modalElem.remove();
    });
  });
}

// Cria o elemento "Img", com o imagem do avatar da pessoa
function createUserImg(avatarLink) {
  let imgElem = document.createElement('img');
  imgElem.setAttribute('src', avatarLink);
  imgElem.setAttribute('class', 'list__img');
  return imgElem;
}

// Cria o elemento "p", com o nome da pessoa.
function createUserName(firstName, lastName) {
  let pElem = document.createElement('p');
  pElem.setAttribute('class', 'list__text');
  pElem.textContent = `${firstName} ${lastName}`;
  return pElem;
}

/* -------------- MODAL ---------------*/
// Cria um elemento "div", com meu UserInfo
function createUserInfo(img, firstName, lastName, email, id) {
  let infoElem = document.createElement('div');
  infoElem.setAttribute('class', 'user');
  infoElem.appendChild(createCloseButton());
  infoElem.appendChild(createUserModalImg(img));
  infoElem.appendChild(createBoxText(firstName, lastName, email, id));
  return infoElem;
}
// Cria um elemento "i", que é um botão.
function createCloseButton() {
  let closeElem = document.createElement('i');
  closeElem.setAttribute('class', 'close');
  return closeElem;
}

// Cria um elemento "img", com a imagem do avatar da pessoa,
function createUserModalImg(imgLink) {
  let modalImg = document.createElement('img');
  modalImg.setAttribute('class', 'user__modalImg');
  modalImg.setAttribute('src', imgLink);
  modalImg.setAttribute('alt', 'Avatar image');
  return modalImg;
}
// Cria um elemento "div", com os textos dentro.
function createBoxText(firstName, lastName, email, id) {
  let boxTextElem = document.createElement('div');
  boxTextElem.setAttribute('class', 'user__modalBoxText');
  boxTextElem.appendChild(createUserModalFullName(firstName, lastName));
  boxTextElem.appendChild(createUserModalEmail(email));
  boxTextElem.appendChild(createUserModalID(id));
  return boxTextElem;
}

// Cria um elemento "p" com o nome completo.
function createUserModalFullName(firstName, lastName) {
  let pElem = document.createElement('p');
  pElem.setAttribute('class', 'user__modalText');
  pElem.textContent = `Nome: ${firstName} ${lastName}`;
  return pElem;
}

// Cria um elemento "p", com o ID da pessoa.
function createUserModalID(id) {
  let pElem = document.createElement('p');
  pElem.setAttribute('class', 'user__modalText');
  pElem.textContent = `ID: ${id}`;
  return pElem;
}

// Cria um elemento "p", com o Email da pessoa.
function createUserModalEmail(email) {
  let pElem = document.createElement('p');
  pElem.setAttribute('class', 'user__modalText');
  pElem.textContent = `Email: ${email}`;
  return pElem;
}
