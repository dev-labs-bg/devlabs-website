/**
 * kjasdhkjsadh kadsh kajsdh askjdh adskjh adskjha kjdhsa jadksh jaksdh jakds
 *
 * akjsdjsadhjdasgjhads config file!
 */
(function(){

    /**
     * Bla bla bl abaala a abala bla bla
     * https://stackoverflow.com/a/31627191/1333836
     */
    const allowedKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
    const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    let konamiCodePosition = 0;

    window.addEventListener('keyup', (e) => {
        // get the value of the key code from the key map - allowedKeys
        const key = allowedKeys[e.keyCode];
        const requiredKey = konamiCode[konamiCodePosition];

        if (key == requiredKey) {
            konamiCodePosition++;

            if (konamiCodePosition == konamiCode.length) {
                changeTeamPictureToMustachifiedVersions();
            }
        }
        else {
            konamiCodePosition = 0;
        }
    });

    function changeTeamPictureToMustachifiedVersions() {
        const teamImages = document.querySelectorAll('.js-team');

        teamImages.forEach(teamImage => {
            const splitByDash = teamImage.src.split('/');
            const name = splitByDash[splitByDash.length - 1].split('.')[0];

            if (teamPicturesWithMoustaches[name]) {
                teamImage.src = teamPicturesWithMoustaches[name];
            }
        });

        // TODO: Turn off the 'keyup' event on the window
        // TODO: Scroll to the team section
    }
})();
