function nextDay(year, month, day) {

    let dateAsStr = year + `-` + month + `-` + day;

    let date = new Date(dateAsStr);

    date.setDate(date.getDate() + 1);


    function formatDate(date = new Date()) {
        const year = date.toLocaleString('default', { year: 'numeric' });
        const month = date.toLocaleString('default', {
            month: '2-digit',
        });
        const day = date.toLocaleString('default', { day: '2-digit' });

        return [parseInt(year), parseInt(month), parseInt(day)].join('-');
    }

    console.log(formatDate(date));
}

nextDay(2016, 9, 30)