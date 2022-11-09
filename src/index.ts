import { Statue } from "./Statue";
import {Artwork} from "./Artwork";

let nameRegex =/[aA-zZ, ]{1,}/;
let artworks: Array<Artwork> = [];

document.addEventListener('DOMContentLoaded', () => {
    
    let title = document.getElementById('statueName') as HTMLInputElement;
    let year = parseInt((document.getElementById('creationYear') as HTMLInputElement).value);
    let price = parseInt((document.getElementById('priceInput') as HTMLInputElement).value);
    let height = parseInt((document.getElementById('statueHeight') as HTMLInputElement).value);
    let sumPrice=0;
    let artCount=0;

    document.getElementById('addStatue')!.addEventListener('click',() => {
        let helyesName = false;
        let helyesYear= false;
        let helyesPrice = false;
        let helyesHeight =false;
        console.log(year);
        console.log(price);
        if (!nameRegex.test(title.value)) {
            helyesName=false;
            document.getElementById('wrongName')!.textContent='Hibás név!';
        }
        else {
            helyesName=true;
            document.getElementById('wrongName')!.textContent='';
        }
        if (year < 2023) {
            helyesYear=true;
            document.getElementById('wrongYear')!.textContent='';
        }
        if(price > 0) {
            helyesPrice=true;
            document.getElementById('wrongPrice')!.textContent='';
        }
        if(height > 10) {
            helyesHeight=true;
            document.getElementById('wrongHeight')!.textContent='';
        }

        if(helyesName && helyesYear && helyesPrice && helyesHeight){
            artCount++;
            sumPrice+= parseInt((document.getElementById('priceInput') as HTMLInputElement).value);
            document.getElementById('artCount')!.textContent = artCount.toString();
            document.getElementById('sumPrice')!.textContent = sumPrice.toString();
            artworks.push(new Statue((document.getElementById('statueName') as HTMLInputElement).value, 
            parseInt((document.getElementById('creationYear') as HTMLInputElement).value),
            parseInt((document.getElementById('inputPrice') as HTMLInputElement).value),
            parseInt((document.getElementById('statueHeight') as HTMLInputElement).value)))
        } else if(!helyesYear) {
            document.getElementById('wrongYear')!.textContent='Hibás év, max az akt. év lehet!';
        } else if(!helyesPrice) {
            document.getElementById('wrongPrice')!.textContent='Hibás Ár, min 1 Ft kell hogy legyen!';
        } else if(!helyesHeight) {
            document.getElementById('wrongHeight')!.textContent='Hibás magasság, min 10 cm kell hogy legyen!';
        }

    });

})