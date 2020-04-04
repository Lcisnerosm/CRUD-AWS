'use strict';
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2020-03-04' });
const uuid = require('uuid/v4');

const postsTable = process.env.POSTS_TABLE;

// Escribir tabla

const AWS =require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
exports.handler = (e, ctx, callback) => {

var params ={
Item: {
id : "2",
valor: "valor2"
},
TableName:'TablaCRUD'
};
docClient.put(params, function(err, data){
if(err){
callback(err,null);
}else {
callback(null,"Informacion Guardada");
}

// Leer tabla

'use strict';

console.log('function');

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
exports.handler = (e, ctx, callback) => {

var params = {
TableName : "TablaCRUD"
};

docClient.scan(params, function(err, data){
if(err){
callback(err,null);
}else {
callback(null,data);
}
});

};

// Actualizar tabla

var updateName = function(id,valor) {
  var docClient = new AWS.DynamoDB.DocumentClient();
  var params = {
  TableName:"TablaCRUD",
  Key: {
  id : id
  },
  UpdateExpression: "escribe nuevo valor = :valor",
      ExpressionAttributeValues:{
          ":valor":valor
      },
      ReturnValues:"UPDATED_NEW"
  };
  docClient.update(params,callback);
  }

// Eliminar tabla

var tableName = "TablaCRUD";
dynamodb.deleteItem({
    "TableName": tableName, 
    "Key" : {
        "id": {
            "id" : event.userId.toString()
         }
    }
}, function (err, data) {
    if (err) {
        context.fail('FAIL:  Error deleting item from dynamodb - ' + err);
    } else {
        console.log("DEBUG:  deleteItem worked. ");
        context.succeed(data);
    }
});
