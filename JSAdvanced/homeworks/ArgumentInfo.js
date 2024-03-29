function argumentInfo() {
    let map = new Map();

    for (let arg of arguments) {
        let type = typeof (arg);
        if (!map.has(type)) {
            map.set(type, 0);
        }
        map.set(type, map.get(type) + 1);
        console.log(`${type}: ${arg}`)
    }

    // console.log([...map.entries()]);

    [...map.entries()].sort((a, b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });