// OPEN AND CLOSE BAG
const bagIcon = document.querySelector('#shopping-bag');
const bag = document.querySelector('.bag');
const closeBag = document.querySelector('#bag-close');

bagIcon.addEventListener('click', () => {
	bag.classList.add('active');
})

closeBag.addEventListener('click', () => {
	bag.classList.remove('active');
})


// Start when the document is ready
if (document.readyState == "loading") {
	document.addEventListener('DOMContentLoaded', start);
} else {
	start();
}

// ================= START =================
function start() {
	addEvents();
}

// ================= UPDATE AND RERENDER =================
function update() {
	addEvents();
	updateTotal();
}

// ================= ADD EVENTS =================
function addEvents() {
	// Remove items from bag
	let bagRemove_btns = document.querySelectorAll('.bag-remove');
	console.log(bagRemove_btns);
	bagRemove_btns.forEach((btn) => {
		btn.addEventListener('click', handle_removeBagItem);
	});

	// Change item quantity
	let bagQuantity_inputs = document.querySelectorAll('.bag-quantity');
	bagQuantity_inputs.forEach((input) => {
		input.addEventListener("change", handle_changeItemQuantity);
	});

	// Add items to bag
	let addBag_btns = document.querySelectorAll(".add-bag");
	addBag_btns.forEach(btn => {
		btn.addEventListener('click', handle_addBagItem);
	});

	// Buy Order
	const buy_btn = document.querySelector(".btn-buy")
	buy_btn.addEventListener('click', handle_buyOrder);
}

// ================= HANDLE EVENTS FUNCTIONS =================
let itemsAdded = []
function handle_addBagItem() {
	let product = this.parentElement;
	let name = product.querySelector('.product-name').innerHTML;
	let price = product.querySelector('.product-price').innerHTML;
	let imgSrc = product.querySelector('.product-img').src;
	console.log(name, price, imgSrc);

	let newToAdd = {
		name,
		price,
		imgSrc,
	};

	// handle item is already exist
	if (itemsAdded.find((el) => el.name == newToAdd.name)) {
		alert("Esse produto já foi adicionado!")
		return;
	} else {
		itemsAdded.push(newToAdd);
	}

	// Add product to bag
	let bagBoxElement = BagBoxComponent(name, price, imgSrc);
	let newNode = document.createElement("div");
	newNode.innerHTML = bagBoxElement;
	const bagContent = bag.querySelector('.bag-content')
	bagContent.appendChild(newNode);

	update();
}

	function handle_removeBagItem() {
	this.parentElement.remove();
	itemsAdded = itemsAdded.filter(
		(el) => 
		el.name != 
		this.parentElement.querySelector('.bag-product-title').innerHTML
		);

	update();
}

function handle_changeItemQuantity() {
	if (isNaN(this.value) || this.value < 1) {
		this.value = 1;
	}
	this.value = Math.floor(this.value); // to keep it integer

	update();
}

function handle_buyOrder(){
	if(itemsAdded.length <= 0){
		alert("Ainda não há produtos selecionados! \nPor favor adicione um produto ao carrinho primeiro.");
		return;
	}
	const bagContent = bag.querySelector('.bag-content');
	bagContent.innerHTML = '';
	alert("Sucesso!");
	itemsAdded = [];

	window.location.href = '../assets/buy.html'

	update();
}

// ================= UPDATE AND RERENDER FUNCTIONS =================
function updateTotal() {
	let bagBoxes = document.querySelectorAll('.bag-box');
	const totalElement = bag.querySelector('.total-price');
	let total = 0;
	bagBoxes.forEach((bagBox) => {
		let priceElement = bagBox.querySelector('.bag-price');
		let price = parseFloat(priceElement.innerHTML.replace("R$", ""));
		let quantity = bagBox.querySelector('.bag-quantity').value;
		total += price * quantity;
	});

	// keep 2 digits after the decimal point
	total = total.toFixed(2);
	// or you can use also
	// total = Math.round(total * 100) / 100;

	totalElement.innerHTML = "R$ " + total;
}

// ================= HTML COMPONENTS =================
function BagBoxComponent(name, price, imgSrc) {
	return `
	<div class="bag-box">
	<img src=${imgSrc} alt="" class="bag-img">
	<div class="detail-box">
		<div class="bag-product-title">${name}</div>
		<div class="bag-price">${price}</div>
		<input type="number" value="1" class="bag-quantity">
	</div>

	<!-- REMOVE BAG -->
	<i class='bx bx-trash-alt bag-remove'></i>
	</div>
	`;
}

