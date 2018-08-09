// This CreateTable request will create the Image table.
// With DynamoDB Local, tables are created right away. If you are calling
// a real DynamoDB endpoint, you will need to wait for the table to become
// ACTIVE before you can use it. See also dynamodb.waitFor().
var params = {
    TableName: 'Image',
    KeySchema: [
        {
            AttributeName: 'Id',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'Id',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput:  {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};
console.log("Creating the Image table");
dynamodb.createTable(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});