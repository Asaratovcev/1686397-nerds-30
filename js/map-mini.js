ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.939153953647676,30.321626255625393],zoom:17,controls:[]},{searchControlProvider:"yandex#search"}),o=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),o=new ymaps.Placemark([59.93885248352459,30.323192665690094],{hintContent:"Мы находимся здесь",balloonContent:"Мы находимся здесь",iconContent:""},{iconLayout:"default#imageWithContent",iconImageHref:"img/marker.png",iconImageSize:[231,190],iconImageOffset:[-44,-179],iconContentOffset:[15,15],iconContentLayout:o});e.geoObjects.add(o)});