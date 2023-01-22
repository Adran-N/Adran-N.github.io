Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Dragon Fruit', 'Pineapples', 'Strawberries', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Mark',
        data: [-10, 7, 9, 7, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});