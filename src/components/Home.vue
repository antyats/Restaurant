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
            <h1 class="home_container_time-numbers number">9:00 до 0:00</h1>
            <h1>Каждый день</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home'
}
</script>

<style lang="scss" scoped>

.home_container {
    margin: 0 auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_address {
        margin-top: 10rem;
        text-align: center;
        font-size: 1.5rem;
    }

    &_photo {
        margin-top: 4rem;
        background-size: cover;
        position: relative;
        & > img {
            width: 100%;
            height: 100%;
        }
    }

    &_time {
        text-align: center;
        font-size: 1.3rem;
        margin-top: 5rem;
    }
}

    @media (max-width: 1500px) {
        .home_container {
            &_address {
                margin-top: 5rem;
            }
            &_photo {
                & > img {
                    width: 43rem;
                }
            }
            &_time {
                margin-top: 0;
            }
        }
    }

    @media (max-width: 1000px) {

    }
</style>