/**
 * Project controller
 */

import '../styles/index.scss';

// Using jQuery
var $ = require('jquery');
window.jQuery = $;
window.$ = $;

// application
import { Main } from './project/main';

$(document).ready(() => {
    new Main();
});
