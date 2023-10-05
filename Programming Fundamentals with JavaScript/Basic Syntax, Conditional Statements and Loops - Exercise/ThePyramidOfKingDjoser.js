function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let counter = 1;

    for (let i = 0; i <= base; i += 2) {
        stone += (base - i - 2) * (base - i - 2);
        if (counter % 5 == 0) {
            lazuli += (base - i * 4) - 4;
        } else {
            marble += (base - i * 4) - 4;
        }
        counter++;
    }


    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis required: ${lazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Stone required: ${stone}`);

}

thePyramidOfKingDjoser(10, 0.75)