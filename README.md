# Beavercoffee
# Endpoints
- Stores
	- [POST /store](#poststore)
	- [GET /store](#getstores)
	- [GET /store/{storeId}](#getstore)
- Employees
	- [POST /{storeId}/employees](#postemp)
	- [GET /employees](#getemps)
	- [GET /employees/{employeeId}](#getemp)
	- [PUT /employees/{employeeId}](#putemp)
	- [POST /employees/{employeeId}/comments](#postcomm)
	- [GET /employees/{employeeId}/comments](#getcomm)
- Customers
	- [POST /customer](#postcust)
	- [GET /customer/{customerId}](#getcust)
	- [PUT /customer/{customerId}](#putcust)
	- [PUT /customer/{customerId}/beverages](#putbev)
- Products
	- [POST /{storeId}/products/](#postprod)
	- [GET /products](#getprods)
	- [GET /products/{productId}](#getprod)
	- [PUT /products/{productId}](#putprod)
- Menu
	- [POST /{storeId}/menu](#postmenu)
- Orders
	- [POST /{storeId}/orders](#postord)
	- [GET /orders/{orderId}](#getord)
- Reports
	- [POST /report/employees](#emprep)
	- [POST /report/orders](#ordrep)


## <a name="poststore">POST /store</a>
Create a new store

- **URL params**

	None
- **Data params**

	Required: name
	
	**Request body:**
	```javascript
	{
		"name": String,
		"location": {
    			"street": String,
    			"city": String,
    			"country": String,
    			"zipcode": Number
		}	
  	}	
	```
	
## <a name="getstores">GET /store</a>
Return all stores

- **URL params**

	None
- **Data params**

	None
	
## <a name="getstore">GET /store/{storeId}</a>
Return one store

- **URL params**

	- storeid - ID of store
- **Data params**

	None
	
## <a name="postemp">POST /{storeId}/employees</a>
Adds a new employee
- **URL params**

	storeId - ID of store
- **Data params**

	Required: current_role

	**Request body:**
	```javascript
	{
		"current_role": String,
		"name": String,
		"social_security": Number,
		"address": {
    			"street_name": String,
    			"city": String,
    			"country": String,
    			"zipcode": Number
		},
		"perc_fulltime": Number	
  	}	
	```	
## <a name="getemps">GET /employees</a>
Returs all employees
- **URL params**

	None
- **Data params**

	None

## <a name="getemp">GET /employees/{employeeId}</a>
Returns a single employee

- **URL params**

	employeeId - ID of employee
- **Data params**

	None

## <a name="putemp">PUT /employees/{employeeId}</a>
Updates an employee

- **URL params**

	employeeId - ID of employee
- **Data params**

	**Body:**
	 ```javascript
        {       
                "current_role": String,
                "name": String,
                "social_security": Number,
                "address": {
                        "street_name": String,
                        "city": String,
                        "country": String,
                        "zipcode": Number
                },
                "perc_fulltime": Number
        }
        ```	
	
## <a name="postcomm">POST /employees/comments/{employeeId}</a>
Post a comment about an employee

- **URL params**

	employeeId - ID of employee
- **Data params**

	Required: text
	
	**Body:**
	```javascript
	{
		"date": Date,
		"text": String, 
		"author": String (employeeId)
  	}	
	```
	
## <a name="getcomm">GET /employees/comments/{employeeId}</a>
Returns all comments about an employee

- **URL params**

	employeeId - ID of employee
- **Data params**

	None
	
## <a name="postcust">POST /customer</a>
Creates a new customer

- **URL params**

	None
	
- **Data params**

	Required: None
	
	**Body:**
	```javascript
	{
		"barcode": Number,
		"name": String, 
		"social_security": Number,
		"occupation": String,
  		"is_employee": Boolean,
  		"country": String,
  		"beverages": Number,
		"address": {
                        "street_name": String,
                        "city": String,
                        "country": String,
                        "zipcode": Number
                },
		"member_since": Date
  	}	
	```
## <a name="getcust">GET /customer/{customerId}</a>
Returns a single customer

- **URL params**
	
	customerId - ID of customer
- **Data params**

	None

## <a name="putcust">PUT /customer/{customerId}</a>
Updates a customer

- **URL params**

	customerId - ID of customer
	
- **Data params**

	Required: None
	
	**Body:**
	```javascript
	{
		"barcode": Number,
		"name": String, 
		"social_security": Number,
		"occupation": String,
  		"is_employee": Boolean,
  		"country": String,
  		"beverages": Number,
		"address": {
                        "street_name": String,
                        "city": String,
                        "country": String,
                        "zipcode": Number
                },
		"member_since": Date
  	}	
	```
	
## <a name="putbev">PUT /customer/{customerId}/beverages</a>
Add beverages to customer

- **URL params**

	customerId - ID of customer
	
- **Data params**

	Required: beverages
	
	**Body:**
	```javascript
	{
  		"beverages": Number
  	}	
	```

## <a name="postprod">POST /{storeId}/products/</a>
Creates a new product

- **URL params**

	storeId - ID of store
	
- **Data params**

	Required: None
	
	**Body:**
	```javascript
	{
		"name": String, 
		"quantity": {
                        "metric": String,
                        "total_amount": Number,
                        "pkg_amount": Number
                }
  	}	
	```

## <a name="getprods">GET /products</a>
Returns all products

- **URL params**

	None
- **Data params**

	None
	
## <a name="getprod">GET /products/{productId}</a>
Returns a single product

- **URL params**

	productId - ID of product
- **Data params**

	None
	
## <a name="putprod">PUT /products/{productId}</a>
Updates a product

- **URL params**

	productId - ID of product
- **Data params**

	Required: None
	
	**Body:**
	```javascript
	{
		"name": String, 
		"quantity": {
                        "metric": String,
                        "total_amount": Number,
                        "pkg_amount": Number
                }
  	}	
	```

## <a name="postmenu">POST /{storeId/menu</a>
Creates a new menu item

- **URL params**

	storeId - ID of store
	
- **Data params**

	Required: None
	
	**Body:**
	```javascript
	{
  		"name": String,
 		"price": Number,
  		"ingredients": [{
    			"product": String, (productId)
    			"amount": Number,
    			"metric": String
		}]
  	}	
	```
## <a name="postord">POST /{storeId}/orders</a>
Creates a new order

- **URL params**

	storeId - ID of store
	
- **Data params**

	Required: None
	
	**Body:**
	```javascript
	{
		"employeeId": String,
		"customer_id": String,
		"date": Date,
		"items": [{
			"_id": String, (menuItemId)
                       	"quantity": Number
                }]
  	}	
	```
	
## <a name="getord">GET /orders/{orderId}</a>
Returns a single order

- **URL params**

	orderId - ID of order
	
- **Data params**

	None
	
## <a name="emprep">POST /report/employees</a>
Returns a list of all employees who've worked between the provided dates

- **URL params**

	None
	
- **Data params**

	Required:
		start_year
		start_month
		start_day
		end_year
		end_month
		end_day
	
	**Body:**
	```javascript
	{
		"start_year": Number,
		"start_month": Number,
		"start_day": Number,
		"end_year": Number,
		"end_month": Number,
		"end_day": Number
  	}	
	```
	
## <a name="ordrep">POST /report/orders</a>
Returns a list of all orders made between the provided dates. If an employee is provided in the request body only orders handled by that employee is returned.

- **URL params**

	None
	
- **Data params**

	Required:
		start_year
		start_month
		start_day
		end_year
		end_month
		end_day
	
	**Body:**
	```javascript
	{
		"start_year": Number,
		"start_month": Number,
		"start_day": Number,
		"end_year": Number,
		"end_month": Number,
		"end_day": Number,
		"employee": String (employeeId)
  	}	
	```
