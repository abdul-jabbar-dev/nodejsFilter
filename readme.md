
# Note:
## ami 20/9/2022 a 60 mark e submit kori, but unfortunately 21/09/2022 tarikhe practice project er sathe vule  marge kore feli 
so i hope commit gulo  dekhe amar 60 a count hobe!!
![alt text](https://drive.google.com/file/d/1y-kMYK_IjJsvcnVAsXlm6mZn0QA-5Nh-/view?usp=sharing)



## API Reference
### Live link
```http
  https://pink-breakable-seagull.cyclic.app/
```
#### Get items

```http
  GET /tours
```

| Parameter | Type     | Description           |Example |
| :-------- | :------- | :--------------       | :------------------------- |
| `fields`  | `string` | Get spacific fields   |`/tours?fields=name,image` |
| `sort`    | `string` | Get items with sort   |`/tours?sort=price` |
| `limit`   | `number` | Fetch limited items `Defult=5`  |`/tours?limit=4` |
| `page`    | `number` | number of pages `Defult=1`      |`/tours?page=2` |

#### Get Cheapest tours

```http
  GET /tours/cheapest
```

| Parameter | Type     | Description                     |Example |
| :-------- | :------- | :-------------------------------|:--------------- |
| `limit`   | `number` | Fetch limited items `Defult=3`  |`/tours/cheapest?limit=1` |


#### Get Trending tours

```http
  GET /tours/trending
```

| Parameter | Type     | Description                     |Example |
| :-------- | :------- | :-------------------------------|:--------------- |
| `limit`   | `number` | Fetch limited items `Defult=3`  |`/tours/trending?limit=1` |


#### Get single item

```http
  GET /tours/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




