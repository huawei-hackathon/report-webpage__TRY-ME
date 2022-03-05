// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Steps Bar Chart
var stepsBarChartHTML = document.getElementById("stepsBarChart");
var stepsBarChart = new Chart(stepsBarChartHTML, {
  type: 'bar',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    datasets: [{
      label: "Step Count",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [6869, 4430, 6471, 3305, 5604, 4196, 4028, 6165, 5460, 3464, 4264, 6391, 7897, 4917, 3962, 5551, 4210, 5009, 6078, 4491, 7890, 3561, 6339, 3470, 6215, 7790, 7030, 7685, 5829, 4742, 4405],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          // min: 0,
          // max: 15000,
          maxTicksLimit: 8,
          beginAtZero: true,
          padding: 20,
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          return number_format(tooltipItem.xLabel) + '/{Month}/{Year}';
        },
        title: function(tooltipItem, chart) {
          return number_format(tooltipItem[0].yLabel) + ' Steps';
        }
      }
    },
  }
});


// Sleep Time Bar Chart
var sleepTimeBarChartHTML = document.getElementById("sleepTimeBarChart");
var sleepTimeBarChart = new Chart(sleepTimeBarChartHTML, {
  type: 'bar',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    datasets: [{
      label: "Sleep Time",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: ['9.3', '8.7', '9.1', '8.9', '9.3', '7.5', '8.4', '9.1', '8.5', '9.4', '9.8', '8.5', '8.4', '10.0', '9.8', '8.0', '9.9', '8.3', '8.8', '7.7', '7.7', '8.1', '8.3', '7.9', '7.7', '9.5', '8.1', '7.5', '8.7', '8.5', '9.8'],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          // min: 0,
          // max: 15000,
          maxTicksLimit: 8,
          beginAtZero: true,
          padding: 20,
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          return number_format(tooltipItem.xLabel) + '/{Month}/{Year}';
        },
        title: function(tooltipItem, chart) {
          return tooltipItem[0].yLabel + ' Hours';
     z   }
      }
    },
  }
});

// Indoor Location Bar Chart
var indoorLocationBarChartHTML = document.getElementById("indoorLocationBarChart");
var indoorLocationBarChart = new Chart(indoorLocationBarChartHTML, {
  type: 'bar',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    datasets: [{
      label: "Living Room",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [8.6, 7.0, 11.3, 8.1, 8.4, 9.4, 8.1, 8.8, 8.5, 8.2, 7.4, 8.9, 8.3, 7.8, 8.4, 6.8, 8.7, 6.6, 9.0, 7.3, 5.0, 9.7, 5.1, 4.6, 8.2, 7.9, 4.4, 7.4, 8.3, 6.7, 8.0]
    }, {
      label: "Bedroom",
      backgroundColor: "#e74a3b",
      hoverBackgroundColor: "#A8362C",
      data: [6.6, 6.9, 6.8, 7.9, 6.5, 6.4, 6.2, 6.3, 6.5, 7.3, 6.6, 7.8, 7.3, 7.3, 7.2, 7.1, 6.5, 7.9, 6.4, 6.7, 7.5, 6.8, 7.8, 7.7, 6.0, 7.4, 7.4, 6.0, 7.3, 6.7, 7.7]
    }, {
      label: "Bathroom",
      backgroundColor: "#36b9cc",
      hoverBackgroundColor: "#247E8C",
      data: [0.7, 1.7, 0.5, 0.8, 0.5, 1.0, 1.1, 0.8, 0.6, 1.4, 1.0, 1.4, 0.6, 1.0, 1.8, 0.8, 0.7, 1.9, 1.8, 1.7, 1.9, 1.5, 1.9, 1.9, 0.6, 2.0, 1.7, 1.9, 0.5, 1.7, 1.5]
    }, {
      label: "Kitchen",
      backgroundColor: "#1cc88a",
      hoverBackgroundColor: "#13875D",
      data: [3.4, 3.0, 3.3, 3.8, 3.0, 3.6, 4.1, 4.1, 4.0, 3.3, 3.8, 3.4, 3.6, 4.3, 3.3, 3.3, 3.3, 3.9, 3.9, 3.3, 4.3, 3.4, 3.6, 4.1, 3.5, 3.1, 4.5, 3.8, 3.1, 3.4, 4.3]
    }, {
      label: "Outside",
      backgroundColor: "#C0CCC9",
      hoverBackgroundColor: "#88908E",
      data: [4.7, 5.4, 2.1, 3.4, 5.6, 3.6, 4.5, 4.0, 4.4, 3.8, 5.2, 2.5, 4.2, 3.6, 3.3, 6.0, 4.8, 3.7, 2.9, 5.0, 5.3, 2.6, 5.6, 5.7, 5.7, 3.6, 6.0, 4.9, 4.8, 5.5, 2.5]
    }
  ]},
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
        stacked: true
      }],
      yAxes: [{
        ticks: {
          // min: 0,
          // max: 24,
          maxTicksLimit: 8,
          beginAtZero: true,
          padding: 20,
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        stacked: true
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          return number_format(tooltipItem.xLabel) + '/{Month}/{Year}';
        },
        title: function(tooltipItem, chart) {
          return tooltipItem[0].yLabel + ' Hours'
        }
      }
    },
  }
});