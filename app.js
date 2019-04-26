const endpoint = invItems;

const product = []; 

function findMatches(wordToMatch, product) {
    return product.filter(item => {
        //this is where we figure out what item is being search for.
        const regex = new RegExp(wordToMatch, 'gi');
        return item.InvItemName.match(regex) 
        || item.GinNum.match(regex) 
        || item.ProdId.match(regex)
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, items);
    const html = matchArray.map(item => {
        const regex = new RegExp(this.value, 'gi');
        const itemNum = item.ProdId.replace(regex, `<span class="h1">${this.value}</span>`);
        const itemName = item.InvItemName.replace(regex, `<span class="h1">${this.value}</span>`);
        const itemGin = item.GinNum.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
            <li>
                <span class="name">${itemName}, ${itemNum}, ${itemGin}</span>
            </li>`
    });
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


//"ProdId": "1",
// "InvItemName": "Chicken",
// "GinNum": "65040011 - CHICKEN",
// "QtyServUnit": "8",
// "QtyCountUnit": "1",
// "PurchUnit": "HD - Head",
// "CountUnit": "HD - Head",
// "SellUnit": "PC - Piece",
// "Count Frequency": "D - Daily",
// "StandCost": "2.6049"