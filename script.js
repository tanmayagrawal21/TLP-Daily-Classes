classURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRRmk-VO1WC1VACF8pgw2MFFVDU2IjlzA44a7GHMzRXZA5IY5PqfZDUVHmRn3hXXBBxapNogbTxpSMz/pub?gid=0&single=true&output=csv';

dateURL='https://docs.google.com/spreadsheets/d/e/2PACX-1vRRmk-VO1WC1VACF8pgw2MFFVDU2IjlzA44a7GHMzRXZA5IY5PqfZDUVHmRn3hXXBBxapNogbTxpSMz/pub?gid=635270464&single=true&output=csv'


function initClasses() {
  Papa.parse(classURL, {
    download: true,
    header: true,
    complete: function (results) {
      var data = results.data
      var location= document.querySelector(".classes")
      location.innerHTML="";

      Content.putClassesOnDOM(results, location )
    }
  })
}

function initDate(){
  Papa.parse(dateURL, {
    download: true,
    header: true,
    complete: function (results) {
      var data = results.data
      var target= document.querySelector('.date');
      target.innerHTML="";
      Content.putDateOnDom(data, target)
    }
  })
}

Content = {}
Content.putDateOnDom= function(data, target){
  console.log(data);
  data.forEach(function(row){
    if(row.TIME=='DAY'){
      target.innerHTML+=row.VALUE;
      target.innerHTML+="<br>";
    }

    if(row.TIME=='DATE'){
      target.innerHTML+=row.VALUE;
      target.innerHTML+="<br>";
    }
  });
}
Content.putClassesOnDOM = function (data, target) {
    data.data.forEach(function (row) {
    var eve = document.createElement('div');
    eve.classList.add('eve');
    eve.innerHTML =
      `
      Teacher: ${row.Teacher} <br>
      Students: ${row.Students} <br>
      Time: ${row.Time}<br>
      Class: ${row.Class} ${row.Board}
      `

    target.appendChild(eve);
  });
}

window.addEventListener('DOMContentLoaded', initDate)

window.addEventListener('DOMContentLoaded', initClasses);
