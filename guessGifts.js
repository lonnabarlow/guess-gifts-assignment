var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

function guessGifts(wishlist, presents) { 
    let answer = []
    wishlist.forEach(wishlistItem => {
        for(let i = 0; i < presents.length; i++) {
            if (wishlistItem.size === presents[i].size && wishlistItem.clatters === presents[i].clatters && wishlistItem.weight === presents[i].weight){ 
                answer.push(wishlistItem.name)}
        }

    })
    return answer
}
console.log(guessGifts(wishlist, presents))
