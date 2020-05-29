<template>
    <footer class="footer">
        <div class="footer_links">
            <router-link to='/menu'>
                <h4>Меню</h4>
            </router-link>
            <router-link to='/chef'>
                <h4>Шеф</h4>
            </router-link>
            <router-link to='/'>
                <h4>Забронировать столик</h4>
            </router-link>
            <router-link to='/'>
                <h4>Как нас найти?</h4>
            </router-link>
        </div>
        <div class="footer_number">
            <h3>+ 123 456 789</h3>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');

.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_links {
        display: flex;
        & > a {
            padding-left: 1rem;
            font-size: 1.6rem;
            text-decoration: none;
            color: #000000;
        }
    }

    &_number {
        font-family: 'Balsamiq Sans', cursive;
        & > h3 {
            font-size: 2rem;
            font-weight: 200;
        }
    }

}

</style>