function toggleMode() {
  // mudar fundo
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver ligth mode, adicionar a image ligth
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se tiver sem ligth mode, manter a normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
