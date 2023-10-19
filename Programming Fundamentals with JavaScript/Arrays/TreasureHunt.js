function treasureHunt(input) {
    if (input.length == 0) {
        return;
    }

    let chest = input.shift().split(`|`);
    console.log(chest);




}




treasureHunt((["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]))