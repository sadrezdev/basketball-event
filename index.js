ymaps.ready(init)
function init() {
  var myMap = new ymaps.Map('header-map', {
    center: [55.767721, 37.647108],
    zoom: 18,
  })

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: 'Point', // тип геометрии - точка
      coordinates: [55.767721, 37.647108], // координаты точки
    },
  })

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject)

  myMap.behaviors
    // Отключаем некоторые включенные по умолчанию поведения:
    // - drag - перемещение карты при нажатой левой кнопки мыши;
    // - rightMouseButtonMagnifier - увеличение области, выделенной
    // правой кнопкой мыши.
    .disable(['drag', 'rightMouseButtonMagnifier'])
    // Включаем измеритель расстояний, активирующийся при
    // щелчке левой кнопкой мыши.
    .enable('ruler')
}
