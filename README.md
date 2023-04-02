# Solution to the test cases

## Sorting Algorithm 1A

`sorting.js` has the code for sorting algorith which has `asciiSort` function implemented using `sort` method of array and checking the ascii code for index 2,1 and 0.  A comparison function is passed to sort, which compares two strings a and b by iterating through their ASCII codes of the third letter first, then the second letter, and finally the first letter.

For each letter, its ASCII code using the charCodeAt() method of the string is obtained then compared the ASCII codes of the current letter for a and b. If they are not equal, a negative number is returned if a should be sorted before b, a positive number if a should be sorted after b, and zero if they are equal.

## SQL Query 2B

`query.sql` The query uses a LEFT JOIN to combine the two tables based on the user_id field. It then uses the GROUP_CONCAT function to group the phone numbers for each person into a comma-separated list. The CONCAT function is used to combine the first_name and last_name fields into a single name column. Finally, the results are sorted by last_name and first_name.

## Get data and save it locally 3A

`dbConnection.js` for Database Connection
`productsTable.js` for creating products table and inserting data
`index.js` for fetching data from API 
