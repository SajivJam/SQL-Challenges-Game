var question=new Array(); 

var answer=new Array(); 

question[1] = 'SQL Select:<br>Which word is the missing statement to get all the columns from the Customers table:<br><br>___ * FROM Customers;';
answer[1]=new Array();
answer[1][1] = 'SELECT';
answer[1][2] = 'JOIN';
answer[1][3] = 'UNION';
answer[1][4] = 'NULL';
answer[1][5] = 'DB';

question[2] = 'SQL Select:<br>Which of these will select the CITY column from the CUSTOMERS table?<br><br>__p __ __ CUSTOMERS;';
answer[2]=new Array();
answer[2][1] = 'SELECT CITY FROM';
answer[2][2] = 'CHOOSE CITY FROM';
answer[2][3] = 'JOIN CITY TO';
answer[2][4] = 'INSERT CITY TO';
answer[2][5] = 'None';

question[3] = 'SQL Select:<br>Which of the following would select different values from COUNTRY column in the CUSTOMERS table?<br><br>__ __ Country FROM Customers;';
answer[3]=new Array();
answer[3][1] = 'SELECT DISTINCT';
answer[3][2] = 'SELECT DIFFERENT';
answer[3][3] = 'JOIN DIFFERENT';
answer[3][4] = 'JOIN DISTINCT';
answer[3][5] = 'ORDER DIFFERENT';

question[4] = 'SQL Where:<br>Which of the following records show where the city column has the value "Berlin"?<br><br>SELECT * FROM customers<br>__ __ = __;';
answer[4]=new Array();
answer[4][1] = 'WHERE CITY BERLIN';
answer[4][2] = 'HOW BERLIN ITALY';
answer[4][3] = 'I AM BERLIN';
answer[4][4] = 'JOIN BERLIN TO';
answer[4][5] = 'ORDER BERLIN NOW';

question[5] = 'SQL Where:<br>Which of the following NOT keywords will be used to select all records where city is NOT "Berlin"?<br><br>SELECT * FROM customers<br>__ = `__`;';
answer[5]=new Array();
answer[5][1] = 'WHERE NOT CITY BERLIN';
answer[5][2] = 'HOW  NOT BERLIN ITALY';
answer[5][3] = 'I AM NOT BERLIN';
answer[5][4] = 'NOT JOIN BERLIN TO';
answer[5][5] = 'NOT ORDER BERLIN NOW';

question[6] = 'SQL Where:<br>Which of the following records show where the customerID column has the value 32?<br><br>SELECT * FROM Customers<br>___ CustomerID __ __;';
answer[6]=new Array();
answer[6][1] = 'WHERE = 32';
answer[6][2] = 'HOW > 32';
answer[6][3] = 'WHERE < 32';
answer[6][4] = 'Where $ 32';
answer[6][5] = 'WHERE - 32';

question[7] = 'SQL Where:<br>Which of the following records show where the city column has the value "Berlin" and the postalcode column has the value 12209?<br><br>___ * FROM Customers<br>___ City = `Berlin`<br>__ ____ = 12209;';
answer[7]=new Array();
answer[7][1] = 'SELECT WHERE AND POSTALCODE';
answer[7][2] = 'SELECT WHERE POSTALCODE AND';
answer[7][3] = 'WHERE SELECT POSTALCODE AND';
answer[7][4] = 'AND POSTALCODE SELECT WHERE';
answer[7][5] = 'POSTALCODE SELECT AND WHERE';

question[8] = 'SQL Where:<br>Which of the following records show where the city column has the value "Berlin" or "LONDON"?<br><br>___ * FROM Customers<br>___ City = `Berlin`<br>__ ____ = `___`;';
answer[8]=new Array();
answer[8][1] = 'SELECT WHERE OR CITY LONDON';
answer[8][2] = 'WHERE SELECT CITY OR LONDON';
answer[8][3] = 'LONDON SELECT WHERE OR CITY';
answer[8][4] = 'OR SELECT WHERE LONDON CITY';
answer[8][5] = 'LONDON OR SELECT WHERE CITY';

