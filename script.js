// Change the text content dynamically when the button is clicked
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textMessage').textContent = "You changed the text content!";
    document.getElementById('paragraph1').textContent = "First paragraph content has been changed!";
    document.getElementById('paragraph2').textContent = "Second paragraph content is now updated!";
    document.getElementById('paragraph3').textContent = "Third paragraph has new content as well!";
});

// Modify CSS styles via JavaScript when the button is clicked
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#c8e6c9';  // Change background color
    document.querySelector('.message').style.color = '#388e3c';  // Change text color
    document.querySelector('.message').style.fontWeight = 'bold';  // Make text bold

    // Modify styles of additional paragraphs
    document.getElementById('paragraph1').style.fontSize = '1.4em';
    document.getElementById('paragraph2').style.fontSize = '1.4em';
    document.getElementById('paragraph3').style.fontSize = '1.4em';
    document.getElementById('paragraph1').style.color = '#1b5e20';
    document.getElementById('paragraph2').style.color = '#1b5e20';
    document.getElementById('paragraph3').style.color = '#1b5e20';
});

// Add or remove an element when the button is clicked
document.getElementById('addRemoveBtn').addEventListener('click', function() {
    const addedElement = document.getElementById('addedElement');

    if (addedElement.style.display === 'none') {
        addedElement.style.display = 'block';  // Show the added element
    } else {
        addedElement.style.display = 'none';  // Hide the added element
    }
});
