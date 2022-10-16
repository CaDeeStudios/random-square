const highlighter = document.querySelector('#mouse-radius');
const radius = 50;

//window.onload = cursor();
addElement();

function cursor() {
    try {
        document.addEventListener('mousemove', (e) => {
            const highlighter = document.querySelector('#mouse-radius');

            highlighter.style.height = `${radius * 2}px`;
            highlighter.style.width = `${radius * 2}px`;

            highlighter.style.top = `${e.y - radius}px`;
            highlighter.style.left = `${e.x - radius}px`;

        });

    } catch (error) {
        console.error(error);
    }
};


function addElement() {
    try {
        for (let i = 1; i < 1500; i++) {

            const stage = document.querySelector('#stage');
            const newElement = document.createElement('span');

            newElement.id = 'element' + i;
            newElement.classList.add('element');

            stage.appendChild(newElement);

            let currentElement = `#element${i}`;
            const randomY = Math.ceil(Math.random() * 100);
            const randomX = Math.ceil(Math.random() * 100);
            const randomColor = ['#5793FF', '#8BE836', '#FFC142', '#E83938', '#C100FF'];

            for (let i = 0; i < 1; i++) {
                document.querySelector(currentElement).style.backgroundColor = randomColor[Math.floor(Math.random() * randomColor.length)];
            }
            document.querySelector(currentElement).style.position = 'absolute';
            document.querySelector(currentElement).style.top = `${randomY}vh`;
            document.querySelector(currentElement).style.left = `${randomX}vw`;

            document.querySelector(`#element${i}`).addEventListener('mouseover', () => {
                let currentElement = `#element${i}`;
                const randomY = Math.ceil(Math.random() * 100);
                const randomX = Math.ceil(Math.random() * 100);
                const randomColor = ['#5793FF', '#8BE836', '#FFC142', '#E83938', '#C100FF'];

                for (let i = 0; i < 1; i++) {
                    document.querySelector(currentElement).style.backgroundColor = randomColor[Math.floor(Math.random() * randomColor.length)];
                }
                document.querySelector(currentElement).style.position = 'absolute';
                document.querySelector(currentElement).style.top = `${randomY}vh`;
                document.querySelector(currentElement).style.left = `${randomX}vw`;
            });
        }

    }

    catch (error) {
        console.error(error);
    }
};