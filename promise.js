getOrder(3).then(function(order){
    return getUser(order.userId);
}).then(function(user){
    return getCompany(user.companyId);
}).then(function(company){
 console.log(company.name) // result 'pluralsigth'
}).catch(function(error){
    //handle error
});