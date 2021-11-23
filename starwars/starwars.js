let charDiv = document.getElementById("chra");
    var timerId;

    async function searchChar() {
        let query = document.getElementById("query").value;
        if(query.length==0) return
        let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
        let data = await res.json();
        console.log(data);
        return data.results;
    }

    function throttleFn() {
        if (timerId) {               
            return false;
        }
        timerId = setTimeout(() => {      
            main();
            timerId = undefined;      
        }, 1000);
    }

    function appendChar(d) {
        charDiv.innerHTML = null;
        d.forEach(({ name }) => {
            let p = document.createElement("p");
            p.innerHTML = name;
            charDiv.append(p);
        });
        charDiv.style.display = "block";
    }

    async function main() {
        let char = await searchChar();
        console.log("Characters:",char);
        if(char==undefined){
            charDiv.style.display = "none";
            return;
        } ;
        if(char.length==0){
            charDiv.style.display = "none";
            return;
        } 
        appendChar(char);

    }