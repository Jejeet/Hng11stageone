function updateTime() {
    const now = new Date();

    // Format the UTC time
    const utcTime = now.toUTCString().match(/\d{2}:\d{2}:\d{2}/)[0];

    // Format the current day
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(now);

    // Update the elements with the formatted values
    document.getElementById('currentTimeUTC').textContent = `${utcTime}`;
    document.getElementById('currentDay').textContent = currentDay;
}

updateTime();
setInterval(updateTime, 1000);
