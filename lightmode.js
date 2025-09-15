let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}
 
const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}
if(lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode (): disableLightmode()

})  


const aboutMe = document.getElementById("about")
const editbutton = document.getElementById("editbutton");
let isEditing = false;

function makeEditable(paragraph, button) {
  if (button.textContent === "Edit") {
    const currentText = paragraph.textContent;

    // Get the computed styles of the paragraph
    const style = window.getComputedStyle(paragraph);

    // Replace paragraph with textarea that inherits paragraph styles
    paragraph.innerHTML = `<textarea style="
      width: auto;
      min-width: 50%;
      height: auto;
      font-size: ${style.fontSize};
      font-family: ${style.fontFamily};
      line-height: ${style.lineHeight};
      color: ${style.color};
      background: ${style.backgroundColor};
      border: 1px solid #ccc;
      padding: 4px;
      resize: vertical;
    ">${currentText}</textarea>`;

    button.textContent = "Save";

    const textarea = paragraph.querySelector("textarea");
    textarea.focus();

  } else {
    const textarea = paragraph.querySelector("textarea");
    paragraph.textContent = textarea.value; // Restore as <p> text
    button.textContent = "Edit";
    console.log("Saved:", textarea.value);
  }
}

function addEditButton(paragraph) {
  // Create wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("edit-container");

  // Insert wrapper before paragraph and move paragraph inside
  paragraph.parentNode.insertBefore(wrapper, paragraph);
  wrapper.appendChild(paragraph);

  // Create button
  const btn = document.createElement("button");
  btn.textContent = "Edit";
  btn.classList.add("editBtn");
  wrapper.appendChild(btn);

  btn.addEventListener("click", () => makeEditable(paragraph, btn));
}

// HERO lead paragraph
const heroLead = document.querySelector(".hero .lead");
if (heroLead) addEditButton(heroLead);

// ABOUT section paragraphs
const aboutParas = document.querySelectorAll("#about p");
aboutParas.forEach(addEditButton);