question[9] = 'SQL Order By:<br>Which of the following records will be selected from the cusomters table to sort the result alphabetically by the column CITY?<br><br>SELECT * FROM Customers<br>___ __;';
answer[9]=new Array();
answer[9][1] = 'ORDER BY CITY';
answer[9][2] = 'CITY IS ORDERED';
answer[9][3] = 'IS CITY ORDERED';
answer[9][4] = 'CITY = ORDER';
answer[9][5] = 'BY CITY ORDER';

question[10] = 'SQL Order By:<br>Which of the following records will be selected from the cusomters table to sort the result reversed alphabetically by the column CITY?<br><br>SELECT * FROM Customers<br>_____ __ ___;';
answer[10]=new Array();
answer[10][1] = 'ORDER BY CITY DESC';
answer[10][2] = 'CITY DESC IS ORDERED';
answer[10][3] = 'IS CITY DESC ORDERED';
answer[10][4] = 'DESC CITY = ORDER';
answer[10][5] = 'BY DESC CITY ORDER';

question[11] = 'SQL Order By:<br>Which of the following records will be selected from the cusomters table to sort the result alphabetically, first by the column COUNTRY, then, by the column CITY?<br><br>SELECT * FROM Customers<br>_____ __ ___;';
answer[11]=new Array();
answer[11][1] = 'ORDER BY COUNTRY, CITY';
answer[11][2] = 'CITY DESC ORDERED BY';
answer[11][3] = 'IS CITY DESC ORDERED';
answer[11][4] = 'DESC CITY = ORDER';
answer[11][5] = 'COUNRY ORDER BY CITY';

question[12] = 'SQL INSERT:<br>Which of the following new records will be inserted in the Customers table?<br><br>___ Customers __<br>CustomerName,<br>Address,<br>City,<br>PostalCode,<br>Country__<br>____ __<br>"Hekkan Burger",<br>;"Gateveien 15",<br>"Sandnes"<br>"4306",<br>"Norway"__;';
answer[12]=new Array();
answer[12][1] = 'INSERT INTO ( ) VALUES ( )';
answer[12][2] = '[ ] Insert Values { }';
answer[12][3] = '{ } Values Insert [ ]';
answer[12][4] = '( ) Insert Values [ ]';
answer[12][5] = '> < Values Insert { }';

question[13] = 'SQL NULL:<br>Which of the following would select all records from the CUSTOMERS table where the POSTALCODE column is empty?<br><br>Select * FROM Customers WHERE ________;';
answer[13]=new Array();
answer[13][1] = 'PostalCode IS NULL';
answer[13][2] = 'PostalCode IS 0';
answer[13][3] = 'PostalCode == NULL';
answer[13][4] = 'NOT PostalCode';
answer[13][5] = 'PostalCode == 0';

question[14] = 'SQL UPDATE:<br>Which of the following would update the City column of all records in the Customers table?<br><br>____ Customers ____ City = "Oslo";';
answer[14]=new Array();
answer[14][1] = 'UPDATE SET';
answer[14][2] = 'UPDATE WHERE';
answer[14][3] = 'CHANGE SET';
answer[14][4] = 'CHANGE TO';
answer[14][5] = 'UPDATE TO';

question[15] = 'SQL UPDATE:<br>Which of the following would set the value of the City columns to "Oslo", but only the ones where the Country column has the value "Norway"?<br><br>____ Customers ____ City = "Oslo" _____ Country = "Norway";';
answer[15]=new Array();
answer[15][1] = 'UPDATE SET WHERE';
answer[15][2] = 'UPDATE WHERE SET';
answer[15][3] = 'UPDATE TO IF';
answer[15][4] = 'UPDATE SET IF';
answer[15][5] = 'UPDATE TO WHERE';

question[16] = 'SQL UPDATE:<br>Which of the following would update the City value and the Country value?<br><br>____ Customers ____ City = "Oslo" ____ _____ = "Norway" WHERE CustomerID = 32;';
answer[16]=new Array();
answer[16][1] = 'UPDATE SET , Country';
answer[16][2] = 'UPDATE SET & Country';
answer[16][3] = 'UPDATE SET && Country';
answer[16][4] = 'UPDATE SET AND Country';
answer[16][5] = 'UPDATE SET || Country';

