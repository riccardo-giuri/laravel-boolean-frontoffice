<script>
    export default {
        props: {
            cocktail: Object,
        }
    }
</script>

<template>

    <div class="card h-100">
        <img :src="cocktail.imageURL" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{cocktail.name}}</h5>
            <p class="card-text">{{ cocktail.alcoholic == 1 ? "Alcolico" : "Analcolico"}}</p>
        </div>
    </div>
</template>

<style>
.card-img-top {
    height: 275px;
    object-fit: cover;
    border-radius: 15px;
}

.card{
    background-color: transparent;
    border: 0;
}

.card-body{
    padding: .5rem 0;
}

.card-title{
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    color: #D1B875;
    font-size: 30px;
    letter-spacing: -0.24px;
}

.card-text{
    font-family: 'Karla', serif;
    font-weight: 300;
    color: white;
    font-size: 17px;
    letter-spacing: -0.16px;
    padding-top: 4px;
}
</style>