function addingEventListener() {
    // Get the button element
    const button = document.getElementById('button');

    // Define the event handler function
    function clickAlert() {
        alert('I was clicked!');
    }

    // Attach the event listener
    button.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
addingEventListener();
