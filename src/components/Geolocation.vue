<template>
    <div class="geolocation_container">
        <div class="geolocation_container_map">
            <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" @load="onMapLoaded" :center="userCoordinates" :zoom="15">
                <MglMarker :coordinates="markerCoordinates" color="orange" />
            </MglMap>
        </div>
        <div class="geolocation_container_block">
            <h3 class="number">Тверская улица, дом 13</h3>
            <h3>Москва</h3>
            <h3 class="number">+ 123 456 789</h3>
        </div>
        <div class="geolocation_container_block geolocation_container_block-image">
            <img src="../assets/images/image-asset.png" alt="logo" />
        </div>
        <div class="geolocation_container_block">
            <h3 class="number">9:00 до 0:00</h3>
            <h3>Каждый день</h3>
        </div>
    </div>
</template>

<script>
    import { MglMap, MglMarker } from 'vue-mapbox'
    import '../assets/mapbox-gl.css'

    export default {
        name: "Geolocation",
        components: {
            MglMap,
            MglMarker
        },
        data() {
            return {
                accessToken: 'pk.eyJ1Ijoic3RyZWNrIiwiYSI6ImNrOWE5dGNsajBpcDUzbG4yem95djVmcmoifQ.LRhPR6MgNN3I2t7PM2PBdw',
                mapStyle: 'mapbox://styles/streck/ck9adrot8018j1iljehx379ce',
                userCoordinates: [],
                markerCoordinates: [37.609036, 55.761325]
            };
        },
        created() {
            this.map = null;
        },
        mounted() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.setUserCoordinates);
            }
        },
        methods: {
            onMapLoaded: async function (e) {
                this.map = e.map;

                const asyncActions = e.component.actions;
                const newParams = await asyncActions.flyTo({
                    center: this.markerCoordinates,
                    zoom: 15,
                    speed: 0.5
                })
                console.log(newParams)
            },
            setUserCoordinates: function (position) {
                this.userCoordinates = [position.coords.longitude, position.coords.latitude];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .geolocation_container {
        width: 90%;
        height: 80%;
        margin: 0 auto;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        &_map {
            width: 100%;
            height: 40rem;
        }

        &_block {
            text-align: center;
            margin-top: 3rem;

            & > h3 {
                font-size: 3.5rem;
            }

            & > img {
                height: 7rem;
            }
        }
    }
</style>