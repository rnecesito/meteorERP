Meteor.startup(function(){
    Meteor.publish("Purchases", function(){
      return purchases.find({});
    });
    Meteor.publish("Suppliers", function(){
        return suppliers.find({});
    });
    Meteor.publish("SuppInfo", function(suppId){
        return suppliers.find({_id:suppId});
    });
    Meteor.publish("CustomerInfo", function(cusId){
        return customers.find({_id:cusId});
    });
    Meteor.publish("Customers", function(){
        return customers.find({});
    });
    Meteor.publish("CarModels", function(){
        return cars.find({});
    });
    Meteor.publish("Car_Info", function(){
        return car_info.find({});
    });
    Meteor.publish("Car_Out", function(){
        return car_out.find({});
    });
    Meteor.publish("CarModelInfo", function(carmodId){
        return suppliers.find({_id:carmodId});
    });
    Meteor.publish("CarInfo", function(car_id){
        return car_info.find({_id:car_id});
    });
    Meteor.publish("Users", function(){
        return Meteor.users.find({});
    });
    Meteor.publish("Expenses", function(){
        return expenses.find({});
    });
    Meteor.publish("ExpenseInfo", function(expId){
        return expenses.find({_id:expId});
    });
    Meteor.publish("CustomerChecks", function(){
        return customer_checks.find({});
    });
    Meteor.publish("SaleCheckInfo", function(checkId){
        return customer_checks.find({_id:checkId});
    });
    Meteor.publish("SupplierChecks", function(){
        return supplier_checks.find({});
    });
    Meteor.publish("PurchaseCheckInfo", function(checkId){
        return supplier_checks.find({_id:checkId});
    });

    if(Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'admin',
            password: 'asdf1234'
        })
    };
});