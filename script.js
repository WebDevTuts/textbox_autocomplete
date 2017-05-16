/*
 * - Define variables
 * - Focus the input
 * - Add event listener for the input keyup and keydown
 * - Define a function for checking if the input value matches any of the country names
 * - Define a function for displaying autocomplete results
 * - Define a function for moving the cursor in the results list
 * - Define a function for toggling the results list
 */

var targetInput = document.getElementById('country'),
    results = document.getElementById('autocomplete-results'),
    countryList = ['Albania', 'Colombia', 'Cuba', 'El Salvador', 'Jordan', 'Kenya', 'Nepal', 'Romania', 'Sri Lanka', 'Wales'],
    matches = [],
    resultsCursor = 0;

// Focus the input
targetInput.focus();

// Add event listener for the input keydown
targetInput.addEventListener('keydown', function(event) {
  if (event.keyCode == '13') {
    event.preventDefault();
  }
});
