/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generateResume.ts":
/*!*******************************!*\
  !*** ./src/generateResume.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResume": () => (/* binding */ generateResume)
/* harmony export */ });
/* harmony import */ var _inputUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputUtils */ "./src/inputUtils.ts");

function generateResume(name, email, countryCode, phone, educations, skills, workExperiences, profilePicture, github, linkedin) {
    return `
    <section class="personal-info">
        <figure>
            <img
                src="${profilePicture
        ? URL.createObjectURL(profilePicture)
        : "images/default-profile-picture.jpeg"}"
                alt="Profile Picture"
                width="140"
                height="170"
            />
            <figcaption><h1 data-editable="name" contenteditable="true">${name}</h1></figcaption>
        </figure>

        <div id="contact-details">
            <p id="email">
                <a href="mailto:${email}" target="_blank" rel="noopener noreferrer"><i class="bx bxs-envelope"></i> email</a>
            </p>

            <p id="github">
                <a href="${github}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i> github</a>
            </p>

            <p id="linkedin">
                <a href="${linkedin}" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin-square"></i> linkedin</a>
            </p>

            <p id="number" target="_blank" rel="noopener noreferrer">
                <a href="tel:${(0,_inputUtils__WEBPACK_IMPORTED_MODULE_0__.processInput)("phone", phone, countryCode)}">${(0,_inputUtils__WEBPACK_IMPORTED_MODULE_0__.processInput)("phone", phone, countryCode)} <i class="bx bxs-phone"></i></a>
            </p>

        </div>

    </section>

    <section class="education">
        <h2>Education</h2>
        <ul>
            ${educations
        .map((education) => `<li data-editable="education" contenteditable="true">${education.value}</li>`)
        .join("")}
        </ul>
    </section>

    <section class="skills" style="display: none">
        <h2>Skills</h2>
        <ul>
            ${(0,_inputUtils__WEBPACK_IMPORTED_MODULE_0__.processInput)("skills", skills)
        .map((skill) => `<li data-editable="skills" contenteditable="true">${skill}</li>`)
        .join("")}
        </ul>
    </section>

    <section class="work-experience" style="display: none">
        <h2>Work Experience</h2>
        <ul>
            ${workExperiences
        .map((workExperience) => `<li data-editable="work-experience" contenteditable="true">${workExperience.value}</li>`)
        .join("")}
        </ul>
    </section>

    <button id="toggle-skills">Show More</button>
    `;
}


/***/ }),

/***/ "./src/inputUtils.ts":
/*!***************************!*\
  !*** ./src/inputUtils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processInput": () => (/* binding */ processInput)
/* harmony export */ });
// Implementation
function processInput(type, input, contryCode) {
    if (type === "skills") {
        // Process skills input
        const cleanedStr = input.replace(/[,;]+/g, ",");
        const skills = cleanedStr
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0);
        return skills;
    }
    else {
        // Process phone input
        const cleanedStr = contryCode + input.replace(/\D+/g, "0");
        return cleanedStr;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateResume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateResume */ "./src/generateResume.ts");

