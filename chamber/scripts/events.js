document.addEventListener("DOMContentLoaded", () => {
    const events = [
        {
            title: "Business Networking Meetup",
            date: "July 10, 2024",
            location: "Kampala International Conference Center",
            time: "10:00 AM - 2:00 PM"
        },
        {
            title: "Tech Innovators Expo",
            date: "July 27, 2024",
            location: "Entebbe Expo Grounds",
            time: "9:00 AM - 5:00 PM"
        },
        {
            title: "Entrepreneurship Workshop",
            date: "August 20, 2024",
            location: "Jinja Business Hub",
            time: "1:00 PM - 4:00 PM"
        },
        {
            title: "Kampala Tech Expo",
            date: "August 30, 2024",
            location: "Mukono Beselfless Tech Center",
            time: "8:00 AM - 12:00 PM"
        },
        {
            title: "Uganda Business Expo",
            date: "September 15, 2024",
            location: "Kampala City Square",
            time: "2:00 PM - 4:00 PM"
        },
        {
            title: "Innovation Bootcamp",
            date: "September 25, 2024",
            location: "Kingdom Kampala conference center",
            time: "9:00 AM - 12:00 PM"
        }
    ];

    const eventsList = document.getElementById("events-list");

    events.forEach(event => {
        const eventItem = document.createElement("li");

        const eventTitle = document.createElement("h2");
        eventTitle.textContent = event.title;

        const eventDate = document.createElement("p");
        eventDate.textContent = `Date: ${event.date}`;

        const eventLocation = document.createElement("p");
        eventLocation.textContent = `Location: ${event.location}`;

        const eventTime = document.createElement("p");
        eventTime.textContent = `Time: ${event.time}`;

        eventItem.appendChild(eventTitle);
        eventItem.appendChild(eventDate);
        eventItem.appendChild(eventLocation);
        eventItem.appendChild(eventTime);

        eventsList.appendChild(eventItem);
    });
});