document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('show');
});

const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');
const directoryContainer = document.getElementById('directory-container');

gridButton.addEventListener('click', () => {
    directoryContainer.className = 'grid';
});

listButton.addEventListener('click', () => {
    directoryContainer.className = 'list';
});

async function loadMembers() {
    try {
        const response = await fetch('data/members.json');  // Ensure the correct path
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error loading members:', error);
        directoryContainer.innerHTML = '<p>Error loading member data. Please try again later.</p>';
    }
}

function displayMembers(members) {
    directoryContainer.innerHTML = '';
    
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        const membershipLevel = getMembershipLevel(member.membershipLevel);
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <p>📍 ${member.address}</p>
                <p>📞 ${member.phone}</p>
                <p>🌐 <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${membershipLevel}</p>
            </div>
        `;
        
        directoryContainer.appendChild(memberCard);
    });
}

function getMembershipLevel(level) {
    switch(level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    }
}

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const response = await fetch('data/members.json'); // Ensure the correct path

loadMembers();
