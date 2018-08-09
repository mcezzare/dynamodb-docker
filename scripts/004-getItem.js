// GetItem retrieves an item by its exact primary key.
// This API also has a ConsistentRead parameter for choosing between
// strictly and eventually consistent read consistency.
var params = {
    TableName: 'Image',
    Key: {
        Id: 'dynamodb.png'
    }
};
console.log("Calling GetItem");
docClient.get(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});