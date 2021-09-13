const form = document.querySelector('form');
const resultP = document.querySelector('#results-p');
const resultT = document.querySelector('#results-t');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = input.value
    resultP.innerText  = 'Loading the weather .. ';

    fetch('http://localhost:3000/gw?address=' + address)
        .then(res => res.json())
        .then((data) => {
            if (data.error) {
                resultP.innerText = data.error;
                return ;
            } 
            console.log(data);
            resultP.innerText = data.place;
            resultT.innerText = data.temp;
        });

});

