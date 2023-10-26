function toggleMode() {
  const html = document.documentElement /*pegar o html e colcoar na variável */
  html.classList.toggle("light") /* nessa linha executa a função se é pag. escura ou clara */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

/*Esta função executa a parte da mudança escuro/claro, clicando no botão
O const html é uma variável, onde o document é a representação do documento em formato de de objeto javascript

O . é quando acessa função e propriedades da tag html, através do documentElement

No html.classList contém todos os elementos light e dark
*/

/* Pegar a tag img
Substituir a img
Se tiver light mode, adicionar img lightmode
Se tiver sem lightmode, mater img fundo amarelo
*/
