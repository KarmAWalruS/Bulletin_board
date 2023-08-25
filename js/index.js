function expandImg(imgs) {
  // Получить развернутое изображение
  var expandImg = document.getElementById("expandedImg");
  // Используйте тот же src в развернутом изображении, что и изображение, нажатое на сетке
  expandImg.src = imgs.src;
  // Показать элемент контейнера (скрытый с помощью CSS)
  expandImg.parentElement.style.display = "block";
}
