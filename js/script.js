fetch('http://api.openweathermap.org/data/2.5/weather?q=Dubai,uae&appid=508c8d167161acf53316212480763042')
   .then(function (resp) { return resp.json() } )
   .then(function (data) {
      console.log(data);
      document.querySelector('.heading').textContent = data.name;
      document.querySelector('.temperature-amount').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      document.querySelector('.humidity-amount').textContent = data.main.humidity;      
      document.querySelector('.temperature-type').textContent = data.weather[0]['description'];
   })
   .catch(function () {
   
     //catch any errors
   });	

   