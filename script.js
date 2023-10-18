// Get the code editor element
const codeEditor = document.querySelector('#code-editor');

// Get the code element
const codeElement = document.querySelector('#code');

// Get the toolbar buttons
const copyButton = document.querySelector('#copy');
const saveButton = document.querySelector('#save');
const lockButton = document.querySelector('#lock');

// Set the initial state of the lock button
lockButton.classList.add('locked');

// Add an event listener to the copy button
copyButton.addEventListener('click', () => {
  // Copy the code to the clipboard
  navigator.clipboard.writeText(codeElement.value);
});

// Add an event listener to the save button
saveButton.addEventListener('click', () => {
  // Save the code to a file
  const blob = new Blob([codeElement.value], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'code.txt';
  a.click();
});

// Add an event listener to the lock button
lockButton.addEventListener('click', () => {
  // Toggle the lock state
  lockButton.classList.toggle('locked');

  // Disable the code editor if it is locked
  codeElement.disabled = lockButton.classList.contains('locked');
});
