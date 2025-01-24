const spotlightsContainer = document.getElementById('spotlights-container');

// Sample JSON data (you'd typically load this from a file or API)
const members = [
    {
        name: "Tech Innovators Inc.",
        logo: "images/tech-logo.png",
        level: "Gold",
        phone: "(555) 111-2222",
        website: "www.techinnovators.com"
    },
    {
        name: "Green Solutions LLC",
        logo: "images/green-logo.png",
        level: "Silver",
        phone: "(555) 333-4444",
        website: "www.greensolutions.com"
    },
    {
        name: "Global Marketing Co.",
        logo: "images/marketing-logo.png",
        level: "Gold",
        phone: "(555) 555-6666",
        website: "www.globalmarketing.com"
    }
];

function displaySpotlights() {
    // Filter gold and silver members
    const eligibleMembers = members.filter(member => 
        member.level === 'Gold' || member.level === 'Silver'
    );

    // Randomly select 2-3 members
    const spotlightCount = Math.floor(Math.random() * 2) + 2;
    const selectedMembers = eligibleMembers
        .sort(() => 0.5 - Math.random())
        .slice(0, spotlightCount);

    spotlightsContainer.innerHTML = '';
    selectedMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlight-card');
        memberCard.innerHTML = `
            <img src="${member.logo}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>Membership Level: ${member.level}</p>
            <p>Phone: ${member.phone}</p>
            <a href="http://${member.website}" target="_blank">${member.website}</a>
        `;
        spotlightsContainer.appendChild(memberCard);
    });
}

displaySpotlights();
