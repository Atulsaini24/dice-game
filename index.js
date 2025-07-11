            let randomNumber1 = Math.floor(Math.random()*6)+1;
            let randomNumber2 = Math.floor(Math.random()*6)+1;
            const element = document.querySelector('.img1');
            if(randomNumber1 === 1){
                element.setAttribute('src', 'dice1.png')
            }else if(randomNumber1===2){
                element.setAttribute('src', 'dice2.png')
            }else if(randomNumber1===3){
                element.setAttribute('src', 'dice3.png')
            }else if(randomNumber1===4){
                element.setAttribute('src', 'dice4.png')
            }else if(randomNumber1===5){
                element.setAttribute('src', 'dice5.png')
            }

            const element2 = document.querySelector('.img2')
            if(randomNumber2===1){
                element2.setAttribute('src', 'dice1.png')
            }else if(randomNumber2===2){
                element2.setAttribute('src', 'dice2.png')
            }else if(randomNumber2===3){
                element2.setAttribute('src', 'dice3.png')
            }else if(randomNumber2===4){
                element2.setAttribute('src', 'dice4.png')
            }else if(randomNumber2===5){
                element2.setAttribute('src', 'dice5.png')
            }

            const element3 = document.querySelector('h1')
            if(randomNumber1>randomNumber2){
                element3.textContent = 'Player 1 Wins!'
            }else if(randomNumber1<randomNumber2){
                element3.textContent = 'Player 2 Wins!'
            }else if(randomNumber1===randomNumber2){
                element3.textContent = 'Draw!'
            }