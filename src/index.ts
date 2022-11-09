import { Artwork } from "./artwork";
import { Statue } from "./Statue";

let nameRegex =/[aA-zZ, ]{1,}/;
let artworks: Array<Artwork> = [];

document.addEventListener('DOMContentLoaded', () => {
    
    let title = document.getElementById('statueName') as HTMLInputElement;
    let year = document.getElementById('creationYear') as HTMLInputElement;
    let price = document.getElementById('priceInput') as HTMLInputElement;
    let height = document.getElementById('statueHeight') as HTMLInputElement;
    let sumPrice=0;
    let artCount=0;

    document.getElementById('addStatue')!.addEventListener('click',() => {
        let helyes = false;
        if (!nameRegex.test(title.value)) {
            document.getElementById('wrongName')!.textContent='Hibás név!';
        } else {
            document.getElementById('wrongName')!.textContent='✔️';
            helyes=true;
        }

        if(!helyes) {
            return false;
        }
        
        document.getElementById('artCount')!.textContent = artCount.toString();
        document.getElementById('sumPrice')!.textContent = sumPrice.toString();
    });

})