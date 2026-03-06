/*22.	A Számolj! feliratú nyomógombra kattintva a script ellenőrizze, hogy a napi minimum hőmérséklet nem magasabb-e, mint a napi maximum! Amennyiben igen, felugró üzenetablakban figyelmeztesse a felhasználót a hibájára! Ha megfelelő adatokat kapott, akkor a minta szerint a form alatti bekezdésbe írja ki az eredményt! */
        function szamol(){
            let maxhomerseklet=parseFloat(document.getElementById("maxho").value);
            let minhomerseklet=parseFloat(document.getElementById("minho").value);
            if(minhomerseklet>maxhomerseklet)alert("A min hőmérséklet nem lehet nagyobb a max hőmérsékletnél!");
            document.getElementById("eredmeny").innerHTML=`A napi hőingás: ${maxhomerseklet-minhomerseklet} &#8451 volt`;
            
        }