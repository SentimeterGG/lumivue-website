export const globalCSS = `
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
p,
span {
  font-family: "Google Sans Flex";
  font-weight: 400;
  font-size: var(--font-size__body);
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Google Sans Flex";
  font-weight: 650;
}

h1 {
  font-size: var(--font-size__h1);
  line-height: var(--line-height__h1);
}

h2 {
  font-size: var(--font-size__h2);
}

h3 {
  font-size: var(--font-size__h3);
}

h4 {
  font-size: var(--font-size__h4);
}
h5 {
  font-size: var(--font-size__h5);
}

small {
  font-size: var(--font-size__small);
}
.container {
  width: var(--container-width);
  margin-inline: auto;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-500);
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  color: white;
  font-size: var(--font-size__body);
  cursor: pointer;
  font-family: "Google Sans Flex", sans-serif;
  line-height: 100%;
  outline: none;
  white-space: nowrap;
  transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    transform 0.05s ease-out;
}
button:hover {
  background: var(--color-primary-600);
}
button:active {
  transform: scale(0.97);
}
button[variant="secondary"] {
  background: transparent;
  border: 1px solid var(--color-secondary-500);
  color: var(--color-secondary-500);
}

button[variant="secondary"]:hover {
  background: var(--color-secondary-400);
  color: white;
}
button[variant="tertiary"] {
  background: transparent;
  border: 1px solid var(--color-primary-500);
  color: var(--color-primary-500);
}
.muted {
  color: var(--color-text-700);
}
a:not(.btn):not(.link-image) {
  --color-links: var(--color-primary-700);
  position: relative;
  font-size: var(--font-size__body);
  color: var(--color-links);
  text-decoration: none;
}
a:not(.btn):not(.link-image)::before {
  position: absolute;
  bottom: 0;
  content: " ";
  background: var(--color-links);
  height: 1px;
  width: 0;
  transition: width 0.3s ease-out;
}
a:not(.btn):not(.link-image):hover::before {
  width: 100%;
}

legend {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
input,
textarea,
select {
  font-size: var(--font-size__body);
  width: 100%;
  border: 1px solid var(--color-text-200);
  outline: 0px solid var(--color-text-200);
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: "Google Sans Flex", sans-serif;
  background: transparent;
  transition:
    outline 0.3s ease-out,
    border 0.3s ease-out;
}
input:focus,
textarea:focus {
  border: 1px solid var(--color-primary-500);
  outline: 1px solid var(--color-primary-500);
}

textarea {
  width: 100%;
  height: 100%;
  resize: none;
}
label {
  position: absolute;
  font-size: var(--font-size__small);
  top: -0.5rem;
  padding-inline: 0.5rem;
  background: white;
  margin-left: 0.8rem;
}

a.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-500);
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  color: white !important;
  text-decoration: none;
  font-size: var(--font-size__body);
  cursor: pointer;
  font-family: "Google Sans Flex", sans-serif;
  line-height: 100%;
  outline: none;
  white-space: nowrap;
  transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    transform 0.05s ease-out;
}
a.btn:hover {
  background: var(--color-primary-600);
}
a.btn:active {
  transform: scale(0.97);
}
a.btn[variant="secondary"] {
  background: transparent;
  border: 1px solid var(--color-secondary-500);
  color: var(--color-secondary-500);
}

a.btn[variant="secondary"]:hover {
  background: var(--color-secondary-400);
  color: white;
}
a.btn[variant="tertiary"] {
  background: transparent;
  border: 1px solid var(--color-primary-500);
  color: var(--color-primary-500);
}
`;
