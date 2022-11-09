"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nameRegex = /[aA-zZ, ]{1,}/;
let artworks = [];
document.addEventListener('DOMContentLoaded', () => {
    let title = document.getElementById('statueName');
    let year = document.getElementById('creationYear');
    let price = document.getElementById('priceInput');
    let height = document.getElementById('statueHeight');
    let sumPrice = 0;
    let artCount = 0;
    document.getElementById('addStatue').addEventListener('click', () => {
        let helyes = false;
        if (!nameRegex.test(title.value)) {
            document.getElementById('wrongName').textContent = 'Hibás név!';
        }
        else {
            document.getElementById('wrongName').textContent = '✔️';
            helyes = true;
        }
        if (!helyes) {
            return false;
        }
        document.getElementById('artCount').textContent = artCount.toString();
        document.getElementById('sumPrice').textContent = sumPrice.toString();
    });
});
