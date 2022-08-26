cards = [{
    content: {
        title: "Test 1",
        description: "test",
    },
    description: { text: "testtest" }
},
{
    content: {
        title: "Test 2",
        description: "test",
    },
    description: { text: "test2test" }
}]
newCard = {
    content: {
        title: "",
        description: "",
    },
    description: { text: "" }
}

function assignNewCard(card) {
    let newCard = {};
    let keys = Object.keys(card)
    for (let key of keys){
        if (typeof(card[key]) == 'object'){
            let recData = assignNewCard(card[key]);
            newCard[key] = recData
        } else {
            newCard[key] = card[key]
        }
    }
    return newCard
}

cards.push(assignNewCard(newCard))
newCard.content.title = 'test3'
console.log(cards[2].content.title)