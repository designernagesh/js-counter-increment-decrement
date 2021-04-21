let btnIncrement = document.getElementById("btnIncrement"),
    btnDecrement = document.getElementById("btnDecrement"),
    counter = document.getElementById("counter");

    counter.style.fontWeight = 'bold';

    let count = 0;

    counter.innerHTML = count;

    numIncrement = () => {
      count++;
      counter.innerHTML = count;
      if(count > 0){
        counter.style.color = 'green'
      }
    }

    numDecrement = () => {
      count--;
      counter.innerHTML = count;
      if(count < 0){
        counter.style.color = 'red';
      }
    }

    btnIncrement.addEventListener('click', numIncrement);
    btnDecrement.addEventListener('click', numDecrement);