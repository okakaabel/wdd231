const courses = [
    {
        code: "CSE 121b",
        name: "JavaScript Language",
        section: "CSE",
        credits: 3,
        completed: false
    },
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        section: "WDD",
        credits: 3,
        completed: false
    },
    {
        code: "WDD 230",
        name: "Web Frontend Development I",
        section: "WDD",
        credits: 3,
        completed: true  // Marked as completed
    },
    {
        code: "WDD 231",
        name: "Web Frontend Development II",
        section: "WDD",
        credits: 3,
        completed: false
    }
];

function displayCourses(filteredCourses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
        courseList.appendChild(courseCard);
    });

    // Update total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Filter button functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter courses
        const filter = this.dataset.filter;
        const filteredCourses = filter === 'all' 
            ? courses 
            : courses.filter(course => course.section === filter);
        
        displayCourses(filteredCourses);
    });
});

// Initial display
displayCourses(courses);
