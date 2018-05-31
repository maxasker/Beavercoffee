# Beavercoffee

## POST /[storeId]/employees
Adds a new employee
- **URL params**

	storeId *(required)*
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

	employeeId *(required)*
- **Data params**

	None

## PUT /employees/[employeeId]
Updates an employee

- **URL params**

	employeeId *(required)*
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
	

