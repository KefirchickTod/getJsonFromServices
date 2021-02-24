const productUrl = "https://api.npoint.io/c07ffd395aec4f42e68b";

console.log("Ініцілізація даних " + productUrl);

$.getJSON(productUrl, function(json){
	


	let titleSelector = $("#productTitle");
	let contentSelector = $("#productContent");

	let sizeProduct = json.size;
	let products = json.product;

	console.log(products, sizeProduct, titleSelector.text());

	titleSelector.append(` <span style = 'color:red;'>(${sizeProduct})</span>`);
	//1. Отримати дані +
	//2. Пройтись по ним циклом 2 рази
	//3. Якщо індекс == 3 то в долар
	//4. Вивести дані на сторінку

	for(let i in products){
		let currentProduct = products[i];
		let result = "";
		result = result + "<br><br><li><ul>";
		for(let j in currentProduct){
			if(parseInt(i) === 3  && j === 'price'){
				currentProduct[j] = currentProduct[j] / 28; 
			}
			result += `<li>${j} = ${currentProduct[j]}</li>`;
		}
		result = result + "</li></ul>";
		contentSelector.append(result);
	}
});
