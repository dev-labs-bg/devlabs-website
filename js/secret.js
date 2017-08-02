/**
 * This is a secret konami code function. When you press the Konami combination
 * it is going to scroll to the team section and all team member images will be
 * changed with beards on them.
 *
 * If you want to add a new person to devlabs website and add him to
 * teamPicturesWithMoustaches, please go to config file and follow the instructions
 * added as comments!
 */
(function(){

    /**
     * Function Konami Code from:
     * https://stackoverflow.com/a/31627191/1333836
     */
    const allowedKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
    const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    let konamiCodePosition = 0;

    const keyupEvent = window.addEventListener('keyup', (e) => {
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

        // Turn off the 'keyup' event on the window
        window.removeEventListener('keyup', keyupEvent);

        // TODO: Scroll to the team section
    }
})();
