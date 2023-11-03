const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome on Android from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    showButton();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if(deferredPrompt !== null){
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;
        console.log(choiceResult);
        if(choiceResult.outcome === 'accepted'){
            console.log('User accepted the A2HS prompt');
            }else{
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt=null;
            hideButton();
            }

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the installation to the console.
    console.log('A2HS installed');
    // Hide the app provided install button, since we've installed
    hideButton();
});
