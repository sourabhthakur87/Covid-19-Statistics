const api = "https://api.covid19api.com/summary";
// var a=77;



function getSelectValue() {
    var selectValue = document.getElementById("opt").value;
    console.log(selectValue)
    // return selectValue
    if (selectValue == "Global") {
        let APIData = (url) => {
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {

                console.log(data);
                let country = data.Global.Country;
                let totalCases = data.Global.TotalConfirmed;
                let totalDeaths = data.Global.TotalDeaths;
                // let date = data.Countries[parseInt(selectValue)].NewDeaths;
                let today = new Date().toDateString();
                let newCase = data.Global.NewConfirmed;
                let newDeaths = data.Global.NewDeaths;
                displayData(
                    country, totalCases, totalDeaths,
                    today, newCase, newDeaths,
                );
            }).catch((error) => {
                console.log(error);
            });
        };

        APIData(api);
        function displayData(c, tc, td, t, nc, nd) {
            let pre1 = document.createElement("pre");
            let pre2 = document.createElement("pre");
            let pre3 = document.createElement("pre");
            let pre4 = document.createElement("pre");
            let pre5 = document.createElement("pre");
            let pre6 = document.createElement("pre");

            console.log(tc);
            pre1.innerHTML = `<span class="s1">Global Situation: </span>`;
            pre2.innerHTML = `<span class="s2">${tc}</span>`;
            pre3.innerHTML = `<span class="s3">${td}</span>`;
            pre4.innerHTML = `<span class="s4">${t}</span>`;
            pre5.innerHTML = `<span class="s4">${nc}</span>`;
            pre6.innerHTML = `<span class="s2">${nd}</span>`;

            document.getElementById("country").appendChild(pre1);
            document.getElementById("d1").appendChild(pre4);
            document.getElementById("d2").appendChild(pre2);
            document.getElementById("d3").appendChild(pre3);
            document.getElementById("d4").appendChild(pre5);
            document.getElementById("d5").appendChild(pre6);
        }
    }
    else {
        let APIData = (url) => {
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {

                console.log(data);
                let country = data.Countries[(selectValue)].Country;
                let totalCases = data.Countries[(selectValue)].TotalConfirmed;
                let totalDeaths = data.Countries[(selectValue)].TotalDeaths;
                // let date = data.Countries[parseInt(selectValue)].NewDeaths;
                let today = new Date().toDateString();
                let newCase = data.Countries[selectValue].NewConfirmed;
                let newDeaths = data.Countries[selectValue].NewDeaths;
                displayData(
                    country, totalCases, totalDeaths,
                    today, newCase, newDeaths,
                );
            }).catch((error) => {
                console.log(error);
            });
        };

        APIData(api);
        function displayData(c, tc, td, t, nc, nd) {
            let pre1 = document.createElement("pre");
            let pre2 = document.createElement("pre");
            let pre3 = document.createElement("pre");
            let pre4 = document.createElement("pre");
            let pre5 = document.createElement("pre");
            let pre6 = document.createElement("pre");

            console.log(tc);
            pre1.innerHTML = `<span class="s1">${c}</span> <span class="s1">Situation: </span>`;
            pre2.innerHTML = `<span class="s2">${tc}</span>`;
            pre3.innerHTML = `<span class="s3">${td}</span>`;
            pre4.innerHTML = `<span class="s4">${t}</span>`;
            pre5.innerHTML = `<span class="s4">${nc}</span>`;
            pre6.innerHTML = `<span class="s2">${nd}</span>`;

            document.getElementById("country").appendChild(pre1);
            document.getElementById("d1").appendChild(pre4);
            document.getElementById("d2").appendChild(pre2);
            document.getElementById("d3").appendChild(pre3);
            document.getElementById("d4").appendChild(pre5);
            document.getElementById("d5").appendChild(pre6);
        }
    }
}

// function Reset() {
//     var dropDown = document.getElementById("opt");
//     dropDown.selectedIndex = 0;
//     dropDown = window.location.reload(true);
// }

function rst() {

    var cn = document.getElementById('country')
    cn.textContent = " "

    let f = document.getElementsByClassName('dv1');
    for (let i = 0; i < f.length; i++) {
        f[i].textContent = ''
    }
}



