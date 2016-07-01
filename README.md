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


#### banners

Возвращает список баннеров
```javascript
[
    {
        id: 1,
        label_image: 'swagset-label.png',
        product_image: 'swagset-product.png',
        bg_image: 'swagset-bg.jpg',
        product_id: 1
    }
]
```



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
        count_products: 34, // количество товаров
        products: [ // товары категории, доступен с параметром get_products
            { id: 1, ... },
            ...
        ],
        tags: [
            { tagId: 1, name: "Лёгкая" }
        ]
    }
]
```

Доступные параметры

ключ | описание
---- | -------- 
category_id | поиск по id 
category_alt | поиск по ссылке 
get_products | возвращат категории со списком товаров, доступные поля: `id`, `alt`, `name`, `image_small`, `image_medium`, `image_big`, `price`, `price_old`, `categoryId`, `weight`, `tags`   
get_products_limit | количество продуктов для категории, _доступен только с get_products_ 


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

ключ | описание
---- | -------- 
| product_id | поиск по id |
| product_alt | поиск по ссылке |
| product_limit | количество |
| product_category | пренадлежащие категории |
| shop_id | поиск по магазину |


#### city

Возвращает список городов и регионов

```javascript
{
    city: [
        {
            id: 2,
            name: 'Всеволожск',
            group_id: 1 // группа, если город находится в группе
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
            mode_from: "10-00",
            mode_to: "20-00",
            city_id: 1
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

ключ | описание
---- | -------- 
| shop_id | поиск по id |
| city_id | поиск по городу |


#### journal

Возвращает список анонсов

```javascript
[
    {
        id: 1,
        alt: "open-two-narian-mare",
        name: "Открываем два СушиШопа в Нарьян-Маре",
        descr: "В карю холодных рек ...",
        category: [ 1, 2 ],
        image_medium: "open-two-narian-mare-medium.jpg",
        bg_to: "#000",
        bg_from: "#fff"
    }
]
```

Доступные параметры

ключ | описание
---- | -------- 
| category_id | поиск по категории |
| limit | количество |
| offset | смещение |


#### journal.category

Возвращает список категорий журнала

```javascript
[
    {
        id: 1,
        alt: "recipes",
        name: "Рецепты"
    }
]
```


#### journal.article

Возвращает статью из журнала

```javascript
[
    {
        id: 1,
        alt: "sushi-burito",
        content: "<img src=\"burito.jpg\">...",
        product_id: 1,
        next_article: {
            id: 2,
            alt: "kartofelnye-krokety",
            image_small: "kartofelnye-krokety-small.jpg",
            name: "Картофельные крокеты за 10 минут"
        }
    }
]
```

Доступные параметры

ключ | описание
---- | -------- 
| article_id | поиск по id |
| article_alt | поиск по ссылке |


#### company

Возвращает данные для страницы компании

```javascript
{
    growth: [
        {
            year: 2011,
            diameter: 10, // в пикселях
            count: 5,
            is_forecast: true
        }
    ],
    own_recipes: 80, // процент собственных рецептов
    joined_staff_month: 472, // новопришедших сотрудников,
    initial_investment: 1300000, // первоначальные инвестиции, руб
    average_return: 6, // средняя окупаемость, месяцев
    successful_franchisors: 200 // успешных франчайзиров
}
```


#### vacancies

Возвращает вакансии

```javascript
[
    {
        id: 1,
        name: 'Су-шеф',
        city_id: 1,
        price: 40000,
        price_to: 135,
        price_from: 150,
        price_value: 'ч', // ч, смена,
        recruiter: {
            name: "Иннокентий Христорождественский",
            phone: "+79999876599"
        },
        requirements: [ // Требования
            "опыт работы ..."
        ],
        duties: [ // Обязанности
            "Организация работы ..."
        ],
        conditions: [ // Условия
            "Бесплатное питание"
        ]
    }
]
```

Доступные параметры

ключ | описание
---- | -------- 
| city_id | поиск по городу |


#### success_stories

Выводит список историй успеха

```javascript
[
    {
        id: 1,
        name: "Иннокентий Христорождественский",
        post: "Региональный управляющий",
        in_team: "В команде с октября 2011 г.",
        content: "<p>Пришёл в компанию</p>",
        image_small: "pasha-small.jpg",
        image_big: "pasha-big.jpg"
    }
]
```


#### actions

Выводит список акций

```javascript
[
    {
        id: 1,
        name: "Конкурс фуд-фото в инстаграмме",
        image: "konkurs-foodfooto.jpg"
    }
]
```

Доступные параметры

ключ | описание
---- | -------- 
| city_id | поиск по городу |





#### form

Отправляет форму

```javascript
{
    status: "success" // success, error
}

```

Доступные параметры

ключ | описание
---- | -------- 
| name | название формы (латиницей) |
| value | объект заполненных полей (формата ключ: значение) |





#### order

Оформление заказа

```javascript
{
    status: "success" // success, error,
    order_id: 1234567890,
    pay_link: "https://alfa..." 
}

```


Список продуктов
```javascript
[
    {
        product_id: 1,
        count: 1,
        toppings: [ 1 ],
        sauce_id: 1,
    }
]
```


Доступные параметры

ключ | описание
---- | -------- 
| shop_id | id города |
| products | список продуктов |
| delivery | адрес доставки |
| persons | количество персон |
| phone | телефон |
| cook_time | приготовить ко времени |
| pay_id | id способа оплаты |
| fio |имя |
| phone | телефон |




#### register

Регистрация

```javascript
{
    status: "success" // success, error, phone_used — телефон есть в базе
}

```


Доступные параметры

ключ | описание
---- | -------- 
| fio | имя |
| phone | телефон |



#### register.confirm

Подтверждение регистрации

```javascript
{
    status: "success" // success, error
}

```


Доступные параметры

ключ | описание
---- | -------- 
| code | код подтверждения |


#### auth

Авторизация

```javascript
{
    status: "success" // success, error
}

```


Доступные параметры

ключ | описание
---- | -------- 
| phone | телефон |
| password | пароль |


#### change_password

Смена пароля

```javascript
{
    status: "success" // success, error
}

```


Доступные параметры

ключ | описание
---- | -------- 
| password_old | старый пароль |
| password_new | новый пароль |


#### profile

Профиль

```javascript
{
    name: "Артём Шкуренко",
    phones: [
        "+79992006971",
        "+79002546984"
    ],
    discount: 10 // проценты
}

```


#### order_history

История заказов


```javascript
[
    {
        id: 123456789,
        date: "2015-12-15",
        products: [
            {
                id: 1,
                name: "Спринг-ролл",
                count: 1,
                price: 290,
                toppings: [
                    {
                        id: 1,
                        name: "Огурец"
                    }
                ],
                sauce: {
                    id: 1,
                    name: "Спайси соус"
                },
                bake: true
            }
        ],
        city_id: 1,
        adres: "Шлиссельбургский пр., 46" // для доставки
    }
]
```
