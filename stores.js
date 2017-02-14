function CookieStore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg; //average cookies sold per customer
  this.timeNames = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
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
  //puts the info from the object into the display_area div on the page.
  //requires the sales data to already be generated.
  this.printInfo = function() {
    var infobox = document.getElementById('display_area');

    var nameEl = document.createElement('h3');
    nameEl.textContent = this.name;
    infobox.appendChild(nameEl);

    var listEl = document.createElement('ul');
    infobox.appendChild(listEl);

    //assuming length of sales is === length of timeNames ¯\_(ツ)_/¯
    for (var i = 0; i < this.sales.length; i++) {
      var salesEl = document.createElement('li');
      salesEl.textContent = this.timeNames[i] + ': ' + this.sales[i] + ' cookies';
      listEl.appendChild(salesEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.getTotalSales() + ' cookies';
    listEl.appendChild(totalEl);
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
