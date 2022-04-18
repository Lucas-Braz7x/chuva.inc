/* Funcão leia mais (resumo) */
const readMore = () => {
  const seeMore = document.getElementById("see-more");
  const readMore = document.getElementById("read-more");
  const dot = document.getElementById("dot");

  dot.style.display = "none";

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
const handleCreateTopics = () => {
  const argumentsHeader = document.getElementById('arguments-header');
  const createArgument = document.getElementById('create-arguments');
  const newArgument = document.getElementById('new-argument');
  const divider = document.querySelector('.divider');
  divider.style.display = 'block';
  argumentsHeader.style.display = 'none';
  createArgument.style.display = 'none';
  newArgument.style.display = 'block'
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

  console.log(input);
  console.log(textarea);

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

