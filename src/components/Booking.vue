<template>
    <div class="booking_container">
        <ul class="options_examples">
            <li>
                <div class="seat"></div>
                <h4>Свободны</h4>
            </li>
            <li>
                <div class="seat selected"></div>
                <h4>Выбраны</h4>
            </li>
            <li>
                <div class="seat occupied"></div>
                <h4>Заняты</h4>
            </li>
        </ul>
        <div class="booking_container_seats" @click="chooseSeat">
            <div class="booking_container_seats_screen"></div>
            <div class="booking_container_seats_screen-description"><h5>Сцена</h5></div>
            <div class="booking_container_seats_row">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
            </div>
            <div class="booking_container_seats_row">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
            </div>
            <div class="booking_container_seats_row">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
            </div>
            <div class="booking_container_seats_row">
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
                <div class="seat"></div>
            </div>
        </div>
        <form class="booking_container_form" @submit.prevent="submitForm">
            <label for="name" class="booking_container_form-label">Ваше имя</label>
            <input type="text" id="name" name="name" class="booking_container_form-text" v-model.trim="name"
                   :class="{invalid: !$v.name.required}"/>
            <small v-if="$v.name.$dirty && !$v.name.required">Нужно ввести имя</small>
            <label for="email" class="booking_container_form-label">Ваша почта</label>
            <input type="text" id="email" name="email" class="booking_container_form-text" v-model.trim="email"/>
            <small v-if="$v.email.$dirty && !$v.email.required">Нужно ввести корректную почту</small>
            <label for="guests" class="booking_container_form-label booking_container_form-label">Количество
                гостей</label>
            <input type="number" name="guests" id="guests" class="booking_container_form-text-count"
                   v-model.trim="guests" :class="{invalid: $v.guests.dirty && !v.guests.minValue}" min="1" max="5"/>
            <small v-if="$v.guests.$dirty && !$v.guests.maxValue">Гостей может быть 5 человек</small>
            <label for="time" class="booking_container_form-label">Во сколько прийдете?</label>
            <select id="time" class="booking_container_form-selection">
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
            </select>
            <button class="booking_container_form-button">Забронировать</button>
        </form>
    </div>
</template>

<script>
    import {email, required, minValue, maxValue} from 'vuelidate/lib/validators'

    export default {
        name: "Booking",
        data() {
            return {
                name: '',
                email: '',
                guests: 1,
                selectedSeats: []
            }
        },
        validations: {
            name: {required},
            email: {email, required},
            guests: {required, minValue: minValue(1), maxValue: maxValue(5)}
        },
        mounted: function () {
            const occupiedSeats = JSON.parse(localStorage.getItem('OccupiedSeats'));
            if (occupiedSeats) {
                [...document.querySelectorAll('.booking_container_seats_row .seat:not(.selected)')].forEach((seat, idx) => {
                    if (occupiedSeats.indexOf(idx) > -1) {
                        seat.classList.add('occupied');
                    }
                })
            }
        },
        methods: {
            submitForm: function () {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return ''
                }
                this.selectedSeats = [...document.querySelectorAll('.booking_container_seats_row .seat.occupied')];
                const selectedSeatsIdx = this.selectedSeats.map(seat => [...document.querySelectorAll('.booking_container_seats_row .seat:not(.selected)')].indexOf(seat));
                localStorage.setItem('OccupiedSeats', JSON.stringify(selectedSeatsIdx));

                this.$router.push('/qr-code');
            },
            chooseSeat: function (e) {
                console.log();
                if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
                    e.target.classList.toggle('selected');
                } else if (e.target.classList.contains(('seat'))) {
                    e.target.classList.toggle(('selected'));
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .booking_container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &_seats {
            perspective: 1000px;
            width: 100%;
            height: 60%;

            &_screen {
                background-color: #ffcd38;
                height: 7rem;
                width: 100%;
                margin: 30px 0;
                transform: rotateX(-45deg);
                box-shadow: 0 3px 10px rgba(255, 255, 255, .7);

                &-description {
                    font-size: 1.6rem;
                    text-align: center;
                }

            }

            &_row {
                display: flex;
                justify-content: center;
            }
        }

        &_form {
            width: 50%;
            display: flex;
            flex-direction: column;
            border: 10px solid #ffcd38;
            align-items: center;
            padding: 5rem;
            margin-top: 5rem;

            & > small {
                font-size: 1.6rem;
                color: red;
            }

            &-label {
                font-size: 1.6rem;
                font-weight: lighter;
                margin-top: 2rem;
                margin-bottom: 1rem;
            }

            &-label:first-of-type {
                margin-top: 0;
            }

            &-text {
                width: 80%;
                height: 3rem;
                padding-left: 1rem;
                font-size: 1.4rem;
                background-color: #fafafa;
                border: 2px solid #cccccc;

                &-count {
                    width: 10rem;
                    height: 3rem;
                    text-align: center;
                    font-size: 2rem;
                    background-color: #fafafa;
                    border: 2px solid #cccccc;
                }
            }

            &-selection {
                width: 10rem;
                height: 3rem;
                font-size: 1.6rem;
                background-color: #fafafa;
                border: 2px solid #cccccc;
            }

            &-button {
                margin-top: 3rem;
                background-color: #ffcd38;
                border: none;
                font-size: 2rem;
                padding: 2rem;
                cursor: pointer;
            }
        }
    }

    .options_examples {
        width: 40rem;
        height: 6rem;
        border: 2px solid #ffcd38;
        list-style-type: none;
        display: flex;
        padding: 0;

        & > li {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            & > .seat {
                width: 2rem;
                height: 2rem;
                margin: 1rem;
            }

            & > h4 {
                font-size: 1.3rem;
                margin-left: 1rem;
            }
        }
    }

    .seat {
        width: 4rem;
        height: 4rem;
        background-color: #ffcd38;
        border-radius: 100%;
        margin: 2rem;
        cursor: pointer;
    }

    .occupied {
        background-color: #4a4a4a !important;
        pointer-events: none;
    }

    .selected {
        background-color: rebeccapurple !important;
    }
</style>