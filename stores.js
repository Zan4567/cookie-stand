var pikePlace = {
  name: "Pike Place Market",
  min: 17,
  max: 88,
  avg: 5.2,
  timeNames: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  sales: [-1, -1, -1, -1, -1, -1, -1, -1],

  //generates sales for an hour, based on the location's info.
  //returns the number of cookies sold.
  genRandomSales: function() {
    var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    //console.log(cust + ' customers');
    var cookies = Math.round(cust * this.avg);
    //console.log(cookies + ' cookies');
    return cookies;
  },
  //generates the number of cookies sold for the day using genRandomSales,
  //and puts them in the sales array.
  generateSales: function() {
    for (var i = 0; i < this.sales.length; i++) {
      this.sales[i] = this.genRandomSales();
    }
    //console.log('sales: ' + this.sales);
  },
  //calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
  //Returns the total number of cookies sold.
  getTotalSales: function() {
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
  },//getTotalSales
  //puts the info from the object into the display_area div on the page.
  //requires the sales data to already be generated.
  printInfo: function() {
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
  }//printInfo
};

var seaTac = {
  name: "SeaTac Airport",
  min: 6,
  max: 24,
  avg: 1.2,
  timeNames: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  sales: [-1, -1, -1, -1, -1, -1, -1, -1],

  //generates sales for an hour, based on the location's info.
  //returns the number of cookies sold.
  genRandomSales: function() {
    var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    //console.log(cust + ' customers');
    var cookies = Math.round(cust * this.avg);
    //console.log(cookies + ' cookies');
    return cookies;
  },
  //generates the number of cookies sold for the day using genRandomSales,
  //and puts them in the sales array.
  generateSales: function() {
    for (var i = 0; i < this.sales.length; i++) {
      this.sales[i] = this.genRandomSales();
    }
    //console.log('sales: ' + this.sales);
  },
  //calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
  //Returns the total number of cookies sold.
  getTotalSales: function() {
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
  },//getTotalSales
  //puts the info from the object into the display_area div on the page.
  //requires the sales data to already be generated.
  printInfo: function() {
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
  }//printInfo
};

var southcenter = {
  name: "Southcenter",
  min: 11,
  max: 38,
  avg: 1.9,
  timeNames: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  sales: [-1, -1, -1, -1, -1, -1, -1, -1],

  //generates sales for an hour, based on the location's info.
  //returns the number of cookies sold.
  genRandomSales: function() {
    var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    //console.log(cust + ' customers');
    var cookies = Math.round(cust * this.avg);
    //console.log(cookies + ' cookies');
    return cookies;
  },
  //generates the number of cookies sold for the day using genRandomSales,
  //and puts them in the sales array.
  generateSales: function() {
    for (var i = 0; i < this.sales.length; i++) {
      this.sales[i] = this.genRandomSales();
    }
    //console.log('sales: ' + this.sales);
  },
  //calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
  //Returns the total number of cookies sold.
  getTotalSales: function() {
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
  },//getTotalSales
  //puts the info from the object into the display_area div on the page.
  //requires the sales data to already be generated.
  printInfo: function() {
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
  }//printInfo
};

var bellSquare = {
  name: "Bellevue Square",
  min: 20,
  max: 48,
  avg: 3.3,
  timeNames: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  sales: [-1, -1, -1, -1, -1, -1, -1, -1],

  //generates sales for an hour, based on the location's info.
  //returns the number of cookies sold.
  genRandomSales: function() {
    var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    //console.log(cust + ' customers');
    var cookies = Math.round(cust * this.avg);
    //console.log(cookies + ' cookies');
    return cookies;
  },
  //generates the number of cookies sold for the day using genRandomSales,
  //and puts them in the sales array.
  generateSales: function() {
    for (var i = 0; i < this.sales.length; i++) {
      this.sales[i] = this.genRandomSales();
    }
    //console.log('sales: ' + this.sales);
  },
  //calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
  //Returns the total number of cookies sold.
  getTotalSales: function() {
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
  },//getTotalSales
  //puts the info from the object into the display_area div on the page.
  //requires the sales data to already be generated.
  printInfo: function() {
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
  }//printInfo
};

var alki = {
  name: "Alki",
  min: 3,
  max: 24,
  avg: 2.6,
  timeNames: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  sales: [-1, -1, -1, -1, -1, -1, -1, -1],

  //generates sales for an hour, based on the location's info.
  //returns the number of cookies sold.
  genRandomSales: function() {
    var cust = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    //console.log(cust + ' customers');
    var cookies = Math.round(cust * this.avg);
    //console.log(cookies + ' cookies');
    return cookies;
  },
  //generates the number of cookies sold for the day using genRandomSales,
  //and puts them in the sales array.
  generateSales: function() {
    for (var i = 0; i < this.sales.length; i++) {
      this.sales[i] = this.genRandomSales();
    }
    //console.log('sales: ' + this.sales);
  },
  //calculates total sales using the sales array. prints warning to console if the sales for a day haven't been generated yet.
  //Returns the total number of cookies sold.
  getTotalSales: function() {
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
  },//getTotalSales
  //puts the info from the object into the display_area div on the page.
  //requires the sales data to already be generated.
  printInfo: function() {
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
  }//printInfo
};

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
