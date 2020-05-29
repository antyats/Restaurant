<template>
    <div class="home_container">
        <div class="home_container_address">
            <h1>Тверская улица, дом 13</h1>
            <h1>Москва</h1>
        </div>
        <div class="home_container_photo">
            <img src="../assets/images/food.png"/>
        </div>
        <div class="home_container_time">
            <h1 class="home_container_time-numbers">9:00 до 0:00</h1>
            <h1>Каждый день</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');

.home_container {
    margin: 3rem auto;
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_address {
        text-align: center;
        font-size: 1.5rem;
    }

    &_photo {
        background-size: cover;
        height: 40rem;

        & > img {
            height: 100%;
        }
    }

    &_time {
        text-align: center;
        font-size: 1.3rem;
        &-numbers {
            font-family: 'Balsamiq Sans', cursive;
        }
    }
}
</style>