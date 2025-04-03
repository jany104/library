document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const eventDate = new Date("2025-06-01T00:00:00");
        const now = new Date();
        const timeDifference = eventDate - now;
        
        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerText = `Annual Day Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("countdown").innerText = "Annual Day is happening now!";
        }
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
