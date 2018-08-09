// The PutItem API inserts a new item into DynamoDB.
// If an item already exists with the same primary key value,
// the item is replaced with the new item.
// The API has several other useful parameters not shown here, including:
//  * Expected: DynamoDB will perform the write only if certain attributes
//    match the values you expect them to have
//  * ReturnValues: DynamoDB can return the value you are replacing
var params = {
    TableName: 'Image',
    Item: {
        Id: 'dynamodb.png',
        DateAdded: new Date().toISOString(),
        VoteCount: 0
    }
};
console.log("Calling PutItem");
ppJson(params);
docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else console.log("PutItem returned successfully");
});