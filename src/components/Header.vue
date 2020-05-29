<template>
    <header class="header">
        <div class="header_block header_block-left">
            <router-link to='/'>
                <h5>Главная</h5>
            </router-link>
            <router-link to='/menu'>
                <h5>Меню</h5>
            </router-link>
            <router-link to='/chef'>
                <h5>Шеф</h5>
            </router-link>
        </div>
        <div>
            <img class="header_block_logo" src="../assets/images/logo.png" />
        </div>
        <div class="header_block header_block-right">
            <router-link to='/'>
                <h5>Забронировать столик</h5>
            </router-link>
            <router-link to='/'>
                <h5>Как нас найти?</h5>
            </router-link>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>

.header {
    display: flex;
    align-items: center;
    height: 6rem;

    &_block {
        flex: 1;
        display: flex;
        padding-left: 3rem;
        padding-right: 5rem;
        
        &-left {
            & > a {
                font-size: 1rem;
                padding-left: 1rem;
                color: black;
                text-decoration: none;
            }
        }
        &-right {
            justify-content: flex-end;
            & > a {
                font-size: 1rem;
                padding-left: 1rem;
                color: black;
                text-decoration: none;
            }
        }
        &_logo {
            width: 10rem;
        }
    }
}

</style>