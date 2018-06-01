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
- Products
	- [POST /{storeId}/products/](#postprod)
	- [GET /products](#getprods)
	- [GET /products/{productId}](#getprod)
	- [PUT /products/{productId}](#putprod)


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

- **URL params**

	productId - ID of product
- **Data params**

	None
	
## <a name="putprod">PUT /products/{productId}</a>

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

