(function($){
    alert("Welcome to Priyanka and Poppy's Pizza Place");
    document.getElementById("addToppingsBTN").addEventListener("click",addToppings);
    $("#cancelBTN").click(cancelPizza);

})($);

function orderPizza(){
    alert("The pizza is on its way!");
}

function addToppings(){
    alert("Alright, we'll add some green peppers and onions");
}

function cancelPizza(){
    alert("Never mind ...");
}