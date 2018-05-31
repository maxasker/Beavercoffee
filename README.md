# Beavercoffee

## POST /[storeId]/employees
- **URL params**

	storeId *(required)*
- **Data params**

	**Required:**
	- current_role

	**JSON:**
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



