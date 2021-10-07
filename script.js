var compteurs = 0;

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const cisor = document.querySelector('.cisor')

const Pimg = document.querySelector('.Pimg')
const Cimg = document.querySelector('.Cimg')

const PscoreSpan = document.querySelector('.Pscore')
const CscoreSpan = document.querySelector('.Cscore')
let pScore = 0
let cScore = 0

const images_option = ['rock', 'paper', 'cisor']

const Pchoice = (i) => {
    Pimg.src = 'assets/' + images_option[i] + '.png'
    Pimg.value = images_option[i]
    compareHands()
}
const Cchoice = (i) => {
    Cimg.src = 'assets/' + images_option[i] + '.png'
    Cimg.value = images_option[i]
}

rock.addEventListener('click', () => {
    Cchoice(Math.floor(Math.random() * 3))
    Pchoice(0)
})
paper.addEventListener('click', () => {
    Cchoice(Math.floor(Math.random() * 3))
    Pchoice(1)
})
cisor.addEventListener('click', () => {
    Cchoice(Math.floor(Math.random() * 3))
    Pchoice(2)
})

const compareHands = () => {

    if (compteurs < 3) {
        compteurs++; document.getElementById("compteurs").innerText = compteurs;
    }


    switch (compteurs) {
        case 1:
            document.getElementById("premier_tour").setAttribute("src", "assets/roundselected.png")
            break;
        case 2:
            document.getElementById("deuxieme_tour").setAttribute("src", "assets/roundselected.png")
            break;
        case 3:
            document.getElementById("troisieme_tour").setAttribute("src", "assets/roundselected.png")
            break;

        default:
            break;
    }

    if (compteurs < 4) {
        if (Pimg.value == 'rock') {
            if (Cimg.value == 'paper') {
                cScore += 1
            }
            else if (Cimg.value == 'cisor') {
                pScore += 1
            }
            else if (Cimg.value == 'rock') {

            }
        }
        else if (Pimg.value == 'cisor') {
            if (Cimg.value == 'rock') {
                cScore += 1
            }
            else if (Cimg.value == 'paper') {
                pScore += 1
            }
            else if (Cimg.value == 'cisor') {

            }
        }
        if (Pimg.value == 'paper') {
            if (Cimg.value == 'cisor') {
                cScore += 1
            }
            else if (Cimg.value == 'rock') {
                pScore += 1
            }
            else if (Cimg.value == 'paper') {

            }
        }
        PscoreSpan.textContent = pScore
        CscoreSpan.textContent = cScore
    }

    if (compteurs == 3) {
        if (pScore > cScore) {
            setTimeout(popupWin, 500); 
        } else {
            setTimeout(popupLoose, 500); 
        }    
        setTimeout(reset, 5000); 
    }

}

function reset() {
    document.getElementById("button").click();
}

function popupWin() {
    document.getElementById("btn-winner").click();
}

function popupLoose() {
    document.getElementById("btn-loose").click();
}