question[17] = 'SQL DELETE:<br>Which of the following would delete all the records from the Customers table where the Country value is "Norway"?<br><br>____ Customers ____ Country = "Norway";';
answer[17]=new Array();
answer[17][1] = 'DELETE FROM WHERE';
answer[17][2] = 'DELETE WHERE';
answer[17][3] = 'DELETE FROM IF';
answer[17][4] = 'DELETE IF';
answer[17][5] = 'DELETE IN WHERE';

question[18] = 'SQL DELETE:<br>Which of the following would delete all the records from the Customers table?<br><br>____ Customers;';
answer[18]=new Array();
answer[18][1] = 'DELETE FROM';
answer[18][2] = 'DELETE';
answer[18][3] = 'REMOVE';
answer[18][4] = 'TRASH';
answer[18][5] = 'DESTROY';

question[19] = 'SQL FUNCTIONS:<br>Which of the following would use the MIN function to select the record with the smallest value of the Price column?<br><br>SELECT ____ FROM Products;';
answer[19]=new Array();
answer[19][1] = 'MIN(Price)';
answer[19][2] = 'Price = MIN';
answer[19][3] = 'MIN = Price';
answer[19][4] = 'Price == MIN';
answer[19][5] = 'MIN == Price';

question[20] = 'SQL FUNCTIONS:<br>Which of the following would use the correct function to return the number of records that have the Price value set to 18?<br><br>SELECT ____(*) FROM Products _____ Price = 18;';
answer[20]=new Array();
answer[20][1] = 'COUNT WHERE';
answer[20][2] = 'COUNT IF';
answer[20][3] = 'NUMBER WHERE';
answer[20][4] = 'NUMBER IF';
answer[20][5] = 'ALL WHERE';

question[21] = 'SQL FUNCTIONS:<br>Which of the following would use an SQL function to calculate the average price of all products?<br><br>SELECT ____ FROM Products;';
answer[21]=new Array();
answer[21][1] = 'AVG(Price)';
answer[21][2] = 'AVERAGE';
answer[21][3] = 'AVG';
answer[21][4] = 'AVERAGE(Price)';
answer[21][5] = 'MEAN(Price)';

question[22] = 'SQL FUNCTIONS:<br>Which of the following would use an SQL function to calculate the sum of all the Price column values in the Products table?<br><br>SELECT ____ FROM Products;';
answer[22]=new Array();
answer[22][1] = 'SUM(Price)';
answer[22][2] = 'SUM';
answer[22][3] = 'SUM(All)';
answer[22][4] = 'TOTAL';
answer[22][5] = 'TOTAL(Price)';

question[23] = 'SQL LIKE:<br>Which of the following records has the value of the City Column that starts with the letter "a"?<br><br>SELECT * FROM Customers<br>____;';
answer[23]=new Array();
answer[23][1] = 'WHERE City LIKE "a%"';
answer[23][2] = 'WHERE LIKE CITY a';
answer[23][3] = 'CITY LIKE WHERE A';
answer[23][4] = 'A CITY LIKE WHERE';
answer[23][5] = 'LIKE WHERE A CITY';

question[24] = 'SQL LIKE:<br>Which of the following records has the value of the City Column that ends with the letter "a"?<br><br>SELECT * FROM Customers<br>____;';
answer[24]=new Array();
answer[24][1] = 'WHERE City LIKE "%a"';
answer[24][2] = 'WHERE LIKE CITY a';
answer[24][3] = 'CITY LIKE WHERE A';
answer[24][4] = 'A CITY LIKE WHERE';
answer[24][5] = 'LIKE WHERE A CITY';

question[25] = 'SQL LIKE:<br>Which of the following records has the value of the City Column that contains the letter "a"?<br><br>SELECT * FROM Customers<br>____;';
answer[25]=new Array();
answer[25][1] = 'WHERE City LIKE "%a%"';
answer[25][2] = 'WHERE LIKE CITY a';
answer[25][3] = 'CITY LIKE WHERE A';
answer[25][4] = 'A CITY LIKE WHERE';
answer[25][5] = 'LIKE WHERE A CITY';

