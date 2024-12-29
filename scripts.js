const portfolioData = {
    name: "Jack Tchuente",
    title: "Full Stack Developer",
    about: "Experienced Full Stack Developer with expertise in building scalable web applications and systems. Proficient in modern frameworks and technologies such as Django, Angular, ASP.NET, and Kubernetes, with a strong focus on delivering efficient and user-friendly solutions.",
    experience: [
        {
            title: "Full Stack Developer",
            company: "Référence Système",
            period: "April 2023 - Present",
            description: "Led a team of 5 to develop a web application for managing large-scale client files. Optimized API performance and implemented CI/CD pipelines using GitLab Actions. Key tools included C#, Angular, ASP.NET, SQL Server, and Docker."
        },
        {
            title: "Full Stack Developer",
            company: "ID-M",
            period: "September 2021 - December 2022",
            description: "Designed privacy-focused systems and developed multi-factor authentication solutions. Built web and mobile applications using Django, FastAPI, Angular, and Cordova to support product demonstrations and client outreach."
        },
        {
            title: "Full Stack Developer",
            company: "CIUSSSCN",
            period: "September 2019 - August 2023",
            description: "Developed healthcare applications including 'Concerto' for chronic disease management. Enhanced UX with physicians' input and contributed to research published in journals like BMJ. Utilized Django, FastAPI, Angular, and Kubernetes."
        }
    ],
    skills: [
        "Python",
        "C#",
        "Django",
        "FastAPI",
        "Angular",
        "ASP.NET Core",
        "Redis",
        "SQL",
        "Docker",
        "Kubernetes",
        "Git",
        "CI/CD",
        "Ansible",
        "Terraform"
    ],
    projects: [
        {
            title: "Health Me",
            description: "Developed a web application enabling users to manage and track their personal health information. The application aims to provide an intuitive interface to log and review medical or fitness data, simplifying everyday health management.",
            link: "https://health-me.demo.jorganise.app/"
        },
        {
            title: "Review Me",
            description: "Created a data labeling platform allowing users to classify and annotate datasets efficiently. This solution is particularly useful for projects requiring data preparation for machine learning.",
            link: "https://reviewme.demo.jorganise.app/"
        },
        {
            title: "Rest In Pi",
            description: "Developed an online tool allowing users to search for specific sequences in the decimal expansion of π. Users can input a sequence of digits and determine if it appears within the first decimals of π.",
            link: "https://restinpi.com/"
        }
    ],
    otherProjects: [
        {
            "title": "Jolof Shop",
            "description": "Designed an online store tailored for users in Senegal to purchase prepaid cards using mobile wallets such as Orange Money or Wave. The platform offers a seamless user experience, enabling quick and secure transactions.",
            "link": null
        },
        {
            "title": "Cote Covid",
            "description": "Created a web application for grade optimization, intended for students at Université Laval.",
            "link": "https://www.unatelier.app/"
        },
        {
            "title": "Cloudacy",
            "description": "Developed a web client to store encrypted files transparently on cloud services like Dropbox or Google Drive. Built with Angular, the application ensures data privacy and offers a user-friendly interface for seamless file management.",
            "link": null
        }
    ],
    contact: {
        email: "jacktchuente@gmail.com",
        github: "https://github.com/etneuhct",
        linkedin: "https://www.linkedin.com/in/jack-tchuente/"
    },

};


function renderPortfolio() {
    document.getElementById("intro").innerHTML = `
        <h1>${portfolioData.name}</h1>
        <h2 style="margin-top: 25px; text-align: center">${portfolioData.title}</h2>
        <p>${portfolioData.about}</p>
        <div class="social-links">
            <a href="mailto:${portfolioData.contact.email}" aria-label="Email">📧</a>
            <a href="${portfolioData.contact.github}" target="_blank" aria-label="GitHub">🐙</a>
            <a href="${portfolioData.contact.linkedin}" target="_blank" aria-label="LinkedIn">🔗</a>
        </div>
    `;

    const experienceSection = document.getElementById("experience");
    portfolioData.experience.forEach(job => {
        experienceSection.innerHTML += `
            <div class="card">
                <h3>${job.title}</h3>
                <p><strong>${job.company}</strong> | ${job.period}</p>
                <p>${job.description}</p>
            </div>
        `;
    });

    const skillsSection = document.querySelector(".skills-grid");
    portfolioData.skills.forEach(skill => {
        skillsSection.innerHTML += `<span>${skill}</span>`;
    });

    const projectsSection = document.querySelector(".projects-grid");
    portfolioData.projects.forEach(project => {
        projectsSection.innerHTML += `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.link ? `<button onclick="window.open('${project.link}', '_blank')">View Project</button>` : ''}
            </div>
        `;
    });

    const otherProjectsSection = document.querySelector(".other-projects-grid");
    portfolioData.otherProjects.forEach(project => {
        otherProjectsSection.innerHTML += `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.link ? `<button onclick="window.open('${project.link}', '_blank')">View Project</button>` : ''}
            </div>
        `;
    });
    document.querySelector("footer").innerHTML = `
        <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.</p>
    `;
}

window.onload = renderPortfolio;
