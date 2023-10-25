<script>
  import axios from 'axios';
  import Card from '../components/Card.vue';

  export default {
    components: {
      Card
    },

    data() {
      return {
        cocktails: [],
        searchData: {
        "name" : "",
        "alcoholic" : "",
        }
      }
    },

    methods: {
      fetchData() {
        axios.get("http://127.0.0.1:8000/api/cocktails", {
          params: this.searchData,})
        .then((response) => {
          this.cocktails = response.data;
          // console.log(response.data);
          console.log(this.searchData);
          console.log(response.data);
        })
      },

      searchCocktail() {
        this.fetchData();
      },

      resetSearch() {
        this.searchData.name = "";
        this.searchData.alcoholic = "";
        this.fetchData();
      },

      getImageURL(project) {
        return `http://127.0.0.1:8000/storage/${project.imageURL}`
      }
    },

    mounted() {
      this.fetchData();
    }
  }
</script>

<template>
    <div class="container">

      <div class="titleSection d-flex align-items-center justify-content-between">
        <h1 class="title">I nostri cocktails</h1>

        <div class="formContainer">
          <form class="h-100 d-flex" @submit.prevent="searchCocktail" @reset="resetSearch">
          <!-- cocktail search bar -->
          <div class="searchContainer">
            <img src="/search-icon.png" alt="">
            <input type="text" placeholder="Search" class="searchCustom" v-model="searchData.name">
          </div>
          
          <select class="form-select ms-2" v-model="searchData.alcoholic" aria-label="Alcoholic Content">
              <option value="" selected>Tutti</option>
              <option value="1">Alcolici</option>
              <option value="0">Analcolici</option>       
          </select>

          <button class="btn btn-primary filterBtn ms-2" type="submit">Filtra</button>
          <!-- <div class="mt-3 d-flex gap-2">
            <button class="btn btn-primary filterBtn" type="submit">Cerca</button>
            <button class="btn btn-danger" type="reset">Svuota</button>
          </div> -->
          </form>
        </div>
        
      </div>

      

        <div class="row">
        <div class="col-4" v-for="cocktail in this.cocktails" :key="cocktail.id">
            <Card :cocktail="cocktail"></Card>
        </div>
        </div>
    </div>   
</template>

<style scoped>
  /* searchbar changes */
  .searchCustom{
    background-color: transparent;
    border: 0;
  }

  .searchContainer{
    display: flex;
    border: 1px solid white;
    border-radius: 50px;
    gap: 7px;
    padding: 8px 12px;
    width: 70%;
  }

  input {
    color: white;
  }

  input:focus-visible {
    outline: none;
    color: white;
  }

  /* select alchohol changes */
  .form-select{
    background-color: transparent;
    border: 1px solid white;
    border-radius: 50px;
    color: #757575;
    width: 30%;
  }

  .filterBtn{
    background-color: #D1B875;
    /* border: 1px solid white; */
    border: 0;
    border-radius: 50px;
    color: #757575;
    color: black;
    width: 15%;
  }

  .filterBtn:active{
    border-color: transparent;
    background-color: white;
  }

  .formContainer{
    height: 40px;
    width: 45%;
  }

  .title{
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    color: white;
    font-size: 40px;
    letter-spacing: -0.8px;
  }

  .titleSection{
    margin-bottom: 35px;
  }

  .col-4{
    margin-bottom: 30px;
  }
</style>