import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    //host:"https://shreycartservice.azurewebsites.net",
    namespace: 'api',
    // headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    //     "Origin" : "http://localhost:4200/"
    //   }
});
