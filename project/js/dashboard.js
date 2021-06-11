$('.counter-up').counterUp({
    delay: 10,
    time: 2000
});

let databar = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11']
let orderCounter = [7,5,6,4,8,4,8,6,8,9,4]
let viewerCounter = [13,12,15,14,20,17,19,16,23,33,16]

var ov= document.getElementById('ov');
var ovChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: databar,
        datasets: [{
            label: 'Order Count',
            data: orderCounter,
            backgroundColor: [
                '#007bff30',
            ],
            borderColor: [
                '#007bff30',
            ],
            borderWidth: 1,
            tension: 0
        },
        {
            label: 'Viewer Count',
            data: viewerCounter,
            backgroundColor: [
                '#28a74530',
            ],
            borderColor: [
                '#28a74530',
            ],
            borderWidth: 1,
            tension: 0
        }]
    },
    options: {
        scales: {
            yAxes: [
                {
                   display: false,
                   ticks: {
                       display: false
                   },
                    beginAtZero: true
                }
            ],
            xAxes: [
                {
                display: false,
                gridLines: [
                    {display: false}]
                }
            ]
          
        },
        legend:{
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});

let OrderfromPlace = [5,33,5,4,8];
let Places = ["YGN","MDY","NPY","SHAN","MGW"];

var op = document.getElementById('op');
var opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: Places ,
        datasets: [{
            label: '# of Votes',
            data: OrderfromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes:[{   
                   display: false,
                   ticks: {
                    beginAtZero: true
                   }
                }],
            xAxes: [{
                  display: false,
                }]
        },
        legend:{
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});

