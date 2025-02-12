document.addEventListener('DOMContentLoaded', function() {
    // Visitor Information
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysSinceLastVisit = Math.round((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = 'Back so soon! Awesome!';
        } else if (daysSinceLastVisit === 1) {
            visitMessage.textContent = 'You last visited 1 day ago.';
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentTime);

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('.lazyload');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    img.classList.remove('lazyload');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);

    // Display the current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Display the last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Initialize Calendar
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    // Generate Calendar
    generateCalendar(currentMonth, currentYear);

    document.getElementById('prev-month').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-month').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    });

    function generateCalendar(month, year) {
        const calendarMonthYear = document.getElementById('calendar-month-year');
        const calendarDays = document.getElementById('calendar-days');
        
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        calendarMonthYear.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Clear previous calendar days
        calendarDays.innerHTML = '';

        // Generate day names
        dayNames.forEach(dayName => {
            const dayNameCell = document.createElement('div');
            dayNameCell.className = 'calendar-day-name';
            dayNameCell.textContent = dayName;
            calendarDays.appendChild(dayNameCell);
        });

        // Generate empty cells for days of the week before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            calendarDays.appendChild(emptyCell);
        }

        // Generate days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            dayCell.textContent = day;
            calendarDays.appendChild(dayCell);
        }
    }
});