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

// Add event listener for the input keyup
targetInput.addEventListener('keyup', function(event) {
  /*
  * Key codes
  *
  * Enter: 13
  * Arrow up: 38
  * Arrow down: 40
  */

  results.innerHTML = '';
  toggleResults('hide');

  if (this.value.length > 0) {
    matches = getMatches(this.value);

    if (matches.length > 0) {
      displayMatches(matches);
    }
  }

  if (results.classList.contains('visible')) {
    switch(event.keyCode) {
      case 13:
        targetInput.value = results.children[resultsCursor].innerHTML;
        toggleResults('hide');
        resultsCursor = 0;

        break;

      case 38:
        if  (resultCursor > 0) {
          resultsCursor--;

          moveCursor(resultsCursor);
        }

        break;

      case 40:
        if (resultsCursor < (matches.length -1)) {
          resultsCursor++;

          moveCursor(resultsCursor);
        }

        break;
    }
  }
});

// Define a function for checking if the input value matches any of the country names
function getMatches(inputText) {
  var matchList = [];

  for (var i = 0; i < countryList.length; i++) {
    if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
      matchList.push(countryList[i]);
    }
  }

  return matchList;
}
