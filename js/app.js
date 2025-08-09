setInterval(() =>{

  const date = new Date()
  let mainHours = date.getHours(),
    mainMinutes = date.getMinutes(),
    mainSeconds = date.getSeconds();

  mainHours = mainHours < 10 ? `0${mainHours}` : mainHours;
  mainMinutes = mainMinutes < 10 ? `0${mainMinutes}` : mainMinutes;
  mainSeconds = mainSeconds < 10 ? `0${mainSeconds}` : mainSeconds;

  document.querySelector('.hours').textContent = mainHours;
  document.querySelector('.minutes').textContent = mainMinutes;
  document.querySelector('.seconds').textContent = mainSeconds;

    
}, 1000)