# Beavercoffee
# Endpoints
- Employees
	- [POST /{storeId}/employees](#postemp)
	- [GET /employees](#getemps)
	- [GET /employees/{employeeId}](#getemp)
	- [PUT /employees/{employeeId}](#putemp)
	- [POST /employees/comments/{employeeId}](#postcomm)
	- [GET /employees/comments/{employeeId}](#getcomm)


## <a name="postemp">POST /{storeId}/employees</a>
Adds a new employee
- **URL params**

	storeId - ID of store
- **Data params**

	**Required:**
	- current_role

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

	**Required:**
	- text
	
	**Body:**
	```javascript
	{
		"date": Date,
		"text": String, 
		"author": String (employeeId)
  	}	
	```
	
## GET <a name="getcomm">/employees/comments/{employeeId}</a>
Returns all comments about an employee

- **URL params**

	employeeId - ID of employee
- **Data params**

	None
	

