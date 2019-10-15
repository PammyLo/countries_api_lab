import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selectedCountry: null,
      favouriteCountries: []
    },
    computed: {
      totalPopulation: function () {
        return this.countries.reduce((sum, country) => {return sum + country.population}, 0);
      }
    },
    mounted() {
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function(){
        fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countries = data);
      },
      addToFavourites: function(){
        this.favouriteCountries.push(this.selectedCountry);
      }

    }
  });
});
