/* Funcão leia mais (resumo) */
const readMore = () => {
  const seeMore = document.getElementById("see-more");
  const readMore = document.getElementById("read-more");
  const dot = document.getElementById("dot");

  dot.style.display = "none";

  seeMore.style.animation = 'hiddenInfo .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
  readMore.style.animation = 'showInfo .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
  if (seeMore.style.display === "none") {
    seeMore.style.display = "inline";
    readMore.style.display = "none";
  } else {
    seeMore.style.display = "none";
    readMore.style.display = "block";
    readMore.style.opacity = 1;
  }
}

/* Função criar tópicos */
const handleCreateTopics = (id) => {
  const argumentsHeader = document.getElementById('arguments-header');
  const createArgument = document.getElementById('create-arguments');
  const newArgument = document.getElementById('new-argument');
  const divider = document.querySelector('.divider');
  divider.style.display = 'block';
  argumentsHeader.style.display = 'none';
  createArgument.style.display = 'none';
  newArgument.style.display = 'block';

  if (id) {
    const sendElement = document.getElementById('send-element');
    sendElement.style.display = "none";
  }
}

/* Criando nova discussão */
const handleNewArgument = (event) => {
  event.preventDefault();
  const sendElement = document.getElementById('send-element');
  const listArguments = document.getElementById('arguments-list');
  const newArguments = document.getElementById('new-argument');
  const divider = document.querySelector(".divider").style.display = "none";

  const input = document.getElementById('input-subject').value;
  const textarea = document.getElementById('textarea-content').value;

  const conteudo = document.createElement('div');

  conteudo.innerHTML = `
        <div class="card arguments-topics new-element">
          <div id="new-element">
            <div>
            <div class="check"></div>
            <h6 class="topicos-textos">Aguardando feedback dos autores</h6>
            <span>Editar tópico</span>
            </div>
          </div>
          <div class="card-body bg-element">
            <div>
              <h5 class="card-title">${input}</h5>
              <h6 class="card-subtitle">Carlos Henrique Santos</h6>
              <p class="card-text">${textarea}</p>
            </div>
          </div>
        </div>
  `
  listArguments.insertBefore(conteudo, listArguments.children[0])

  newArguments.style.display = 'none';
  sendElement.style.display = 'block';
}
document.getElementById("button-submit").addEventListener(
  'click', handleNewArgument, false
);

/* Função expandir mais informações das discussões */
const handleMoreInfo = (id) => {
  const info = document.getElementById(id);
  if (info.style.display === 'none') {
    info.style.animation = 'showInfo 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    info.style.display = 'block';
  } else {
    info.style.animation = 'hiddenInfo 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    info.style.animation = ' ';
    info.style.display = 'none';
  }
}

const handleLike = () => {
  const likes = document.querySelectorAll('.like');
  const countLikes = document.getElementById(`count-like1`);
  const countLikes2 = document.getElementById(`count-like2`);

  likes.forEach(like => like.addEventListener("click", () => {
    if (likes[0] == like) {
      const isLike = localStorage.getItem(`like1`);
      countLikes.textContent = `${isLike > 0 ? 1 : 2} like`;
      localStorage.setItem(`like1`, isLike > 0 ? 0 : 1);
    } else {
      const isLike = localStorage.getItem(`like2`);
      countLikes2.textContent = `${isLike > 0 ? 4 : 5} likes`;
      localStorage.setItem(`like2`, isLike > 0 ? 0 : 1);
    }
  })
  )
}

const handleShowAsideMenu = () => {
  const asideMenu = document.querySelector('aside');
  const headerMenu = document.querySelector('header');
  const modal = document.querySelector('.modal');

  asideMenu.style.zIndex = 1000;
  headerMenu.style.zIndex = 1;
  asideMenu.style.animation = 'slide 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
  asideMenu.style.display = "block";
  modal.style.display = "block";
}

const handleCloseModal = () => {
  const asideMenu = document.querySelector('aside');
  const modal = document.querySelector('.modal');

  if (window.screen.width <= 670) {
    asideMenu.style.display = "none";
    modal.style.display = "none";

  } else {
    modal.style.display = "none";
  }
}

const handleSelectOption = (event) => {
  if (event.target.classList.length < 2) {
    event.target.classList.add("active");
    event.target.children[0].classList.remove("hidden");
    event.target.children[0].classList.add("activated");
  }

  document.querySelectorAll(".active").forEach(option => {
    if (option != event.target) {
      option.classList.remove("active");
      option.children[0].classList.remove("activated");
      option.children[0].classList.add("hidden");
    }
  })
}

const handleResize = () => {
  const asideMenu = document.querySelector('aside');

  if (window.screen.width > 670) {
    asideMenu.style.display = "block";
  }

  if (window.screen.width <= 670) {
    asideMenu.style.display = "none"
  }

}

document.querySelectorAll(".menu-option").forEach(option => option.addEventListener("click", handleSelectOption))