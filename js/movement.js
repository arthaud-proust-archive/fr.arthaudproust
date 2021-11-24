window.addEventListener('DOMContentLoaded', function() {
    var elGrabbed = {X:false, Y:false};
    var baseCoords = {X:0, Y:0};
    var scroll = {X:0,Y:0};
    const factor = 2;

    document.head.innerHTML+=`<style>
        .grabbable {cursor: grab;}
        .grabbing {cursor: grabbing;}
    </style>`;

    function getScroll(direction, newCoord) {
        let scroll;

        if(elGrabbed[direction].classList.contains(`grab${direction}`)) {
            // définition du scroll en fonction du facteur
            scroll = factor*(newCoord[direction] - baseCoords[direction]);

            // ajoute le scroll déjà effectué sur cet élément pour ne pas repartir de 0;
            const dataset = JSON.parse(JSON.stringify(elGrabbed[direction].dataset));
            if(dataset[`scroll${direction}`]) scroll+=Number(dataset[`scroll${direction}`]);


            // réinitialisation de la coordonnée de base pour reprendre le scroll facilement
            if(scroll>0) {
                // baseCoords[direction] = newCoord[direction];
            }
        }
        return scroll;
    }

    function endGrab(e) {
        if(elGrabbed.X) {
            elGrabbed.X.removeEventListener('mouseleave', endGrab);
            elGrabbed.X.classList.remove('grabbing');
            elGrabbed.X.dataset.scrollX = scroll.X;
            elGrabbed.X = false;
            baseCoords = {X:0, Y:0};
        }
        if(elGrabbed.Y) {
            elGrabbed.Y.removeEventListener('mouseleave', endGrab);
            elGrabbed.Y.classList.remove('grabbing');
            elGrabbed.Y.dataset.scrollY = scroll.Y;
            elGrabbed.Y = false;
            baseCoords = {X:0, Y:0};
        }
    }

    document.addEventListener('mousedown', function(e) {
        baseCoords = {
            X:e.pageX,
            Y:e.pageY
        };
        const closest = e.target.closest('.grabbable');
        elGrabbed.X = e.target.closest('.grabbable.grabX');
        elGrabbed.Y = e.target.closest('.grabbable.grabY');
        console.log(elGrabbed);

        const farest = closest===elGrabbed.X?elGrabbed.X:elGrabbed.Y;
        farest.addEventListener('mouseleave', endGrab)
        farest.classList.add('grabbing');
    })

    document.addEventListener('mouseup', endGrab);

    document.addEventListener('mousemove', function(e) {
        if(elGrabbed.X || elGrabbed.Y) {
            e.preventDefault();
            let coords = {
                X:e.pageX,
                Y:e.pageY
            };
            
            if(elGrabbed.X) {
                scroll.X = getScroll('X', coords);
                elGrabbed.X.childNodes.forEach(element => {
                    element.style=`transform: translate(${scroll.X}px, 0px)`
                });
            }

            if(elGrabbed.Y) {
                scroll.Y = getScroll('Y', coords);
                elGrabbed.Y.childNodes.forEach(element => {
                    element.style=`transform: translate(0px, ${scroll.Y}px)`
                });
            }
            
        }
    })
})

