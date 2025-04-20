const resumeMap = new Map();


resumeMap.set("photo", "../images/software enginner.png");
resumeMap.set("name", "Shubham");


resumeMap.set("education", [
  {
    degree: "High School Diploma",
    school: "Dehli High school",
    year: "2007 - 2019"
  }
]);


resumeMap.set("experience", [
  {
    jobTitle: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    duration: "Summer 2023",
    details: "Worked on UI development using HTML and CSS Grid."
  },
  {
    jobTitle: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2022 - Present",
    details: "Built websites for small businesses and startups."
  }
]);


window.onload = function () {
    const photoDiv = document.getElementById("resume-photo");
    const infoDiv = document.getElementById("resume-info");
  

    const img = document.createElement("img");
    img.src = resumeMap.get("photo");
    photoDiv.appendChild(img);
  

    const name = document.createElement("h2");
    name.textContent = resumeMap.get("name");
    infoDiv.appendChild(name);
  
    // Set education
    const eduTitle = document.createElement("h3");
    eduTitle.textContent = "Education";
    infoDiv.appendChild(eduTitle);
  
    const education = resumeMap.get("education");
    education.forEach(edu => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${edu.degree}</strong><br>${edu.school} (${edu.year})`;
      infoDiv.appendChild(p);
    });
  

    const expTitle = document.createElement("h3");
    expTitle.textContent = "Work Experience";
    infoDiv.appendChild(expTitle);
  
    const experience = resumeMap.get("experience");
    experience.forEach(exp => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${exp.jobTitle}</strong> - ${exp.company}<br>
        <em>${exp.duration}</em><br>
        ${exp.details}</p>
      `;
      infoDiv.appendChild(div);
    });
  };
  
