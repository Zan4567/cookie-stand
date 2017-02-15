function CookieStore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg; //average cookies sold per customer
  this.sales = [-1, -1, -1, -1, -1, -1, -1, -1];

  //generates sales for an hour, based on the location's info.
  //returns the number of cookies sold.
  this.genRandomSales = function() {
    var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    //console.log(cust + ' customers');
    var cookies = Math.round(cust * this.avg);
    //console.log(cookies + ' cookies');
    return cookies;
  };

  //generates the number of cookies sold for the day using genRandomSales,
  //and puts them in the sales array.
  this.generateSales = function() {
    for (var i = 0; i < this.sales.length; i++) {
      this.sales[i] = this.genRandomSales();
    }
    //console.log('sales: ' + this.sales);
  };
  //calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
  //Returns the total number of cookies sold.
  this.getTotalSales = function() {
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
  this.printInfo = function() {
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
};

var pikePlace = new CookieStore('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac', 6, 24, 1.2);
var southcenter = new CookieStore('Southcenter', 11, 38, 1.9);
var bellSquare = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);

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