document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll(".addTextArea");
    anchors.forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            const container = a.parentElement;
            const area = document.createElement("textarea");
            area.name = container.querySelector("textarea").name;
            area.setAttribute("contenteditable", "true");
            container.appendChild(area);
        });
    });
});
document.getElementById("resume-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("country-code").value;
    const phone = document.getElementById("phone").value;
    const github = document.getElementById("github")
        .value;
    const linkedin = document.getElementById("linkedin")
        .value;
    const profilePicture = document.getElementById("profile-picture").files?.[0];
    const skills = document.getElementById("skills")
        .value;
    const educations = document.querySelectorAll("textarea[name='education']");
    const workExperiences = document.querySelectorAll("textarea[name='work-experience']");
    // Hiding form
    const form = document.getElementById("resume-form");
    form.style.display = "none";
    const resumeDiv = document.querySelector(".generated-resume");
    // Showing generated resume
    if (resumeDiv) {
        resumeDiv.innerHTML = (0,_generateResume__WEBPACK_IMPORTED_MODULE_0__.generateResume)(name, email, countryCode, phone, [...educations], skills, [...workExperiences], profilePicture, github, linkedin);
        resumeDiv.style.display = "block";
    }
    // Adding a click event listener to the toggle button
    const toggleButton = document.getElementById("toggle-skills");
    const skillsSection = document.querySelector(".skills");
    const workExperienceSection = document.querySelector(".work-experience");
    toggleButton?.addEventListener("click", () => {
        const isHidden = skillsSection?.style.display === "none";
        if (skillsSection && workExperienceSection) {
            skillsSection.style.display = isHidden ? "block" : "none";
            workExperienceSection.style.display = isHidden ? "block" : "none";
            toggleButton.innerText = isHidden ? "Show Less" : "Show More";
        }
    });
    // Revoke the object URL after use to free up memory
    if (profilePicture) {
        const profilePictureURL = URL.createObjectURL(profilePicture);
        URL.revokeObjectURL(profilePictureURL);
    }
    // Save changes made to the editable sections
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach((element) => {
        const editableElement = element;
        editableElement.addEventListener("blur", () => {
            // Update the content in real-time
            const editableKey = editableElement.getAttribute("data-editable");
            const updatedContent = editableElement.innerText;
            // Find the corresponding input element using data-editable attribute
            const inputElement = document.querySelector(`[data-editable="${editableKey}"]`);
            if (inputElement) {
                inputElement.value = updatedContent;
            }
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseURBQVksOEJBQThCLElBQUkseURBQVksK0JBQStCO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxvRkFBb0YsZ0JBQWdCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBWTtBQUMxQiw2RUFBNkUsTUFBTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCwrRkFBK0YscUJBQXFCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0RBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxZQUFZO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pbGVzdG9uZS0xLy4vc3JjL2dlbmVyYXRlUmVzdW1lLnRzIiwid2VicGFjazovL21pbGVzdG9uZS0xLy4vc3JjL2lucHV0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21pbGVzdG9uZS0xL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWlsZXN0b25lLTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9taWxlc3RvbmUtMS8uL3NyYy9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvY2Vzc0lucHV0IH0gZnJvbSBcIi4vaW5wdXRVdGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVzdW1lKG5hbWUsIGVtYWlsLCBjb3VudHJ5Q29kZSwgcGhvbmUsIGVkdWNhdGlvbnMsIHNraWxscywgd29ya0V4cGVyaWVuY2VzLCBwcm9maWxlUGljdHVyZSwgZ2l0aHViLCBsaW5rZWRpbikge1xuICAgIHJldHVybiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBlcnNvbmFsLWluZm9cIj5cclxuICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIke3Byb2ZpbGVQaWN0dXJlXG4gICAgICAgID8gVVJMLmNyZWF0ZU9iamVjdFVSTChwcm9maWxlUGljdHVyZSlcbiAgICAgICAgOiBcImltYWdlcy9kZWZhdWx0LXByb2ZpbGUtcGljdHVyZS5qcGVnXCJ9XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE0MFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNzBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj48aDEgZGF0YS1lZGl0YWJsZT1cIm5hbWVcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+JHtuYW1lfTwvaDE+PC9maWdjYXB0aW9uPlxyXG4gICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxwIGlkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGkgY2xhc3M9XCJieCBieHMtZW52ZWxvcGVcIj48L2k+IGVtYWlsPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8cCBpZD1cImdpdGh1YlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48aSBjbGFzcz1cImJ4IGJ4bC1naXRodWJcIj48L2k+IGdpdGh1YjwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHAgaWQ9XCJsaW5rZWRpblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjxpIGNsYXNzPVwiYnggYnhsLWxpbmtlZGluLXNxdWFyZVwiPjwvaT4gbGlua2VkaW48L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGlkPVwibnVtYmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDoke3Byb2Nlc3NJbnB1dChcInBob25lXCIsIHBob25lLCBjb3VudHJ5Q29kZSl9XCI+JHtwcm9jZXNzSW5wdXQoXCJwaG9uZVwiLCBwaG9uZSwgY291bnRyeUNvZGUpfSA8aSBjbGFzcz1cImJ4IGJ4cy1waG9uZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZWR1Y2F0aW9uXCI+XHJcbiAgICAgICAgPGgyPkVkdWNhdGlvbjwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAke2VkdWNhdGlvbnNcbiAgICAgICAgLm1hcCgoZWR1Y2F0aW9uKSA9PiBgPGxpIGRhdGEtZWRpdGFibGU9XCJlZHVjYXRpb25cIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+JHtlZHVjYXRpb24udmFsdWV9PC9saT5gKVxuICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2tpbGxzXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgPGgyPlNraWxsczwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAke3Byb2Nlc3NJbnB1dChcInNraWxsc1wiLCBza2lsbHMpXG4gICAgICAgIC5tYXAoKHNraWxsKSA9PiBgPGxpIGRhdGEtZWRpdGFibGU9XCJza2lsbHNcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+JHtza2lsbH08L2xpPmApXG4gICAgICAgIC5qb2luKFwiXCIpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3b3JrLWV4cGVyaWVuY2VcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cclxuICAgICAgICA8aDI+V29yayBFeHBlcmllbmNlPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICR7d29ya0V4cGVyaWVuY2VzXG4gICAgICAgIC5tYXAoKHdvcmtFeHBlcmllbmNlKSA9PiBgPGxpIGRhdGEtZWRpdGFibGU9XCJ3b3JrLWV4cGVyaWVuY2VcIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+JHt3b3JrRXhwZXJpZW5jZS52YWx1ZX08L2xpPmApXG4gICAgICAgIC5qb2luKFwiXCIpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPGJ1dHRvbiBpZD1cInRvZ2dsZS1za2lsbHNcIj5TaG93IE1vcmU8L2J1dHRvbj5cclxuICAgIGA7XG59XG4iLCIvLyBJbXBsZW1lbnRhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dCh0eXBlLCBpbnB1dCwgY29udHJ5Q29kZSkge1xuICAgIGlmICh0eXBlID09PSBcInNraWxsc1wiKSB7XG4gICAgICAgIC8vIFByb2Nlc3Mgc2tpbGxzIGlucHV0XG4gICAgICAgIGNvbnN0IGNsZWFuZWRTdHIgPSBpbnB1dC5yZXBsYWNlKC9bLDtdKy9nLCBcIixcIik7XG4gICAgICAgIGNvbnN0IHNraWxscyA9IGNsZWFuZWRTdHJcbiAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgIC5tYXAoKHNraWxsKSA9PiBza2lsbC50cmltKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwubGVuZ3RoID4gMCk7XG4gICAgICAgIHJldHVybiBza2lsbHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBQcm9jZXNzIHBob25lIGlucHV0XG4gICAgICAgIGNvbnN0IGNsZWFuZWRTdHIgPSBjb250cnlDb2RlICsgaW5wdXQucmVwbGFjZSgvXFxEKy9nLCBcIjBcIik7XG4gICAgICAgIHJldHVybiBjbGVhbmVkU3RyO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2VuZXJhdGVSZXN1bWUgfSBmcm9tIFwiLi9nZW5lcmF0ZVJlc3VtZVwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZFRleHRBcmVhXCIpO1xuICAgIGFuY2hvcnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBhLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgYXJlYS5uYW1lID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKS5uYW1lO1xuICAgICAgICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bWUtZm9ybVwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLnZhbHVlO1xuICAgIGNvbnN0IGNvdW50cnlDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJ5LWNvZGVcIikudmFsdWU7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lXCIpLnZhbHVlO1xuICAgIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2l0aHViXCIpXG4gICAgICAgIC52YWx1ZTtcbiAgICBjb25zdCBsaW5rZWRpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua2VkaW5cIilcbiAgICAgICAgLnZhbHVlO1xuICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLXBpY3R1cmVcIikuZmlsZXM/LlswXTtcbiAgICBjb25zdCBza2lsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKVxuICAgICAgICAudmFsdWU7XG4gICAgY29uc3QgZWR1Y2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVtuYW1lPSdlZHVjYXRpb24nXVwiKTtcbiAgICBjb25zdCB3b3JrRXhwZXJpZW5jZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFbbmFtZT0nd29yay1leHBlcmllbmNlJ11cIik7XG4gICAgLy8gSGlkaW5nIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bWUtZm9ybVwiKTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCByZXN1bWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmVyYXRlZC1yZXN1bWVcIik7XG4gICAgLy8gU2hvd2luZyBnZW5lcmF0ZWQgcmVzdW1lXG4gICAgaWYgKHJlc3VtZURpdikge1xuICAgICAgICByZXN1bWVEaXYuaW5uZXJIVE1MID0gZ2VuZXJhdGVSZXN1bWUobmFtZSwgZW1haWwsIGNvdW50cnlDb2RlLCBwaG9uZSwgWy4uLmVkdWNhdGlvbnNdLCBza2lsbHMsIFsuLi53b3JrRXhwZXJpZW5jZXNdLCBwcm9maWxlUGljdHVyZSwgZ2l0aHViLCBsaW5rZWRpbik7XG4gICAgICAgIHJlc3VtZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICAvLyBBZGRpbmcgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXNraWxsc1wiKTtcbiAgICBjb25zdCBza2lsbHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbHNcIik7XG4gICAgY29uc3Qgd29ya0V4cGVyaWVuY2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3JrLWV4cGVyaWVuY2VcIik7XG4gICAgdG9nZ2xlQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHNraWxsc1NlY3Rpb24/LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiO1xuICAgICAgICBpZiAoc2tpbGxzU2VjdGlvbiAmJiB3b3JrRXhwZXJpZW5jZVNlY3Rpb24pIHtcbiAgICAgICAgICAgIHNraWxsc1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9IGlzSGlkZGVuID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICAgICAgICB3b3JrRXhwZXJpZW5jZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IGlzSGlkZGVuID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uaW5uZXJUZXh0ID0gaXNIaWRkZW4gPyBcIlNob3cgTGVzc1wiIDogXCJTaG93IE1vcmVcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFJldm9rZSB0aGUgb2JqZWN0IFVSTCBhZnRlciB1c2UgdG8gZnJlZSB1cCBtZW1vcnlcbiAgICBpZiAocHJvZmlsZVBpY3R1cmUpIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHByb2ZpbGVQaWN0dXJlKTtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChwcm9maWxlUGljdHVyZVVSTCk7XG4gICAgfVxuICAgIC8vIFNhdmUgY2hhbmdlcyBtYWRlIHRvIHRoZSBlZGl0YWJsZSBzZWN0aW9uc1xuICAgIGNvbnN0IGVkaXRhYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NvbnRlbnRlZGl0YWJsZT0ndHJ1ZSddXCIpO1xuICAgIGVkaXRhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBlZGl0YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBlZGl0YWJsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb250ZW50IGluIHJlYWwtdGltZVxuICAgICAgICAgICAgY29uc3QgZWRpdGFibGVLZXkgPSBlZGl0YWJsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0YWJsZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZW50ID0gZWRpdGFibGVFbGVtZW50LmlubmVyVGV4dDtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgaW5wdXQgZWxlbWVudCB1c2luZyBkYXRhLWVkaXRhYmxlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZWRpdGFibGU9XCIke2VkaXRhYmxlS2V5fVwiXWApO1xuICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHVwZGF0ZWRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9