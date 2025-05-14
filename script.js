const imagens = [
  "3b1bdfeca1513b15f76bb13ed2cff821.jpg",
  "9a33907721508e830345192617edb3ee.jpg",
  "12b4e294ab5675c28ad91b5a4a474ab.jpg",
  "28eee82266c6ecd4d462463f75501a563.jpg",
  "76a6b7fb6e9ec2e9a336c0078b4010f7.jpg",
  "93d35b2f96e7e5bb46f0eb2a893a2235.jpg"
];

const galeria = document.getElementById("galeria");

imagens.forEach(nome => {
  const item = document.createElement("div");
  item.className = "item";

  const img = document.createElement("img");
  img.src = `imagens/${nome}`;
  img.alt = "Imagem da galeria";

  const link = document.createElement("a");
  link.href = `imagens/${nome}`;
  link.download = "";
  link.textContent = "📥 Baixar";

  item.appendChild(img);
  item.appendChild(link);
  galeria.appendChild(item);
});
