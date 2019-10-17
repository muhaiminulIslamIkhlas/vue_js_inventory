

let login=require('./components/Auth/login.vue').default;
let register=require('./components/Auth/register.vue').default;
let forget=require('./components/Auth/forget.vue').default; 
let logout=require('./components/Auth/logout.vue').default; 
let home=require('./components/home.vue').default; 

//employee component
let employee=require('./components/Employee/index.vue').default;
let storeemployee=require('./components/Employee/create.vue').default;
let editemployee=require('./components/Employee/edit.vue').default;
//Supplier component
let supplier=require('./components/Supplier/index.vue').default;
let storesupplier=require('./components/Supplier/create.vue').default;
let editsupplier=require('./components/Supplier/edit.vue').default;
//Category
let category=require('./components/Category/index.vue').default;
let storecategory=require('./components/Category/create.vue').default;
let editcategory=require('./components/Category/edit.vue').default;
//Category
let product=require('./components/Product/index.vue').default;
let storeproduct=require('./components/Product/create.vue').default;
let editproduct=require('./components/Product/edit.vue').default;
//expense--
let storeexpense = require('./components/expense/create.vue').default;
let expense = require('./components/expense/expense.vue').default;
let editexpense = require('./components/expense/edit.vue').default;
//salary----
let salary = require('./components/salary/all_employee.vue').default;
let paysalary = require('./components/salary/create.vue').default;
let allsalary = require('./components/salary/index.vue').default;
let viewsalary = require('./components/salary/view.vue').default;
let editsalary = require('./components/salary/edit.vue').default;
//stock
let stock = require('./components/Product/stock.vue').default;
let editstock = require('./components/Product/edit-stock.vue').default;

//customers
let storecustomer = require('./components/customer/create.vue').default;
let customer = require('./components/customer/index.vue').default;
let editcustomer = require('./components/customer/edit.vue').default;
//pos
let pos = require('./components/Pos/pointofsale.vue').default;
//
let order = require('./components/Order/order.vue').default;
let vieworder = require('./components/Order/vieworder.vue').default;
let searchorder  = require('./components/Order/search.vue').default;

export const routes = [
  { path: '/', component: login,name:'/' },
  { path: '/register', component: register,name:'register' },
  { path: '/forget', component: forget,name:'forget' },
  { path: '/home', component: home,name:'home' },
  { path: '/logout', component: logout,name:'logout' },
  { path: '/stock', component: stock,name:'stock' },
  { path: '/edit-stock', component: editstock,name:'edit-stock' },
  //Employee
  { path: '/store-employee', component: storeemployee,name:'store-employee' },
  { path: '/employee', component: employee,name:'employee' },
  { path: '/edit-employee/:id', component: editemployee, name:'edit-employee' },
  //Supplier
  { path: '/store-supplier', component: storesupplier,name:'store-supplier' },
  { path: '/supplier', component: supplier,name:'supplier' },
  { path: '/edit-supplier/:id', component: editsupplier, name:'edit-supplier' },
  //Category
  { path: '/store-category', component: storecategory,name:'store-category' },
  { path: '/category', component: category,name:'category' },
  { path: '/edit-category/:id', component: editcategory, name:'edit-category' },
  //Category
  { path: '/store-product', component: storeproduct,name:'store-product' },
  { path: '/product', component: product,name:'product' },
  { path: '/edit-product/:id', component: editproduct, name:'edit-product' },
  //expense---
   { path: '/store-expense', component: storeexpense, name:'store-expense' },
   { path: '/expense', component: expense, name:'expense' },
   { path: '/edit-expense/:id', component: editexpense, name:'edit-expense' },
    //salary--
   { path: '/given-salary', component: salary, name:'given-salary' },
   { path: '/pay-salary/:id', component: paysalary, name:'pay-salary' },
   { path: '/salary', component: allsalary, name:'salary' },
   { path: '/view-salary/:id', component: viewsalary, name:'view-salary' },
   { path: '/edit-salary/:id', component: editsalary, name:'edit-salary' },

   //customers----
   { path: '/store-customer', component: storecustomer, name:'store-customer' },
   { path: '/customer', component: customer, name:'customer' },
   { path: '/edit-customer/:id', component: editcustomer, name:'edit-customer' },
   //pos
   { path: '/pos', component: pos, name:'pos' },
   //Order
   { path: '/order', component: order, name:'order' },

   { path: '/view-order/:id', component: vieworder, name:'view-order' },
   { path: '/searchorder', component: searchorder, name:'searchorder' },

   

]