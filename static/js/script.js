var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: '_',
    delay: 70  
});

typewriter.typeString('Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Student')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Entrepreneur')
    .pauseFor(2000)
    .start();