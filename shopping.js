  var items = [
        ['images/item1.png', 29.99, 'product 1'],
        ['images/item2.png', 19.99, 'product 2'],
        ['images/item3.png', 9.99, 'product 3'],
        ['images/item4.png', 39.99, 'product 4']
    ];

  var cartItems = [];

  function run() { // loading products on cart page
      var main = document.getElementById('products');

      //all elements to be added
      for (var i = 0; i < items.length; i++) {


          var ele = document.createElement('li');
          var pic = document.createElement('img');
          var price = document.createElement('h1');
          var desc = document.createElement('h2');
          var add = document.createElement('button');
          var inputBox = document.createElement('input');


          //push elements into html
          main.appendChild(ele);
          ele.appendChild(pic);
          ele.appendChild(price);
          ele.appendChild(desc);
          ele.appendChild(add);
          ele.appendChild(inputBox);

          //edit pushed elements info from array

          pic.src = items[i][0];
          price.innerHTML = '$' + items[i][1];
          desc.innerHTML = items[i][2];

          add.innerHTML = 'Add';
          add.dataset.cartIndex = i;
          add.addEventListener('click', adding, false);

          inputBox.value = 1;
          inputBox.type = 'number';
          inputBox.setAttribute('id', 'input' + i);
      }
  }


  function adding(event) {
      const NUM = event.currentTarget.dataset.cartIndex;

      cartItems.push([items[NUM]]);
      cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

      updateCart();
  }

  var totalItems = 0;

  function updateCart() {
      var itemCount = document.getElementById('totalItems');

      totalItems = 0;
      for (var i = 0; i < cartItems.length; i++) {
          totalItems += cartItems[i][1];
      }

      window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

      itemCount.innerHTML = totalItems;
  }

  function loadCart() { // loading products on cart page
      var main = document.getElementById('cartProducts');

      //all elements to be added
      
      var data = sessionStorage.getItem('cartItems');
      data =JSON.parse(data);
      
      cartItems = data;
      
      
      for (var i = 0; i < items.length; i++) {


          var ele = document.createElement('li');
          var pic = document.createElement('img');
          var price = document.createElement('h1');
          var desc = document.createElement('h2');
          var deleteItem = document.createElement('button');
          var amount = document.createElement('h2');
          var subtotal = document.createElement('h3');

          //push elements into html
          main.appendChild(ele);
          ele.appendChild(pic);
          ele.appendChild(price);
          ele.appendChild(desc);
          ele.appendChild(deleteItem);
          ele.appendChild(amount);
          ele.appendChild(subtotal);

          //edit pushed elements info from array

          pic.src = cartItems[i][0];
          price.innerHTML = '$' + cartItems[i][1];
          desc.innerHTML = cartItems[i][2];

          deleteItem.innerHTML = 'Delete';
          deleteItem.dataset.cartIndex = i;
          deleteItem.addEventListener('click', deleteMe, false);

          amount.innerHTML = cartItems[i][1];
          subtotal.innerHTML = cartItems[i][1] * cartItems[i][1];
      }
  }

  function deleteMe() {
      alert('gone')
  }
