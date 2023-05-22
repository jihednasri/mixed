import { Controller } from '@hotwired/stimulus';
<<<<<<< HEAD
=======

>>>>>>> d33210a009779287c90f55308b86eb3c7df1382b
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
import axios from 'axios';
<<<<<<< HEAD
=======

>>>>>>> d33210a009779287c90f55308b86eb3c7df1382b
export default class extends Controller {
    static values = {
        infoUrl: String
    }
<<<<<<< HEAD
    play(event) {
        event.preventDefault();
=======

    play(event) {
        event.preventDefault();

>>>>>>> d33210a009779287c90f55308b86eb3c7df1382b
        axios.get(this.infoUrlValue)
            .then((response) => {
                const audio = new Audio(response.data.url);
                audio.play();
            });
    }
}