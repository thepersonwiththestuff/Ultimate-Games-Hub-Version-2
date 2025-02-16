// Check if a custom theme is saved in localStorage
window.onload = function() {
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    changeCSS(currentTheme);
  }
};

// Function to change the CSS file
function changeCSS(theme) {
  var stylesheet = document.getElementById('stylesheet');

  switch (theme) {
    case 'theme1':
      stylesheet.href = 'blue.css';
      break;
    case 'theme2':
      stylesheet.href = 'red.css';
      break;
    case 'theme3':
      stylesheet.href = 'rainbow.css';
      break;
    case 'theme4':
      stylesheet.href = 'discreet.css';
      break;
    case 'theme5':
      stylesheet.href = 'styles.css';
      break;
    default:
      stylesheet.href = 'styles.css'; // default theme
  }

  // Save the selected theme in localStorage
  localStorage.setItem('theme', theme);
}
