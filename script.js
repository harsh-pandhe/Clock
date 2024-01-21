function updateTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time-display').innerText = formattedTime;
}

setInterval(updateTime, 1000);

updateTime();
