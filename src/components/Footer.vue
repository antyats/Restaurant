<template>
    <footer class="footer">
        <ul class="footer_links">
            <li>
                <router-link to='/menu'>
                    <h4>Меню</h4>
                </router-link>
            </li>
            <li>
                <router-link to='/booking'>
                    <h4>Забронировать столик</h4>
                </router-link>
            </li>
            <li>
                <router-link to='/geolocation'>
                    <h4>Как нас найти?</h4>
                </router-link>
            </li>
        </ul>
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
        display: flex;

            & > li {
                font-size: 1.5rem;
                margin-left: 2rem;
            }

            & > li:first-of-type {
                list-style: none;
                margin-left: 0;
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

    &_number {

        & > h3 {
            font-size: 2rem;
            font-weight: 200;
        }
    }
}

    @media (max-width: 1500px) {
        .footer {
            height: 10%;

            &_links {
                & > li > a > h4{
                    font-size: 1.3rem;
                }
            }
        }
    }

</style>