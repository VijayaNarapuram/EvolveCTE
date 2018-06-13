var SessionManager = function () {
    // Private Variables
    var countdownSeconds = 300; //HtmlHelpers.getQueryStringValue('smc') || 300,
    var sessionTimeoutSeconds = 120 * 60, //48 * 60                                // Session timeout is 20 minutes
        promptSeconds = 5 * 60, //5 * 60                                         // Prompt shows for 5 minutes
        secondsBeforePrompt = sessionTimeoutSeconds - countdownSeconds,  // 15 minutes until prompt pops up
        $dlg,                                                            // jQuery Dialog
        displayCountdownIntervalId,                                      // setInterval id, for clean up
        promptToExtendSessionTimeoutId,                                  // setTimeout id, for clean up
        originalTitle = document.title,                                  // grab the HTML <title> (for later)
        extendSessionUrl = '/Session/Extend',                            // URL to call when extending session
        expireSessionUrl = '/Session/Expire';                            // URL to call when expiring session

    // Private Functions
    var endSession = function () {
        //alert("Logout");
        //$dlg.dialog('close');                                            // Close the jQuery Dialog
        location.href = expireSessionUrl;                                // Redirect to the expiration URL
    };

    var displayCountdown = function () {
        var countdown = function () {
            var cd = new Date(count * 1000),                             // Returns milliseconds since 01/01/70
                minutes = cd.getUTCMinutes(),                            // Grab the minutes
                seconds = cd.getUTCSeconds();                            // Grab the seconds

            document.title = 'Expire in ' + minutes + ':' + seconds;     // Update the HTML title
            $('#sm-countdown').html("<b>" + minutes + ':' + seconds + "</b>");           // Update the countdown display
            if (count === 0) {                                           // If we reached zero,
                document.title = 'Session Expired';                      // update the HTML title
                endSession();                                            // and end the session
            }
            count--;
        };
        countdown();                                                      // Call the function once
        displayCountdownIntervalId = window.setInterval(countdown, 1000); // Call the function every second
    };

    var promptToExtendSession = function () {
        SessionShowPopup();
        count = promptSeconds;                                            // Set our counter
        displayCountdown();                                               // Show that dialog!
    };

    var refreshSession = function () {
        //alert(displayCountdownIntervalId);
        //alert(promptToExtendSessionTimeoutId);
        window.clearInterval(displayCountdownIntervalId);                 // Stop calling countdown so
        // we can start a new timer
        var img = new Image(1, 1);                                        // Create a tiny image
        img.src = extendSessionUrl;                                       // and set its source to the
        // extend session url (like
        // poor man's Ajax!)
        window.clearTimeout(promptToExtendSessionTimeoutId);              // Clear the timeout so we can...
        startSessionManager();
        //alert(displayCountdownIntervalId);
        //alert(promptToExtendSessionTimeoutId);
        // ... start it all over!
    };

    // Just a private implementation to actually start our countdown before popup
    var startSessionManager = function () {
        promptToExtendSessionTimeoutId = window.setTimeout(promptToExtendSession, secondsBeforePrompt * 1000);
    };

    $('#SessionContinue').on('click', function (e) {
        e.preventDefault();
        refreshSession();
        $("#SessionPopup").hide();
        document.title = originalTitle; //'TRECA - SIS';
    });
    $('#SessionLogout').on('click', function (e) {
        e.preventDefault();
        endSession(false);
        $("#SessionPopup").hide();
    });

    // Public Functions
    return {
        start: function () {

            startSessionManager();
        },

        extend: function () {
            refreshSession();
        }
    };
}();

SessionManager.start();