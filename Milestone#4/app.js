var _a, _b, _c, _d;
// TypeScript selectors for form and output elements
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
var educationContainer = document.getElementById("educationContainer");
var experienceContainer = document.getElementById("experienceContainer");
var skillsContainer = document.getElementById("skillsContainer");
var educationCount = 0;
var experienceCount = 0;
var skillsCount = 0;
// Function to add an input field dynamically to a given container
function addInputField(container, placeholder, className, count) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.className = className;
    input.id = "".concat(className, "_").concat(count);
    container.appendChild(input);
}
// Event listener to add education input fields
(_a = document.getElementById("addEducation")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    addInputField(educationContainer, "Education detail", "education", educationCount++);
});
// Event listener to add experience input fields
(_b = document.getElementById("addExperience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    addInputField(experienceContainer, "Experience detail", "experience", experienceCount++);
});
// Event listener to add skills input fields
(_c = document.getElementById("addSkills")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    addInputField(skillsContainer, "Skill", "skill", skillsCount++);
});
// Form submit event handler
resumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Populate Resume Output
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    document.getElementById("resumeName").innerText = "".concat(name, " ").concat(lastName);
    document.getElementById("resumeContact").innerText = "Contact: ".concat(contact);
    document.getElementById("resumeEmail").innerText = "Email: ".concat(email);
    document.getElementById("resumeLinkedIn").innerText = "LinkedIn: ".concat(linkedin);
    // Display Profile Image
    var imageFile = (_a = document.getElementById("image").files) === null || _a === void 0 ? void 0 : _a[0];
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById("profileImage").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(imageFile);
    }
    // Populate Education, Experience, and Skills sections
    populateSection("education", "educationOutput");
    populateSection("experience", "experienceOutput");
    populateSection("skill", "skillsOutput");
    // Toggle display between form and output
    resumeForm.style.display = "none";
    resumeOutput.style.display = "block";
});
// Populate each dynamic section (education, experience, skills)
function populateSection(className, outputId) {
    var outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = "";
    var items = document.querySelectorAll(".".concat(className));
    items.forEach(function (item) {
        var p = document.createElement("p");
        p.innerText = item.value;
        outputDiv.appendChild(p);
    });
}
// Event listener for editing the resume
(_d = document.getElementById("editResume")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    resumeForm.style.display = "block";
    resumeOutput.style.display = "none";
});
