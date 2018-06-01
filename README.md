# Beavercoffee

## POST /[storeId]/employees
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
## GET /employees
Returs all employees
- **URL params**

	None
- **Data params**

	None

## GET /employees/[employeeId]
Returns a single employee

- **URL params**

	employeeId - ID of employee
- **Data params**

	None

## PUT /employees/[employeeId]
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
	
## POST /employees/comments/[employeeId]
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
		"text": String, *(required)*
		"author": String (employeeId)
  	}	
	```

