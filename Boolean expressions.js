// Here’s our AND operator. With AND this combined conditional is true only if the first part AND the second part are true.

if (inStock==true && onSale== true){
    alert("Buy Buy Buy");
}

//Now we’re using both AND and OR in the same conditional expression. This one says: If an item is in stock AND it’s either on sale, OR the price is less than 60, then buy. 
//We get the result of OR first and then use it to compute the result of AND
if (inStock==true && (onSale== true || price < 60)){
    alert("Buy Buy Buy");
}
