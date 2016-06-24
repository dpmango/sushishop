# Суши Шоп

[Десктопный](https://marvelapp.com/gbf8f0), [планшетный](https://marvelapp.com/h066j6) и [мобильный](https://marvelapp.com/188gedg) прототипы.

## Структура сайта

`/` — Главная страница

`/catalog/` — Редирект на категорию по умолчанию

`/catalog/<category>/` — Список товаров в категории

`/catalog/<category>/<product>/` — Карточка товара

`/i/` — Профиль с настройками

`/i/history` — История заказов

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

`/api/<method>?<parametrs>` — адрес обработки поступающих запросов.

### Список методов

#### catalog

Возвращает список категорий

```javascript
[
    {
        id: 1, // индентификатор категории
        alt: "pizza", // адрес страницы
        name: "Пицца", // название
        image_small: "pizza-small.png", // маленькая картинка
        image_medium: "pizza-big.png", // большая картинка
        countProducts: 34, // количество товаров
        products: [ // товары категории, доступен с параметром get_products
            { id: 1, ... },
            ...
        ],
        tags: [
            { tagId: 1, name: "Лёгкая" },
            ...
        ]
    },
    ...
]
```

Доступные параметры

|---|
| category_id | поиск по id |
| category_alt | поиск по ссылке |
| get_products | возвращат категории со списком товаров, доступные поля: `id`, `alt`, `name`, `image_small`, `image_medium`, `image_big`, `price`, `price_old`, `categoryId`, `weight`, `tags`   |
| get_products_limit | количество продуктов для категории, _доступен только с get_products_ |


#### product

Возвращает список товаров
 
```javascript
[
    {
        "id": 1,
        "name": "Маргарита",
        "alt": "margarita",
        "image_small": "margarita-small.png",
        "image_medium": "margarita-medium.png",
        "image_big": "margarita-big.png",
        "price": 299.1,
        "price_old": 199,
        "category": 1,
        "tags": [ 1, ... ],
        "label": "star", // бейдж, доступны: star, veg, hot, new, discount
        "weight": 500, // вес, в граммах
        "count": 20, // количество эллементов, для наборов
        "part": "Сыр моцарелла, ...", // состав
        "sauce": [ // соусы
            {
                "id": 1,
                "name": "Соевый"
            }
        ],
        "bake": 30,
        "toppings_max": 3, // макс. количество выбранных топпингов
        "toppings": [ // список топингов
            {
                "id": 1,
                "name": "Авокадо",
                "price": 15,
            },
            ...
        ],
        food_value: [ // состав
            {
                "name": "Белки",
                "notation": "г",
                "value": 15,
                "value_max": 108
            },
            ...
        ]
    }
]
```

Доступные параметры

| --- |
| product_id | поиск по id |
| product_alt | поиск по ссылке |
| product_limit | количество |
| product_category | пренадлежащие категории |


#### city

Возвращает список городов и регионов

```javascript
{
    city: [
        {
            id: 2,
            name: 'Всеволожск',
            group_id: 1, // группа, если город находится в группе
            place_id: 'ChIJ_8Y8ln8blkYRSNyeP5aeVmI'
        }
    ],
    groups: [
        {
            id: 1,
            name: 'Ленинградская область'
        }
    ],
    sort: [
        {
            type: 'city',
            id: 1
        },
        {
            type: 'group',
            id: 1
        }
    ]
}
```

#### shops

Возвращает список магазинов и групп

```javascript
{
    shops: [
        {
            id: 1,
            adres: "Невский проспект, 5",
            geo_lat: 40.72,
            geo_lng: -73.96,
            phone: "+79992006971",
            group_id: 1,
            is_new: true,
            is_delivery: true,
            mode_from: "10:00",
            mode_to: "20:00"
        }
    ],
    groups: [
        {
            id: 1,
            name: "Купчино",
            color: "#000"
        }
    ]
}
```

Доступные параметры

| --- |
| shop_id | поиск по id |