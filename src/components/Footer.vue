<template>
    <footer class="footer">
        <div class="footer_links">
            <ul>
                <li>
                    <router-link to='/menu'>
                        <h4>Меню</h4>
                    </router-link>
                </li>
                <li>
                    <router-link to='/chef'>
                        <h4>Шеф</h4>
                    </router-link>
                </li>
                <li>
                    <router-link to='/'>
                        <h4>Забронировать столик</h4>
                    </router-link>
                </li>
                <li>
                    <router-link to='/'>
                        <h4>Как нас найти?</h4>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="footer_number number">
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

.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &_links {
        & > ul {
            display: flex;

            & > li {
                font-size: 1.5rem;
                margin-left: 2rem;
            }

            & > li:first-of-type {
                list-style: none;
            }

            & > li > a {
                text-decoration: none;
                color: #000000;

                & > h4 {
                    border-bottom: 1px solid black;
                    transition: opacity .3s;
                    font-size: 2rem;
                }
            }
        }
    }

    &_number {

        & > h3 {
            font-size: 2rem;
            font-weight: 200;
        }
    }

}

</style>