(function(window) {
  'use strict';

  var FORM_SELECTOR = '[data-posting="form"]';
  var CHECKLIST_SELECTOR = '[data-posting="checklist"]';
  //var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuap.com/api/coffeeorders';
  var SERVER_URL = 'http://localhost:2403/coffeeorders';
  var SERVER_URL_POSTINGS = 'http://localhost:2403/postings';
  var SERVER_URL_USERS = 'http://localhost:2403/users';


  var App = window.App;
  //var Truck = App.Truck;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var remoteDSPostings = new RemoteDataStore(SERVER_URL_POSTINGS);
  var remoteDSUsers = new RemoteDataStore(SERVER_URL_USERS);
  //var webshim = window.webshim;

  //var myTruck = new Truck('ncc-1701', new DataStore());
  //var myTruck = new Truck('ncc-1701', remoteDS);
  //window.myTruck = myTruck;

  var myPostingList = [];
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myPostingList.pop());

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    remoteDSPostings.add(data.pid, data);
    myPostingList.push(data);
    checkList.addRow.call(checkList, data);
  });

  //formHandler.addInputHandler(Validation.isEmail);

  console.log(formHandler);
})(window);
