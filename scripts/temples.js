/* W02 Picture Album - getdates.js */

/* Display the current year */
const year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

/* Display the last modified date of the document */
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;