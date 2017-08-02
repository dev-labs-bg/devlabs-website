/**
 * This is a secret konami code function. When you press the Konami combination
 * it is going to scroll to the team section and all team member images will be
 * changed with beards on them.
 *
 * If you want to add a new person to devlabs website follow these instructions:
 *
 *   1. Pictures are made with the Wurstify chrome extension.
 *   https://chrome.google.com/webstore/search/wurstify?hl=en
 *   When it is turned on all the pictures in the website are changed.
 *   Wurstify replaces all images in your browser with a wurstified version of them,
 *   adding beard to all faces.
 *
 *   2. You can find the base64 code inside the Network tab,
 *   download it (as webp image) and convert it to PNG (https://cloudconvert.com).
 *   We're not using the webp images directly,
 *   because they are supported in Chrome and Opera only :(
 *
 *   3. Upload the PNG to the `team/mustache/name-of-the-team-member`.
 *   Note that the name of the mustachified pic should be the same as the original pic.
 */
(function(){

    /**
     * Function Konami Code from:
     * https://stackoverflow.com/a/31627191/1333836
     */
    const allowedKeys = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
    const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    let konamiCodePosition = 0;

    function keyupKonamiCodeEvent(e) {
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
    }

    window.addEventListener('keyup', keyupKonamiCodeEvent);

    function changeTeamPictureToMustachifiedVersions() {
        const teamImages = document.querySelectorAll('.js-team');

        teamImages.forEach(teamImage => {
            const splitByDash = teamImage.src.split('/');

            // Adds `mustache` subdirectory, the modified awesome pics are there
            splitByDash.splice(splitByDash.length - 1, 0, 'mustache');

            teamImage.src = splitByDash.join('/');
        });

        // Turn off the 'keyup' event on the window
        window.removeEventListener('keyup', keyupKonamiCodeEvent);

        // Scroll to the team section
        $("li[data-link=#our_team]").trigger('click') // magic
    }
})();
