function generatePreview() {
    const requiredFields = ["name", "contact", "email", "summary", "experience", "education", "skills"];
    let allFieldsFilled = true;
    requiredFields.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        if (field.value.trim() === "") {
            allFieldsFilled = false;
            field.classList.add("error");
        } else {
            field.classList.remove("error");
        }
    });
    if (!allFieldsFilled) {
        alert("Please fill in all required fields.");
        return;
    }
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const previewHTML = `
        <h2>${name}</h2>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    const resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = previewHTML;
    document.getElementById("previewContainer").style.display = "block";
}

function downloadPDF() {
    const resumePreview = document.getElementById("resumePreview");
    const options = {
        margin: 1,
        filename: 'resume.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: 'in',
            format: 'letter',
            orientation: 'portrait'
        }
    };
    html2pdf().from(resumePreview).set(options).save();
}