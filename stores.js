function writeHeader() {
  var times = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var head = document.getElementsByTagName('thead');

  var row = document.createElement('tr');
  head[0].appendChild(row);

  var storeC = document.createElement('th');
  storeC.textContent = 'Stores:';
  row.appendChild(storeC);

  for (var i = 0; i < times.length; i++) {
    var timeC = document.createElement('th');
    timeC.textContent = times[i] + ' sales:';
    row.appendChild(timeC);
  }

  var totalC = document.createElement('th');
  totalC.textContent = 'Total:';
  row.appendChild(totalC);
}

/**
* erases the old footer, if any, and re-generates it using data
* from the table
*/
function writeFooter() {
  var foot = document.getElementById('storefooter');
  //remove old footer content
  while (foot.firstChild) {
    //console.log('removing ' + foot.firstChild);
    foot.removeChild(foot.firstChild);
  }

  //get totals of the cells
  var totals = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var table = document.getElementById('stores_table');
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    for (var j = 1; j < row.cells.length; j++) {
      totals[j] += parseInt(row.cells[j].textContent);
      //console.log(i + ' ' + j + ' ' + row.cells[j].textContent);
    }
  }

  var row = document.createElement('tr');
  foot.appendChild(row);

  var storeC = document.createElement('td');
  storeC.textContent = 'Totals:';
  row.appendChild(storeC);

  for (var i = 1; i < totals.length; i++) {
    var timeC = document.createElement('td');
    timeC.textContent = totals[i];
    row.appendChild(timeC);
  }
}

function formHandler(event) {
  event.preventDefault(); //prevents form from reloading page

  var storeName = event.target.name.value;
  var storeMin = event.target.min.value;
  var storeMax = event.target.max.value;
  var storeAvg = event.target.avg.value;

  var store = new CookieStore(storeName, storeMin, storeMax, storeAvg);
  store.generateSales();
  store.printInfo();
  writeFooter();

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}

/**
* Constructor fn for CookieStore object
* @param string    name The name of the store
* @param number    min  The minimum number of customers/hour
* @param number    max  The maximum customers/hour
* @param number    avg  Average number of cookies sold per customer
*/
function CookieStore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg; //average cookies sold per customer
  this.sales = [-1, -1, -1, -1, -1, -1, -1, -1];
};

CookieStore.prototype.getRandomCustomers = function() {
  var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return cust;
}

//generates sales for an hour, based on the location's info.
//returns the number of cookies sold.
CookieStore.prototype.genRandomSales = function() {
  var cust = this.getRandomCustomers();
  //console.log(cust + ' customers');
  var cookies = Math.round(cust * this.avg);
  //console.log(cookies + ' cookies');
  return cookies;
};

//generates the number of cookies sold for the day using genRandomSales,
//and puts them in the sales array.
CookieStore.prototype.generateSales = function() {
  for (var i = 0; i < this.sales.length; i++) {
    this.sales[i] = this.genRandomSales();
  }
  //console.log('sales: ' + this.sales);
};

//calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
//Returns the total number of cookies sold.
CookieStore.prototype.getTotalSales = function() {
  var total = 0;
  for (var i = 0; i < this.sales.length; i++) {
    if(this.sales[i] < 0) {
      console.log(this.name + ' does not have all of its sales generated when calulating total!');
    }
    else {
      total += this.sales[i];
    }
  }

  return total;
};//getTotalSales

//puts the info from the object into the table on the page.
//requires the sales data to already be generated.
CookieStore.prototype.printInfo = function() {
  var table = document.getElementById('stores_table');
  var row = document.createElement('tr');
  var salesC, sSalesC;
  table.appendChild(row);

  //create name cell
  var nameC = document.createElement('td');
  nameC.textContent = this.name;
  row.appendChild(nameC);

  //get the second table displaying servers and add a row
  var serverTable = document.getElementById('server_table')
  var serverRow = document.createElement('tr');
  var sNameC = document.createElement('td');
  sNameC.textContent = this.name;
  serverTable.appendChild(serverRow);
  serverRow.appendChild(sNameC);

  //hourly sale cells
  for (var i = 0; i < this.sales.length; i++) {
    salesC = document.createElement('td');
    salesC.textContent = this.sales[i];
    row.appendChild(salesC);

    sSalesC = document.createElement('td');
    sSalesC.textContent = Math.max(Math.ceil((this.sales[i] / this.avg) / 20), 2);
    serverRow.appendChild(sSalesC);
  }

  var totalC = document.createElement('td');
  totalC.textContent = this.getTotalSales();
  row.appendChild(totalC);
};//printInfo

var form = document.getElementById('addform');
form.addEventListener('submit', formHandler);

var pikePlace = new CookieStore('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac', 6, 24, 1.2);
var southcenter = new CookieStore('Southcenter', 11, 38, 1.9);
var bellSquare = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);

writeHeader();
pikePlace.generateSales();
pikePlace.printInfo();
seaTac.generateSales();
seaTac.printInfo();
southcenter.generateSales();
southcenter.printInfo();
bellSquare.generateSales();
bellSquare.printInfo();
alki.generateSales();
alki.printInfo();
writeFooter();
