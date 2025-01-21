var app = angular.module("CountryApp", []);

app.controller("CountryController", function ($scope, $http) {
  $scope.country = null;
  $scope.error = null;
  $scope.currency = null;

  // Function to fetch country data
  $scope.fetchData = function (query) {
    if (!query || query.trim() === "") {
      $scope.country = null;
      $scope.error = "Please enter a valid country name.";
      return;
    }

    const url = `https://restcountries.com/v3.1/name/${query}`; // Enclose the URL in backticks

    $http.get(url).then(
      function (response) {
        if (response.data && response.data.length > 0) {
          $scope.country = response.data[0]; // Get the first matching country
          $scope.error = null;

          // Parse currency details
          const currencies = $scope.country.currencies;
          if (currencies) {
            const currencyKeys = Object.keys(currencies);
            $scope.currency = currencyKeys.length
              ? currencies[currencyKeys[0]].name
              : "No currency data available";
          } else {
            $scope.currency = "No currency data available";
          }
        } else {
          $scope.error = "No matching country found.";
          $scope.country = null;
        }
      },
      function (error) {
        $scope.error = "Country not found or API error occurred.";
        $scope.country = null;
      }
    );
  };
});
