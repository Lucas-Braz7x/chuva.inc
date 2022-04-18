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

