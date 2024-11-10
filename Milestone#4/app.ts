// Define interfaces for reusable types
interface Education  {
  id: string;
  value: string;
}

interface Experience {
  id: string;
  value: string;
}

interface Skill {
  id: string;
  value: string;
}

// TypeScript selectors for form and output elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
const educationContainer = document.getElementById("educationContainer") as HTMLElement;
const experienceContainer = document.getElementById("experienceContainer") as HTMLElement;
const skillsContainer = document.getElementById("skillsContainer") as HTMLElement;

let educationCount = 0;
let experienceCount = 0;
let skillsCount = 0;

// Function to add an input field dynamically to a given container
function ddInputField(container: HTMLElement, placeholder: string, className: string, count: number): void {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.className = className;
  input.id = `${className}_${count}`;
  container.appendChild(input);
}

// Event listener to add education input fields
document.getElementById("addEducation")?.addEventListener("click", () => {
  addInputField(educationContainer, "Education detail", "education", educationCount++);
});

// Event listener to add experience input fields
document.getElementById("addExperience")?.addEventListener("click", () => {
  addInputField(experienceContainer, "Experience detail", "experience", experienceCount++);
});

// Event listener to add skills input fields
document.getElementById("addSkills")?.addEventListener("click", () => {
  addInputField(skillsContainer, "Skill", "skill", skillsCount++);
});

// Form submit event handler
resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // Populate Resume Output
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
  const contact = (document.getElementById("contact") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;

  (document.getElementById("resumeName") as HTMLElement).innerText = `${name} ${lastName}`;
  (document.getElementById("resumeContact") as HTMLElement).innerText = `Contact: ${contact}`;
  (document.getElementById("resumeEmail") as HTMLElement).innerText = `Email: ${email}`;
  (document.getElementById("resumeLinkedIn") as HTMLElement).innerText = `LinkedIn: ${linkedin}`;

  // Display Profile Image
  const imageFile = (document.getElementById("image") as HTMLInputElement).files?.[0];
  if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
          (document.getElementById("profileImage") as HTMLImageElement).src = e.target?.result as string;
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
function populatSection(className: string, outputId: string): void {
  const outputDiv = document.getElementById(outputId) as HTMLElement;
  outputDiv.innerHTML = "";
  const items = document.querySelectorAll<HTMLInputElement>(`.${className}`);
  items.forEach((item) => {
      const p = document.createElement("p");
      p.innerText = item.value;
      outputDiv.appendChild(p);
  });
}

// Event listener for editing the resume
document.getElementById("editResume")?.addEventListener("click", () => {
  resumeForm.style.display = "block";
  resumeOutput.style.display = "none";
});
