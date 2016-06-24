# Суши Шоп

[Десктопный](https://marvelapp.com/gbf8f0), [планшетный](https://marvelapp.com/h066j6) и [мобильный](https://marvelapp.com/188gedg) прототипы.

## Структура сайта

`/` — Главная страница

`/menu/` — Редирект на категорию по умолчанию

`/menu/<category>/` — Список товаров в категории

`/menu/<category>/<product>/` — Карточка товара

`/profile/` — Профиль с настройками

`/profile/history` — История заказов

`/actions/` — Список акций

`/actions/<action>` — Карточка акции

`/journal/` — Список записей в журнале

`/journal/<category>/` — Список записей в журнале по тегу

`/journal/<category>/<article>/` — Карточка записи в журнале

`/shops/` — Список магазинов

`/company/` — Карточка компании

`/career/` — Карточка работы

`/order/` — Оформление заказа


## Апи

`/api/` — адрес обработки поступающих запросов. Ключ ключ апи передаётся в ключ пост-запроса.

Ответом должен быть объект с ключами, например, на запрос `/api/` c ключами `menu`, `product=1` и `product=margarita` должно вернуться:


```javascript
{
	"menu": { ... },
	"product-1": { ... },
	"product-margarita": { ... }
}
```



## Ключи апи


`menu` — список категорий в меню

```javascript
{
	"category": {
		"id": 1,
		"name": "Пицца",
		"alt": "pizza",
		"image-small": "/f/images/category/pizza-small.png", // маленькая 
		"image-medium": "/f/images/category/pizza-medium.png", // средняя
		"count": 24,
		"tags": [
			{
				"id": 1,
				"name": "Что-нибудь острое",
			},
			...
		]
	},
	...
}
```


`menu=<alt|id>` — список товаров в категории

```javascript
{
	"category-<id>": [ 1, ... ],
	"product-1": [ ... ], // см. ключ product=<alt|id>,<alt|id>...
	...
}
```


`product=<alt|id>,<alt|id>...` — информация о товаре

```javascript
{
	"product-<alt|id>": {
		"id": 1,
		"name": "Маргарита",
		"alt": "margarita",
		"image-small": "/f/images/menu/margarita-small.png",
		"image-medium": "/f/images/menu/margarita-medium.png",
		"image-big": "/f/images/menu/margarita-big.png",
		"price": 299.1,
		"oldPrice": 199,
		"category": 1,
		"weight": 500, // в граммах
		"count": 20, // для наборов
		"part": "Сыр моцарелла, ...",
		"sauce": [
			{
				"id": 1,
				"name": "Соевый"
			}
		],
		"bake": 30, // цена запекания, если не указанна, то запекание невозможно
		"toppingsMaxCount": 3, // макс. количество выбранных топпингов
		"toppings": [
			{
				"id": 1,
				"name": "Авокадо",
				"price": 15,
			},
			...
		],
		foodValue: [
			{
				"name": "Белки",
				"notation": "г",
				"value": 15,
				"max": 108
			},
			...
		]
	},
	...
}
```


`banners` — баннеры на главной странице
```javascript
{
	"banners": [
		{
			"productID": 1,
			"bgImage": "/f/images/banners/super-bg.png",
			"productImage": "/f/images/banners/super-product.png",
		},
		...
	],
	"product-1": { ... }
}
```


`banners` — баннеры на главной странице
```javascript
{
	"banners": [
		{
			"productID": 1,
			"bgImage": "/f/images/banners/super-bg.png",
			"productImage": "/f/images/banners/super-product.png",
		},
		...
	],
	"product-1": { ... }
}
```


`city` — список городов
```javascript
{
	"city": [
		{
			'id': 1,
			'name': "Санкт-Петербург и ЛО",
		},
		...
	]
}
```


`city=<id>` — список магазинов в городе
```javascript
{
	"city-1": {
		"groups": [
			{
				"id": 1,
				"name": "Нарвская",
				"color": "#000"
			}
		],
		"shops": [
            {
                "adres": "Старо-Петергофский пр., 52",
                "coord": {
                    "lat": 0.000000,
                    "lng": 0.000000
                },
                "mode": {
                    "to": "10:00",
                    "from": "10:00",
                },
                "phone": "+78127779277",
                "delivery": true,
                "new": true,
                "groups": [ 1, 2, ... ]
            },
            ...
        ]
	}
}
```


`actions` — список акций
```javascript
{
	"actions": [
		{
			"id": 1,
			"name": "Конкурс фуд-фото в Инстаграме",
			"image": "/f/images/actions/food-foto-insta-medium.jpg",
			"alt": "food-foto-insta",
		},
		...
	]
}
```

`actions=<id|alt>` — карточка акции
```javascript
{
	"actions-<alt|id>": {
		"id": 1,
		"name": "Конкурс фуд-фото в Инстаграме",
		"alt": "food-foto-insta",
		"content": "...",
		"image": "/f/images/actions/food-foto-insta-big.jpg",
	}
}
```


`journal` — список статей в журнале.
Доступны модификаторы `journal_tag=<id|alt>` и `journal_limit=<count>`. 
```javascript
{
	"journal": [
		{
			"id": 1,
			"name": "Открываем два сушишопа",
			"descr": "...",
			"alt": "open-two-sushishop",
			"bg": {
				"color": {
					"from": "#000",
					"to": "#fff"
				},
				"image": "/f/images/journal/open-two-sushishop-medium.jpg",
			},
			"tags": [ 1, ... ]
		},
		...
	]
}
```


`journal=<id|alt>,...` — карточка акции
```javascript
{
	"journal-<alt|id>": {
		"id": 1,
		"name": "Конкурс фуд-фото в Инстаграме",
		"alt": "food-foto-insta",
		"content": "...",
		"tags": [ 1, ... ]
	}
}
```


`journal-tags` — список тегов в журнале
```javascript
{
	"journal-tags": [
		{
			"id": 1,
			"name": "Рецепты",
			"alt": "recipes"
		},
		...
	]
}
```


`company` — страница компании
```javascript
{
	"company": [
		"growth": [ 
			{
				"year": 2011,
				"count": 0,
				"diameter": 10,
				"forecast": true
			},
			...
		],
		"ownRecipes": 80, // процентов собственных рецептов
		"employeesPerMonth": 472 // количество новых сотрудников в месяц,
		"opening": {
			"invest": 1300000,
			"payback": 6,
			"success": 200
		}
	]
}
```


`feedback=<json>` — отправка отзыва
Передаём в `<json>`:
```javascript
{
	"name": "Шкуренко Артём Игоревич",
	"phone": "+79992006971",
	"email": "artshkurenko@ya.ru",
	"images": [ ... ],
	"story": "...",
	"shopId": 1 
}
```
Получаем:
```javascript
{
	"feedback": {
		"status": "ok" // ok, error
	}
}
```


`reg=<json>` — регистрация
Передаём в `<json>`:
```javascript
{
	"name": "Шкуренко Артём Игоревич",
	"phone": "+79992006971"
}
```
Получаем в `<json>`:
```javascript
{
	"reg": {
		"status": "ok" // ok, error
	}
}
```


`reg-confirm=<code>` — подтверждение регистрации по коду из смс
```javascript
{
	"reg-confirm": {
		"status": "ok" // ok, error
	}
}
```


`reg-confirm-repeat` — запросить код подтверждение регистрации ещё раз
```javascript
{
	"reg-confirm-repeat": {
		"status": "ok" // ok, error
	}
}
```