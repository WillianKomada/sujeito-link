// Buscar os links salvos.

export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar um link no localStorage.

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  // Se já tiver um link salvo com algum ID eu não vou deixar duplicar
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    return;
  }

  // Adicionar esse novo link na lista...
  linksStored.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStored));
}

// Deletar algum link salvo.

export async function removeLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@URLShortener", JSON.stringify(myLinks));

  return myLinks;
}
