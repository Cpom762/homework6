
const skillForm = document.getElementById("skillForm");
const skillInputName = document.getElementById("skillInputName");
const skillInputDescription = document.getElementById("skillInputDescription");
const skillList = document.getElementById("skillList");
const projectList = document.getElementById("projectList");

if (skillForm !== null) {
    skillForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stops the browser from reloading cause apparently it's like that

        const skillName = skillInputName.value.trim();
        const skillDescription = skillInputDescription.value.trim(); // 

        if (skillName !== "" && skillDescription !== "") {

            const newSkill = document.createElement("div");
            newSkill.className = "col-md-4";

            const card = document.createElement("div");
            card.className = "skill card";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h3");
            title.className = "card-title";
            title.textContent = skillName;

            const description = document.createElement("p");
            description.className = "card-text";
            description.textContent = skillDescription;

            cardBody.appendChild(title);
            cardBody.appendChild(description);
            card.appendChild(cardBody);
            newSkill.appendChild(card);

            skillList.appendChild(newSkill);

            skillInputName.value = "";
            skillInputDescription.value = "";
        }
    });
}


const projectTitles = [
    "Portfolio Website",
    "SkillsUSA IoT Device",
    "Game Development",
    "CAD Models"
];

const projectDescriptions = [
    "This site. HTML and CSS built on Bootstrap's grid, navbar, cards and tables.",
    "A connected device built for the SkillsUSA internet of things competition. It took second place in the state of Arizona.",
    "Small games built to practice game loops, collision and level design.",
    "Parametric parts and assemblies modeled in SolidWorks while earning the CSWA certification."
];

const projectDeadlines = [
    "2066-10-31",
    "2066-05-15",
    "2067-05-01",
    "2066-11-30"
];

if (projectList !== null) {
    for (let i = 0; i < projectTitles.length; i++) {

        const column = document.createElement("div");
        column.className = "col-md-6";

        const card = document.createElement("div");
        card.className = "project card";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = projectTitles[i];

        const description = document.createElement("p");
        description.className = "card-text";
        description.textContent = projectDescriptions[i];

        const deadline = document.createElement("p");
        deadline.className = "card-text";
        deadline.textContent = "Deadline: " + projectDeadlines[i];

        const currentDate = new Date();
        const projectDate = new Date(projectDeadlines[i]);
        const status = document.createElement("p");
        status.className = "card-text";

        if (projectDate > currentDate) {
            status.textContent = "Ongoing"
        } else if (projectDate < currentDate) {
            status.textContent = "Completed";
        } else {
            status.textContent = "Due today";
        }

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(deadline);
        cardBody.appendChild(status);
        card.appendChild(cardBody);
        column.appendChild(card);
        projectList.appendChild(column);
    }
}

let DownloadCount = 0;

document.getElementsById("resumeButton").addEventListener("click", function countFunction() {
    DownloadCount++;
    document.getElementById("DownloadCount").textContent = DownloadCount;
});