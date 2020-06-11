$(document).ready(function (){

  $.ajax({
  url : "http://157.230.17.132:4004/sales",
  method : 'GET',
  success : function (data) {
    console.log(data);
    var sales = {}; // variabile Vendite
    var sold = 0 ; //var venduto
    var salesman = {}; //var venditore

    //ciclo for per recupero data dal response
    for (var i = 0; i < data.length; i++) {
    var momentData = data[i];
    console.log(momentData);

    // data venduto per
    var momentSold = momentData.amount;
    console.log(momentSold)
    sold += momentSold;

    //data del venditore
    var momentSalesman = momentData.salesman;
    console.log(momentSalesman)
    //data moment
    moment.locale('it');
    var now = moment(momentData[i].date, 'DD/MM/YYYY').format('MMMM');
    console.log(now)


    // parte l'if else
    if()

  }

},
  error : function (richiesta,stato,errori) {
  alert("E' avvenuto un errore. "+errore);
  }

  });





  // var ctx = document.getElementById('myChart').getContext('2d');
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //       labels: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre' ],
  //       datasets: [{
  //           label: '# of Votes',
  //           data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //               'rgba(255, 99, 132, 0.2)',
  //               'rgba(54, 162, 235, 0.2)',
  //               'rgba(255, 206, 86, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(153, 102, 255, 0.2)',
  //               'rgba(255, 159, 64, 0.2)',
  //               'rgba(285, 99, 132, 0.2)',
  //               'rgba(56, 162, 235, 0.2)',
  //               'rgba(235, 206, 86, 0.2)',
  //               'rgba(78, 192, 192, 0.2)',
  //               'rgba(155, 102, 255, 0.2)',
  //               'rgba(258, 159, 64, 0.2)',
  //           ],
  //           borderColor: [
  //               'rgba(255, 99, 132, 1)',
  //               'rgba(54, 162, 235, 1)',
  //               'rgba(255, 206, 86, 1)',
  //               'rgba(75, 192, 192, 1)',
  //               'rgba(153, 102, 255, 1)',
  //               'rgba(255, 159, 64, 1)'
  //           ],
  //           borderWidth: 1
  //       }]
  //   },
  //   options: {
  //       scales: {
  //           yAxes: [{
  //               ticks: {
  //                   beginAtZero: true
  //               }
  //           }]
  //       }
  //   }
  // });

});

// var month = {
//   'gennaio' : 0,
//   'febbraio' : 0,
//   'marzo' : 0,
//   'aprile' : 0,
//   'maggio' : 0,
//   'giugno' : 0,
//   'luglio' : 0,
//   'agosto' : 0,
//   'settembre' : 0,
//   'ottobre' : 0,
//   'novembre' : 0,
//   'dicembre' : 0
//
// };
//
