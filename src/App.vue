<template>
    <div id="app">
        <div class="container">
            <Header/>
            <transition name="fade">
                <router-view/>
            </transition>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Piedra&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');

    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
    }

    body::-webkit-scrollbar {
        width: 10px;
        background-color: #ffcd38;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #4a4a4a;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
        background-color: #ffcd38;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        font-family: 'Piedra', cursive;
    }

    .container {
        background-color: #ffffff;
        width: 97%;
        height: 97%;
    }

    .number {
        font-family: 'Balsamiq Sans', cursive;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

</style>
