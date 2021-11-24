window.addEventListener('DOMContentLoaded', function() {
    var elGrabbed = false;
    var baseCoords = {X:0, Y:0};
    var scroll = {X:0,Y:0};
    const factor = 2;

    document.head.innerHTML+=`<style>
        .grabbable {cursor: grab;}
        .grabbing {cursor: grabbing;}
    </style>`;

    function getScroll(newCoords) {
        let X,Y=0;

        if(elGrabbed.classList.contains('grabX')) {
            // définition du scroll en fonction du facteur
            X = factor*(newCoords.X - baseCoords.X);

            // ajoute le scroll déjà effectué sur cet élément pour ne pas repartir de 0;
            if(elGrabbed.dataset.scrollX) X+=Number(elGrabbed.dataset.scrollX);


            // réinitialisation de la coordonnée de base pour reprendre le scroll facilement
            if(X>0) {
                // baseCoords[0] = newCoords[0];
            }
        }

        // idem mais pour l'axe Y
        if(elGrabbed.classList.contains('grabY')) {
            Y = factor*(newCoords.Y - baseCoords.Y);
            if(elGrabbed.dataset.scrollY) Y+=Number(elGrabbed.dataset.scrollY);

            if(Y>0) {
                // baseCoords[1] = newCoords[1];
            }
        }
        return {
            X: X||0,
            Y: Y||0
        };
    }

    function endGrab(e) {
        if(elGrabbed) {
            elGrabbed.removeEventListener('mouseleave', endGrab);
            elGrabbed.classList.remove('grabbing');
            elGrabbed.dataset.scrollX = scroll.X;
            elGrabbed.dataset.scrollY = scroll.Y;
            elGrabbed = false;
            baseCoords = {X:0, Y:0};
        }
    }

    document.addEventListener('mousedown', function(e) {
        baseCoords = {
            X:e.pageX,
            Y:e.pageY
        };
        elGrabbed = e.target.closest('.grabbable');
        console.log(elGrabbed);

        elGrabbed.addEventListener('mouseleave', endGrab)
        elGrabbed.classList.add('grabbing');
    })

    document.addEventListener('mouseup', endGrab);

    document.addEventListener('mousemove', function(e) {
        if(elGrabbed) {
            e.preventDefault();
            let coords = {
                X:e.pageX,
                Y:e.pageY
            };
            
            scroll = getScroll(coords);

            elGrabbed.childNodes.forEach(element => {
                element.style=`transform: translate(${scroll.X}px, ${scroll.Y}px)`
            });
        }
    })
})

