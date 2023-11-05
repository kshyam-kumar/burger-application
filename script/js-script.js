let selectedItems = [];
function showMenu(index) {
  let buttonHTML;
  // document.querySelector
  // if()
  console.log(index);
  if (index == 0) {
    buttonHTML = `<div class="menu-section-header">product-name</div>
    <div class="menu-section-header">cost</div>
    <div class="menu-section-header">calories</div>
    <div class="menu-section-header">cart</div>
    <!-- Wheat Bun -->
    <div class="bun-type">
      <img src="icons/bun-images/wheat-bun.jpg" class="product-images" alt="Whole Wheat Bun">
      <div class="bun-name">Whole Wheat Bun</div>
    </div>
    <div class="bun-cost">₹300.00</div>
    <div class="bun-calories">500 calories</div>
    <div class="add-to-cart">
      <button class="add-to-cart-button">Add to Burger</button>
    </div>
    
    <!-- Sesame Seed Bun -->
    <div class="bun-type">
      <img src="icons/bun-images/sesame-seed-bun.jfif" class="product-images" alt="Sesame Seed Bun">
      <div class="bun-name">Sesame Seed Bun</div>
    </div>
    <div class="bun-cost">₹350.00</div>
    <div class="bun-calories">200 calories</div>
    <div class="add-to-cart">
      <button class="add-to-cart-button">Add to Burger</button>
    </div>
    
    <!-- Repeat the above structure for the remaining bun types... -->
    
    <!-- Brioche Bun -->
    <div class="bun-type">
      <img src="icons/bun-images/brioche-bun.jfif" class="product-images" alt="Brioche Bun">
      <div class="bun-name">Brioche Bun</div>
    </div>
    <div class="bun-cost">₹400.00</div>
    <div class="bun-calories">300 calories</div>
    <div class="add-to-cart">
      <button class="add-to-cart-button">Add to Burger</button>
    </div>
    <!-- Pretzel Bun -->
    <div class="bun-type">
      <img src="icons/bun-images/pretzel-bun.jpg" class="product-images" alt="Pretzel Bun">
      <div class="bun-name">Pretzel Bun</div>
    </div>
    <div class="bun-cost">₹450.00</div>
    <div class="bun-calories">250 calories</div>
    <div class="add-to-cart">
      <button class="add-to-cart-button">Add to Burger</button>
    </div>
    
    <!-- Potato Bun -->
    <div class="bun-type">
      <img src="icons/bun-images/potato-bun.jpg" class="product-images" alt="Potato Bun">
      <div class="bun-name">Potato Bun</div>
    </div>
    <div class="bun-cost">₹320.00</div>
    <div class="bun-calories">400 calories</div>
    <div class="add-to-cart">
      <button class="add-to-cart-button">Add to Burger</button>
    </div>
    
    <!-- Ciabatta Bun -->
    <div class="bun-type">
      <img src="icons/bun-images/ciabatta-bun.webp" class="product-images" alt="Ciabatta Bun">
      <div class="bun-name">Ciabatta Bun</div>
    </div>
    <div class="bun-cost">₹380.00</div>
    <div class="bun-calories">350 calories</div>
    <div class="add-to-cart">
      <button class="add-to-cart-button">Add to Burger</button>
    </div>`;
  } else if (index == 1) {
    buttonHTML = `
    <div class="menu-section-header">product-name</div>
    <div class="menu-section-header">cost</div>
    <div class="menu-section-header">calories</div>
    <div class="menu-section-header">cart</div>
    <div class="bun-type">
        <img src="icons/patty-images/1.jpg" class="product-images" alt="Aloo Tikki">
        <div class="bun-name">Aloo Tikki</div>
    </div>
    <div class="bun-cost">₹75.00</div>
    <div class="bun-calories">100</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/patty-images/2.jfif" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Paneer Patty</div>
    </div>
    <div class="bun-cost">₹85</div>
    <div class="bun-calories">200-300</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/patty-images/3.jpg" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Soya Patty</div>
    </div>
    <div class="bun-cost">₹60</div>
    <div class="bun-calories">100-150</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/patty-images/4.jfif" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Corn Patty</div>
    </div>
    <div class="bun-cost">₹70</div>
    <div class="bun-calories">100-150</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    
    <div class="bun-type">
        <img src="icons/patty-images/5.jfif" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Chicken Patty</div>
    </div>
    <div class "bun-cost">₹120</div>
    <div class="bun-calories">150-200</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/patty-images/6.jfif" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Mutton Patty</div>
    </div>
    <div class="bun-cost">₹140</div>
    <div class="bun-calories">200-250</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/patty-images/7.jfif" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Fish Patty</div>
    </div>
    <div class="bun-cost">₹130</div>
    <div class="bun-calories">100-150</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/patty-images/8.jpg" class="product-images" alt="Ciabatta Bun">
        <div class="bun-name">Egg Patty</div>
    </div>
    <div class="bun-cost">₹55</div>
    <div class="bun-calories">60-100</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>
   `;
  } else if (index == 2) {
    buttonHTML = `
    <div class="menu-section-header">product-name</div>
    <div class="menu-section-header">cost</div>
    <div class="menu-section-header">calories</div>
    <div class="menu-section-header">cart</div>
    <div class="bun-type">
    <img src="icons/cheese-images/1.webp" class="product-images" alt="Processed Cheese Slices">
    <div class="bun-name">Processed Cheese Slices</div>
</div>
<div class="bun-cost">₹65</div>
<div class="bun-calories">320-370 calories</div>
<div class="add-to-cart">
    <button class="add-to-cart-button">Add to Cart</button>
</div>

<div class="bun-type">
    <img src="icons/cheese-images/2.jfif" class="product-images" alt="Cheddar Cheese">
    <div class="bun-name">Cheddar Cheese</div>
</div>
<div class "bun-cost">₹90</div>
<div class="bun-calories">400-410 calories</div>
<div class="add-to-cart">
    <button class="add-to-cart-button">Add to Cart</button>
</div>

<div class="bun-type">
    <img src="icons/cheese-images/3.jpg" class="product-images" alt="Mozzarella Cheese">
    <div class="bun-name">Mozzarella Cheese</div>
</div>
<div class="bun-cost">₹80</div>
<div class="bun-calories">280-320 calories</div>
<div class="add-to-cart">
    <button class="add-to-cart-button">Add to Cart</button>
</div>


<div class="bun-type">
    <img src="icons/cheese-images/4.jfif" class="product-images" alt="Gouda Cheese">
    <div class="bun-name">Gouda Cheese</div>
</div>
<div class="bun-cost">₹90</div>
<div class="bun-calories">356-380 calories</div>
<div class="add-to-cart">
    <button class="add-to-cart-button">Add to Cart</button>
</div>`;
  } else if (index == 3) {
    buttonHTML = `
    <div class="menu-section-header">product-name</div>
    <div class="menu-section-header">cost</div>
    <div class="menu-section-header">calories</div>
    <div class="menu-section-header">cart</div>
    <div class="bun-type">
        <img src="icons/vegetables-images/1.jpg" class="product-images" alt="Tomato">
        <div class="bun-name">Tomato</div>
    </div>
    <div class "bun-cost">₹15</div>
    <div class="bun-calories">18-20 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/vegetables-images/2.jpg" class="product-images" alt="Onion">
        <div class="bun-name">Onion</div>
    </div>
    <div class="bun-cost">₹10</div>
    <div class="bun-calories">40-45 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/vegetables-images/3.jfif" class="product-images" alt="Cucumber">
        <div class="bun-name">Cucumber</div>
    </div>
    <div class="bun-cost">₹15</div>
    <div class="bun-calories">16-20 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/vegetables-images/4.webp" class="product-images" alt="Capsicum (Bell Pepper)">
        <div class="bun-name">Capsicum (Bell Pepper)</div>
    </div>
    <div class="bun-cost">₹25</div>
    <div class="bun-calories">20-25 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/vegetables-images/5.jpg" class="product-images" alt="Jalapeno Peppers">
        <div class="bun-name">Jalapeno Peppers</div>
    </div>
    <div class="bun-cost">₹20</div>
    <div class="bun-calories">27-30 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    
    <div class="bun-type">
        <img src="icons/vegetables-images/6.jfif" class="product-images" alt="Red Cabbage">
        <div class="bun-name">Red Cabbage</div>
    </div>
    <div class="bun-cost">₹25</div>
    <div class="bun-calories">31-34 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/vegetables-images/7.jfif" class="product-images" alt="Carrots">
        <div class="bun-name">Carrots</div>
    </div>
    <div class="bun-cost">₹15</div>
    <div class="bun-calories">41-45 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>
    `;
  } else if (index == 4) {
    buttonHTML = `
    <div class="menu-section-header">product-name</div>
    <div class="menu-section-header">cost</div>
    <div class="menu-section-header">calories</div>
    <div class="menu-section-header">cart</div>
    <div class="bun-type">
        <img src="icons/sauces-images/1.jfif" class="product-images" alt="Ketchup (Tomato Sauce)">
        <div class="bun-name">Ketchup (Tomato Sauce)</div>
    </div>
    <div class="bun-cost">₹20</div>
    <div class="bun-calories">101 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/sauces-images/2.jfif" class="product-images" alt="Mayonnaise">
        <div class="bun-name">Mayonnaise</div>
    </div>
    <div class "bun-cost">₹30</div>
    <div class="bun-calories">680 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/sauces-images/3.jfif" class="product-images" alt="Mustard Sauce">
        <div class="bun-name">Mustard Sauce</div>
    </div>
    <div class="bun-cost">₹25</div>
    <div class="bun-calories">66 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/sauces-images/4.webp" class="product-images" alt="Schezwan Sauce">
        <div class="bun-name">Schezwan Sauce</div>
    </div>
    <div class="bun-cost">₹35</div>
    <div class="bun-calories">153 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>

    <div class="bun-type">
        <img src="icons/sauces-images/5.jpg" class="product-images" alt="Tandoori Sauce">
        <div class="bun-name">Tandoori Sauce</div>
    </div>
    <div class="bun-cost">₹40</div>
    <div class="bun-calories">157 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Cart</button>
    </div>
    `;
  } else if (index == 5) {
    buttonHTML = `
      <div class="menu-section-header">product-name</div>
      <div class="menu-section-header">cost</div>
      <div class="menu-section-header">calories</div>
      <div class="menu-section-header">cart</div>
      <div class="bun-type">
        <img src="icons/extras-images/1.jfif" class="product-images" alt="Potato Fries ">
        <div class="bun-name">Potato Fries </div>
    </div>
    <div class="bun-cost">₹40</div>
    <div class="bun-calories">365 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class "bun-type">
        <img src="icons/extras-images/2.jfif" class="product-images" alt="Onion Rings">
        <div class="bun-name">Onion Rings</div>
    </div>
    <div class="bun-cost">₹45</div>
    <div class="bun-calories">320 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/extras-images/3.jpg" class="product-images" alt="Cheese Slice ">
        <div class="bun-name">Cheese Slice </div>
    </div>
    <div class="bun-cost">₹15</div>
    <div class="bun-calories">60-70 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>


    <div class="bun-type">
        <img src="icons/extras-images/4.jfif" class="product-images" alt="Avocado">
        <div class="bun-name">Avocado</div>
    </div>
    <div class="bun-cost">₹60</div>
    <div class="bun-calories">160-190 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/extras-images/5.webp" class="product-images" alt="Omelette (Egg)">
        <div class="bun-name">Omelette (Egg)</div>
    </div>
    <div class="bun-cost">₹20</div>
    <div class="bun-calories">154-160 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>
      `;
  } else if (index == 6) {
    buttonHTML = `
        <div class="menu-section-header">product-name</div>
        <div class="menu-section-header">cost</div>
        <div class="menu-section-header">calories</div>
        <div class="menu-section-header">cart</div>
        <div class="bun-type">
        <img src="icons/glutten-images/1.jfif" class="product-images" alt="Gluten-Free Burger Bun">
        <div class="bun-name">Gluten-Free Burger Bun </div>
    </div>
    <div class="bun-cost">₹60 </div>
    <div class="bun-calories">250-270 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/glutten-images/2.jfif" class="product-images" alt="Lettuce Wrap ">
        <div class="bun-name">Lettuce Wrap </div>
    </div>
    <div class="bun-cost">₹10 </div>
    <div class="bun-calories">5-10 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>
        `;
  } else if (index == 7) {
    buttonHTML = `
          <div class="menu-section-header">product-name</div>
          <div class="menu-section-header">cost</div>
          <div class="menu-section-header">calories</div>
          <div class="menu-section-header">cart</div>
          <div class="bun-type">
        <img src="icons/sc-images/1.png" class="product-images" alt="Maharaja Burger">
        <div class="bun-name">Maharaja Burger</div>
    </div>
    <div class="bun-cost">₹150</div>
    <div class="bun-calories">450-500 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/sc-images/2.jpg" class="product-images" alt="Aloo Tikki Burger">
        <div class="bun-name">Aloo Tikki Burger</div>
    </div>
    <div class="bun-cost">₹60</div>
    <div class="bun-calories">250-300 calories</div>
    <div class "add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/sc-images/3.jfif" class="product-images" alt="Tandoori Chicken Burger">
        <div class="bun-name">Tandoori Chicken Burger</div>
    </div>
    <div class="bun-cost">₹110</div>
    <div class="bun-calories">350-400 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/sc-images/4.jfif" class="product-images" alt="Paneer Tikka Burger">
        <div class="bun-name">Paneer Tikka Burger</div>
    </div>
    <div class="bun-cost">₹90</div>
    <div class="bun-calories">300-350 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>

    <div class="bun-type">
        <img src="icons/sc-images/5.jfif" class="product-images" alt="Veggie Masala Burger">
        <div class="bun-name">Veggie Masala Burger</div>
    </div>
    <div class="bun-cost">₹70</div>
    <div class="bun-calories">250-300 calories</div>
    <div class="add-to-cart">
        <button class="add-to-cart-button">Add to Burger</button>
    </div>
          `;
  } else if (index == 8) {
    buttonHTML = `
            <div class="menu-section-header">product-name</div>
            <div class="menu-section-header">cost</div>
            <div class="menu-section-header">calories</div>
            <div class="menu-section-header">cart</div>
            <div class="bun-type">
            <img src="icons/beverages-images/1.jfif" class="product-images" alt="Veggie Masala Burger">
            <div class="bun-name">Coca-Cola (Cola)</div>
        </div>
        <div class="bun-cost">₹25</div>
        <div class="bun-calories">Approximately 42 calories per 100 ml</div>
        <div class="add-to-cart">
            <button class="add-to-cart-button">Add to Order</button>
        </div>
    
        <div class="bun-type">
        <img src="icons/beverages-images/2.jpg" class="product-images" alt="Veggie Masala Burger">
            <div class="bun-name">Pepsi (Cola)</div>
        </div>
        <div class="bun-cost">₹25</div>
        <div class "bun-calories">Approximately 42 calories per 100 ml</div>
        <div class="add-to-cart">
            <button class="add-to-cart-button">Add to Order</button>
        </div>
    
        <div class="bun-type">
        <img src="icons/beverages-images/3.jpg" class="product-images" alt="Veggie Masala Burger">
            <div class="bun-name">Sprite (Lemon-Lime Soda)</div>
        </div>
        <div class="bun-cost">₹25</div>
        <div class="bun-calories">Approximately 41 calories per 100 ml</div>
        <div class="add-to-cart">
            <button class="add-to-cart-button">Add to Order</button>
        </div>
    
        <div class="bun-type">
        <img src="icons/beverages-images/4.webp" class="product-images" alt="Veggie Masala Burger">
            <div class="bun-name">Thums Up (Cola)</div>
        </div>
        <div class="bun-cost">₹25</div>
        <div class="bun-calories">Approximately 45 calories per 100 ml</div>
        <div class="add-to-cart">
            <button class="add-to-cart-button">Add to Order</button>
        </div>
    
        <div class="bun-type">
        <img src="icons/beverages-images/5.webp" class="product-images" alt="Veggie Masala Burger">
            <div class="bun-name">Limca (Lemon-Lime Soda)</div>
        </div>
        <div class="bun-cost">₹25</div>
        <div class="bun-calories">Approximately 44 calories per 100 ml</div>
        <div class="add-to-cart">
            <button class="add-to-cart-button">Add to Order</button>
        </div>
            `;
  }
  let menuHtml = buttonHTML;
  document.querySelector(".menu-section").innerHTML = menuHtml;

  // Attach event listeners to each "Add to Cart" button individually
  const addButtons = document.querySelectorAll(".add-to-cart-button");
  addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      addTotal(index);
      addCart(index);
    });
  });
}

