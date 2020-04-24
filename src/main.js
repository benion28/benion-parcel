import Header from './components/Header';
import User from './components/User';

import './scss/main.scss';

const app = async () => {
    document.getElementById("header").innerHTML = Header();
    document.getElementById("user").innerHTML = await User();
}

// Init App
app();