question[26] = 'SQL LIKE:<br>Which of the following records has the value of the City Column that startswith the letter "a" and ends with letter "b"?<br><br>SELECT * FROM Customers<br>____;';
answer[26]=new Array();
answer[26][1] = 'WHERE City LIKE "a%b"';
answer[26][2] = 'WHERE LIKE CITY ab';
answer[26][3] = 'CITY LIKE WHERE Ab';
answer[26][4] = 'Ab CITY LIKE WHERE';
answer[26][5] = 'LIKE WHERE Ab CITY';

question[27] = 'SQL LIKE:<br>Which of the following records has the value of the City Column that doesnot start with the letter "a"?<br><br>SELECT * FROM Customers<br>____;';
answer[27]=new Array();
answer[27][1] = 'WHERE City NOT LIKE "a%"';
answer[27][2] = 'WHERE NOT LIKE CITY ab';
answer[27][3] = 'CITY NOT LIKE WHERE Ab';
answer[27][4] = 'Ab CITY LIKE WHERE';
answer[27][5] = 'LIKE WHERE NOT Ab CITY';

question[28] = 'SQL Wildcards:<br>Which of the following records has the second letter of the city as an "a"?<br><br>SELECT * FROM Customers<br>WHERE CITY LIKE "____%";';
answer[28]=new Array();
answer[28][1] = 'a';
answer[28][2] = 'W';
answer[28][3] = 'C';
answer[28][4] = 'Ab';
answer[28][5] = 'L';

question[29] = 'SQL Wildcards:<br>Which of the following records has the first letter of the city as an "a" or a "C" or an "s"?<br><br>SELECT * FROM Customers<br>WHERE CITY LIKE "____%";';
answer[29]=new Array();
answer[29][1] = '[acs]';
answer[29][2] = '{Wss}';
answer[29][3] = '[Caa]';
answer[29][4] = '[cAb]';
answer[29][5] = '[Lac]';

question[30] = 'SQL Wildcards:<br>Which of the following records has the first letter of the city start with anything from an "a" or "f"?<br><br>SELECT * FROM Customers<br>WHERE CITY LIKE "____%";';
answer[30]=new Array();
answer[30][1] = '[a-f]';
answer[30][2] = '{W-w}';
answer[30][3] = '[a-g]';
answer[30][4] = '[a-h]';
answer[30][5] = '[a-b]';

question[31] = 'SQL Wildcards:<br>Which of the following records has the first letter of the city start with NOT an "a" or a "c" or an "f"?<br><br>SELECT * FROM Customers<br>WHERE CITY LIKE "____%";';
answer[31]=new Array();
answer[31][1] = '[!acf]';
answer[31][2] = '{acf}';
answer[31][3] = '[caf]';
answer[31][4] = '[fac]';
answer[31][5] = '[!fac]';

question[32] = 'SQL In:<br>Which of the following IN operator will be used to select all the records where Country is either "Norway" or "France"?<br><br>SELECT * FROM Customers<br>______ ______ "France" __;';
answer[32]=new Array();
answer[32][1] = 'WHERE Country IN ("Norway", )';
answer[32][2] = 'COUNTRY IN WHERE NORWAY }';
answer[32][3] = 'NORWAY FRANCE COUNRT IN NOW';
answer[32][4] = 'COUNTRY NORWAY ( IN ""';
answer[32][5] = 'NORWAY WHERE COUNTRY IS NOW';

question[33] = 'SQL In:<br>Which of the following IN operator will be used to select all the records where Country is NOT "Norway" and NOT "France"?<br><br>SELECT * FROM Customers<br>_______ ("Norway", "France");';
answer[33]=new Array();
answer[33][1] = 'WHERE Country NOT IN';
answer[33][2] = 'COUNTRY IN WHERE NORWAY }';
answer[33][3] = 'NOT IN WHERE COUNTRY';
answer[33][4] = 'COUNTRY NORWAY FRANCE WHERE';
answer[33][5] = 'NORWAY WHERE COUNTRY IS';