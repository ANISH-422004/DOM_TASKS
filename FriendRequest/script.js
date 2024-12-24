const statusDiv = document.getElementById('status');
const sendRequestButton = document.getElementById('sendRequest');

sendRequestButton.addEventListener('click', () => {
   
    statusDiv.textContent = 'Sending friend request...';

    // Simulate a delay using setTimeout
    setTimeout(() => {
        statusDiv.textContent = 'Friend request sent successfully!';
    }, 3000); // 3 seconds delay
});