let cartItemsList = [];
function addCart(index) {
  const bunName = document.querySelectorAll(".bun-name")[index].innerText;
  const bunCost = document.querySelectorAll(".bun-cost")[index].innerText;
  console.log(bunName);
  const cartObject = {
    bunName,
    bunCost,
  };
  cartItemsList.push(cartObject);
  cartHTMLPrint();
}

function cartHTMLPrint() {
  let cartListHTML = [];
  cartItemsList.forEach((cartObject, index) => {
    const { bunName, bunCost } = cartObject;
    let itemList = `
    <div class="bun-name">${bunName}</div>
    <div class="bun-cost">${bunCost}</div>
    <button
    class="delete-button ">Delete</button>
    `;
    cartListHTML += itemList;
  });
  document.querySelector(".listcard").innerHTML = cartListHTML;
  document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      cartItemsList.splice(index, 1);
      cartHTMLPrint();
      selectedItems.splice(index, 1);
      sumCost(selectedItems);
    });
  });
}

function addTotal(index) {
  const bunCost = document.querySelectorAll(".bun-cost")[index].innerText;
  const numericValue = extractNumericPart(bunCost);
  const itemCost = Number(numericValue);
  selectedItems.push(itemCost);
  sumCost(selectedItems);
}

function sumCost(selectedItems) {
  let sum = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    sum += selectedItems[i];
  }
  document.querySelector(".cost").innerHTML = sum;
}

function extractNumericPart(inputString) {
  const numericPart = inputString.match(/\d+/);

  if (numericPart) {
    return numericPart[0];
  } else {
    return "";
  }
}

const itemButtons = document.querySelectorAll(".bun-item-button");
itemButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showMenu(index);
  });
});
