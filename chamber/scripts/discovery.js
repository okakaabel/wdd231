document.addEventListener('DOMContentLoaded', function () {
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

    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    generateCalendar(currentMonth, currentYear);

    document.getElementById('prev-month').addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-month').addEventListener('click', function () {
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

        calendarDays.innerHTML = '';

        // Create day names (headers)
        dayNames.forEach(dayName => {
            const dayNameCell = document.createElement('div');
            dayNameCell.className = 'calendar-day-name';
            dayNameCell.textContent = dayName;
            calendarDays.appendChild(dayNameCell);
        });

        // Empty cells before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            calendarDays.appendChild(emptyCell);
        }

        // Create days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';

            // Highlight the current day
            const currentDate = new Date();
            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayCell.classList.add('today');
            }

            dayCell.textContent = day;
            calendarDays.appendChild(dayCell);
        }
    }
});
