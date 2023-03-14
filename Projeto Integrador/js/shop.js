let products = {
	data: [
	  {
		productName: "Brinquedo Chalesco Osso de Pelúcia",
		category: "Pelúcias",
		price: "21.89",
		image: "/images/products/Osso-Branco-de-Pelucia.jpg",
		link: "/products/Osso-Branco-de-Pelucia.html"
	  },
	  {
		productName: "Brinquedo Duratoys Bola Cravo Pula Pula Vermelha",
		category: "Bolinhas",
		price: "3.15",
		image: "../images/products/Bola-Cravo-Pula-Pula-Vermelha.jpg",
		id: "2"
	  },
	  {
		productName: "Brinquedo Frisbee Furacão Plástico Black",
		category: "Frisbees",
		price: "9.81",
		image: "../images/products/Frisbee-Furacão-Plástico-Black.jpg",
	  },
	  {
		productName: "Brinquedo Chalesco Pelúcia Manopla Colorida - Tam. Único",
		category: "Pelúcias",
		price: "21.68",
		image: "../images/products/Pelúcia-Manopla-Colorida.jpg",
	  },
	  {
		productName: "Brinquedo Osso Nylon Sabor Bacon para Cães",
		category: "Halteres",
		price: "62.99",
		image: "../images/products/Osso-Nylon-Sabor-Bacon-para-Cães.jpg",
	  },
	  {
		productName: "Brinquedo de Vinil LCM Bola Cravinho Amarela",
		category: "Bolinhas",
		price: "9.44",
		image: "../images/products/Bola-Amarela.jpg",
	  },
	  {
		productName: "Brinquedo Pet Injet Osso Mass Dental Flex Azul",
		category: "Halteres",
		price: "8.00",
		image: "../images/products/Osso-Mass-Dental-Flex-Azul.jpg",
	  },
	  {
		productName: "Brinquedo Chuckit Bola Ultra Squeaker Apito 1 Unidade",
		category: "Bolinhas",
		price: "83.69",
		image: "../images/products/Bola-Chuckit-Ultra-Squeaket-Apito.png",
	  },
	  {
		productName: "Brinquedo LCM Bolinha com Penas Cat Toy Azul para Gato",
		category: "Bolinhas",
		price: "7.11",
		image: "../images/products/Brinquedo-Bolinha-Toys-Cat.jpg",
	  },
	  
	],
  };

  /*const mysql = require('mysql');

// create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

// connect to the database
connection.connect();

// select the data from the database
const query = 'SELECT * FROM products';
connection.query(query, (error, results) => {
  if (error) throw error;

  // format the prices
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
    currency: 'BRL',
    currencyDisplay: 'symbol',
    style: 'currency'
  };

  results.forEach(product => {
    product.price = parseFloat(product.price.replace(',', '.')).toLocaleString('pt-BR', options);
  });

  console.log(results);
});

// close the connection to the database
connection.end();

  const options = {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
	useGrouping: true,
	currency: 'BRL',
	currencyDisplay: 'symbol',
	style: 'currency'
  };

  products.data.forEach(product => {
	product.price = parseFloat(product.price.replace(',', '.')).toLocaleString('pt-BR', options);
  });*/

  for (let i of products.data) {
	//Create Card
	let card = document.createElement("div");
	//Card should have category and should stay hidden initially
	card.classList.add("card", i.category, "hide");
	// Create a link tag and set its href to the link property of the current product
	if (i.link) {
		let link = document.createElement("a");
		link.setAttribute("href", i.link);
		card.appendChild(link);
	}
	//container
	let container = document.createElement("div");
	container.classList.add("divisor");
	//image
	let image = document.createElement("img");
	image.classList.add("product-img");
	image.setAttribute("src", i.image);
	container.appendChild(image);
	//product name
	let name = document.createElement("h2");
	name.classList.add("product-name");
	name.innerText = i.productName.toUpperCase();
	container.appendChild(name);
	//price
	let price = document.createElement("span");
	price.classList.add("product-price");
	price.innerText = "R$ " + i.price;
	container.appendChild(price);
	// Add cart button
	let addCart = document.createElement("i");
	addCart.classList.add("bx", "bx-shopping-bag", "add-bag");
	container.appendChild(addCart);
	card.appendChild(container);
	document.getElementById("products").appendChild(card);
}
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
	//Button class code
	let buttons = document.querySelectorAll(".button-value");
	buttons.forEach((button) => {
	  //check if value equals innerText
	  if (value.toUpperCase() == button.innerText.toUpperCase()) {
		button.classList.add("active");
	  } else {
		button.classList.remove("active");
	  }
	});
	//select all cards
	let elements = document.querySelectorAll(".card");
	//loop through all cards
	elements.forEach((element) => {
	  //display all cards on 'all' button click
	  if (value == "all") {
		element.classList.remove("hide");
	  } else {
		//Check if element contains category class
		if (element.classList.contains(value)) {
		  //display element based on category
		  element.classList.remove("hide");
		} else {
		  //hide other elements
		  element.classList.add("hide");
		}
	  }
	});
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
	//initializations
	let searchInput = document.getElementById("search-input").value;
	let elements = document.querySelectorAll(".product-name");
	let cards = document.querySelectorAll(".card");
	//loop through all elements
	elements.forEach((element, index) => {
	  //check if text includes the search value
	  if (element.innerText.includes(searchInput.toUpperCase())) {
		//display matching card
		cards[index].classList.remove("hide");
	  } else {
		//hide others
		cards[index].classList.add("hide");
	  }
	});
  });
  //Initially display all products
  window.onload = () => {
	filterProduct("all");
  };

  function user(){
	window.location.href = '../assets/login.html'
  }

  const modeSwitch = document.querySelector('#mode-switch');
  const logo = document.querySelector('.logo');
  const changeColor = document.querySelector("#change-class");


  modeSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');

	if (document.body.classList.contains('dark-mode')) {
	  logo.setAttribute('src', '../images/logo-dark-mode.png');
	  changeColor.classList.replace('bx-toggle-left', 'bx-toggle-right');
	} else {
	  logo.setAttribute('src', '../images/logo-verdin-d.png');
	  changeColor.classList.replace('bx-toggle-right', 'bx-toggle-left');
	}
  });



