"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let nameRegex = /[aA-zZ, ]{1,}/;
let artworks = [];
document.addEventListener('DOMContentLoaded', () => {
    let title = document.getElementById('statueName');
    let year = parseInt(document.getElementById('creationYear').value);
    let price = parseInt(document.getElementById('priceInput').value);
    let height = parseInt(document.getElementById('statueHeight').value);
    let sumPrice = 0;
    let artCount = 0;
    document.getElementById('addStatue').addEventListener('click', () => {
        let helyesName = false;
        let helyesYear = false;
        let helyesPrice = false;
        let helyesHeight = false;
        if (!nameRegex.test(title.value)) {
            helyesName = false;
            document.getElementById('wrongName').textContent = 'Hibás név!';
        }
        else {
            helyesName = true;
            document.getElementById('wrongName').textContent = '';
        }
        if (year < 2023) {
            helyesYear = true;
            document.getElementById('wrongYear').textContent = '';
        }
        if (price > 0) {
            helyesPrice = true;
            document.getElementById('wrongPrice').textContent = '';
        }
        if (height > 10) {
            helyesHeight = true;
            document.getElementById('wrongHeight').textContent = '';
        }
        if (helyesName && helyesYear && helyesPrice && helyesHeight) {
            artCount++;
            sumPrice += parseInt(document.getElementById('priceInput').value);
            document.getElementById('artCount').textContent = artCount.toString();
            document.getElementById('sumPrice').textContent = sumPrice.toString();
            artworks.push(new Statue_1.Statue(document.getElementById('statueName').value, parseInt(document.getElementById('creationYear').value), parseInt(document.getElementById('inputPrice').value), parseInt(document.getElementById('statueHeight').value)));
            document.getElementById('statueName').textContent = '';
            document.getElementById('creationName').textContent = '';
            document.getElementById('inputPrice').textContent = '';
            document.getElementById('statueHeight').textContent = '';
        }
        else if (!helyesYear) {
            document.getElementById('wrongYear').textContent = 'Hibás év, max az akt. év lehet!';
        }
        else if (!helyesPrice) {
            document.getElementById('wrongPrice').textContent = 'Hibás Ár, min 1 Ft kell hogy legyen!';
        }
        else if (!helyesHeight) {
            document.getElementById('wrongHeight').textContent = 'Hibás magasság, min 10 cm kell hogy legyen!';
        }
        else {
        }
    });
});
