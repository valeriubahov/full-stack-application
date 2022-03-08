let weapons;
let shields;
let pplants;
let engines;
let coolers;

fetch('http://localhost:8888/ships').then(
    res => res.json()).then(
        json => {
            displayShips(json);

            document.getElementById('btnNewShip').addEventListener('click', addNewShip);
            document.getElementById('btnUpdateShip').addEventListener('click', updateShip);



            const rmvShip = document.querySelectorAll('.delBtn');
            const editShip = document.querySelectorAll('.upBtn');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteShip);
            }

            for (const ship of editShip) {
                ship.addEventListener('click', fillShipFields);
            }
        });


function fillWeapon() {
    let weapOption = '';
    for (weapon of weapons) {
        weapOption += '<option value="' + weapon.WEAPONID + '">' + weapon.WEAPON_NAME + '</option>';
    }
    document.querySelector('.weapon').innerHTML = weapOption;
}
function fillShield() {
    //shield
    let shieldOption = '';
    for (shield of shields) {
        shieldOption += '<option value="' + shield.SHIELDID + '">' + shield.SHIELD_NAME + '</option>';
    }
    document.querySelector('.shield').innerHTML = shieldOption;
}
function fillPower() {
    //Power Plant
    let powerOption = '';
    for (pplant of pplants) {
        powerOption += '<option value="' + pplant.POWERPLANTID + '">' + pplant.PPLANT_NAME + '</option>';
    }
    document.querySelector('.pplant').innerHTML = powerOption;
}
function fillEngine() {
    //Engine
    let engineOption = '';
    for (engine of engines) {
        engineOption += '<option value="' + engine.ENGINEID + '">' + engine.ENGINE_NAME + '</option>';
    }
    document.querySelector('.engine').innerHTML = engineOption;
}
function fillCooler() {
    //coolers
    let coolerOption = '';
    for (cooler of coolers) {
        coolerOption += '<option value="' + cooler.COOLERID + '">' + cooler.COOLER_NAME + '</option>';
    }
    document.querySelector('.cooler').innerHTML = coolerOption;
}




fetch('http://localhost:8888/weapons').then(
    res => res.json()).then(
        json => {
            weapons = json;
            displayWeapons(json);

            document.getElementById('btnNewWeap').addEventListener('click', addNewWeapon);
            document.getElementById('btnUpdateWeap').addEventListener('click', updateWeapon);

            const rmvShip = document.querySelectorAll('.delBtnWeapon');
            const editWeap = document.querySelectorAll('.upBtnWeapon');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteWeapons);
            }

            for (const up of editWeap) {
                up.addEventListener('click', fillWeaponFields);
            }

            fillWeapon();
        });



fetch('http://localhost:8888/shields').then(
    res => res.json()).then(
        json => {
            shields = json;
            displayShields(json);
            document.getElementById('btnNewShield').addEventListener('click', addNewShield);
            document.getElementById('btnUpdateShield').addEventListener('click', updateShield);

            const rmvShip = document.querySelectorAll('.delBtnShield');
            const editShield = document.querySelectorAll('.upBtnShield');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteShield);
            }

            for (const btn of editShield) {
                btn.addEventListener('click', fillShieldFields);
            }
            fillShield();
        });



fetch('http://localhost:8888/power').then(
    res => res.json()).then(
        json => {
            pplants = json;
            displayPower(json);
            document.getElementById('btnNewPower').addEventListener('click', addNewPower);
            document.getElementById('btnUpdatePower').addEventListener('click', updatePower);

            const rmvShip = document.querySelectorAll('.delBtnPower');
            const editShield = document.querySelectorAll('.upBtnPower');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deletePower);
            }

            for (const btn of editShield) {
                btn.addEventListener('click', fillPowerFields);
            }
            fillPower();
        });



fetch('http://localhost:8888/coolers').then(
    res => res.json()).then(
        json => {
            coolers = json;
            displayCoolers(json);
            document.getElementById('btnNewCooler').addEventListener('click', addNewCooler);
            document.getElementById('btnUpdateCooler').addEventListener('click', updateCooler);

            const rmvShip = document.querySelectorAll('.delBtnCooler');
            const editCooler = document.querySelectorAll('.upBtnCooler');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteCooler);
            }

            for (const btn of editCooler) {
                btn.addEventListener('click', fillCoolerFields);
            }
            fillCooler();
        });

fetch('http://localhost:8888/engines').then(
    res => res.json()).then(
        json => {
            engines = json;
            displayEngines(json);
            document.getElementById('btnNewEngine').addEventListener('click', addNewEngine);
            document.getElementById('btnUpdateEngine').addEventListener('click', updateEngine);
            const rmvShip = document.querySelectorAll('.delBtnEngine');
            const editEngine = document.querySelectorAll('.upBtnEngine');
            for (const btn of rmvShip) {
                btn.addEventListener('click', deleteEngine);
            }

            for (const btn of editEngine) {
                btn.addEventListener('click', fillEngineFields);
            }

            fillEngine();
        });

function addNewShip(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newShip'));
    fetch('http://localhost:8888/ships',
        {
            method: 'POST',
            body: formData
        });
}

function addNewWeapon(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newWeapon'));
    fetch('http://localhost:8888/weapons',
        {
            method: 'POST',
            body: formData
        });
}

function updateShip(event) {
    event.preventDefault();
    const shipId = event.currentTarget.value;
    const formData = new FormData(document.getElementById('newShip'));
    fetch('http://localhost:8888/ships/' + shipId,
        {
            method: 'PUT',
            body: formData
        });
}


function updateWeapon(event) {
    event.preventDefault();
    const weaponId = event.currentTarget.value;
    const formData = new FormData(document.getElementById('newWeapon'));
    fetch('http://localhost:8888/weapons/' + weaponId,
        {
            method: 'PUT',
            body: formData
        });
}

function addNewShield(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newShield'));
    fetch('http://localhost:8888/shields',
        {
            method: 'POST',
            body: formData
        });
}

function updateShield(event) {
    event.preventDefault();
    const shieldId = event.currentTarget.value;
    const formData = new FormData(document.getElementById('newShield'));
    fetch('http://localhost:8888/shields/' + shieldId,
        {
            method: 'PUT',
            body: formData
        });
}


function addNewPower(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newPower'));
    fetch('http://localhost:8888/power',
        {
            method: 'POST',
            body: formData
        });
}


function updatePower(event) {
    event.preventDefault();
    const powerId = event.currentTarget.value;
    const formData = new FormData(document.getElementById('newPower'));
    fetch('http://localhost:8888/power/' + powerId,
        {
            method: 'PUT',
            body: formData
        });
}


function addNewCooler(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newCooler'));
    fetch('http://localhost:8888/coolers',
        {
            method: 'POST',
            body: formData
        });
}

function updateCooler(event) {
    event.preventDefault();
    const coolerId = event.currentTarget.value;
    const formData = new FormData(document.getElementById('newCooler'));
    fetch('http://localhost:8888/coolers/' + coolerId,
        {
            method: 'PUT',
            body: formData
        });
}


function addNewEngine(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('newEngine'));
    fetch('http://localhost:8888/engines',
        {
            method: 'POST',
            body: formData
        });
}

function updateEngine(event) {
    event.preventDefault();
    const engineId = event.currentTarget.value;
    const formData = new FormData(document.getElementById('newEngine'));
    fetch('http://localhost:8888/engines/' + engineId,
        {
            method: 'PUT',
            body: formData
        });
}


function deleteShip(event) {
    const shipId = event.currentTarget.value;
    fetch('http://localhost:8888/ships/' + shipId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}


function deleteWeapons(event) {
    const weaponId = event.currentTarget.value;
    fetch('http://localhost:8888/weapons/' + weaponId,
        { method: 'DELETE' }
    ).then(res => res.text())
        .then(res => console.log(res));
}

function deletePower(event) {
    const powerId = event.currentTarget.value;
    fetch('http://localhost:8888/power/' + powerId,
        { method: 'DELETE' }
    ).then(res => res.text())
        .then(res => console.log(res));
}

function fillShipFields(event) {
    const shipId = event.currentTarget.value;
    fetch('http://localhost:8888/ships/' + shipId
    ).then(res => res.json()).then(
        json => {
            document.getElementById("ship").value = json.SHIP_NAME;

            //weapons
            let weapOption = '';
            for (weapon of weapons) {
                weapOption += '<option value="' + weapon.WEAPONID + '">' + weapon.WEAPON_NAME + '</option>';
            }
            document.querySelector('.weapon').innerHTML = weapOption;


            //shield
            let shieldOption = '';
            for (shield of shields) {
                shieldOption += '<option value="' + shield.SHIELDID + '">' + shield.SHIELD_NAME + '</option>';
            }
            document.querySelector('.shield').innerHTML = shieldOption;

            //Power Plant
            let powerOption = '';
            for (pplant of pplants) {
                powerOption += '<option value="' + pplant.POWERPLANTID + '">' + pplant.PPLANT_NAME + '</option>';
            }
            document.querySelector('.pplant').innerHTML = powerOption;

            //Engine
            let engineOption = '';
            for (engine of engines) {
                engineOption += '<option value="' + engine.ENGINEID + '">' + engine.ENGINE_NAME + '</option>';
            }
            document.querySelector('.engine').innerHTML = engineOption;

            //coolers
            let coolerOption = '';
            for (cooler of coolers) {
                coolerOption += '<option value="' + cooler.COOLERID + '">' + cooler.COOLER_NAME + '</option>';
            }
            document.querySelector('.cooler').innerHTML = coolerOption;

            document.getElementById("btnUpdateShip").style.display = "block";
            document.getElementById("btnUpdateShip").value = shipId;

        });
}

function fillWeaponFields(event) {
    const weaponId = event.currentTarget.value;
    fetch('http://localhost:8888/weapons/' + weaponId
    ).then(res => res.json()).then(
        json => {
            document.getElementById("weapName").value = json.WEAPON_NAME;
            document.getElementById("weapSize").value = json.WEAPON_SIZE;
            document.getElementById("weapGrade").value = json.WEAPON_GRADE;
            document.getElementById("weapDamage").value = json.WEAPON_DAMAGE;
            document.getElementById("weapCost").value = json.WEAPON_COST;
            document.getElementById("btnUpdateWeap").style.display = "block";
            document.getElementById("btnUpdateWeap").value = weaponId;

        });
}

function fillPowerFields(event) {
    const weaponId = event.currentTarget.value;
    fetch('http://localhost:8888/weapons/' + weaponId
    ).then(res => res.json()).then(
        json => {
            document.getElementById("weapName").value = json.WEAPON_NAME;
            document.getElementById("weapSize").value = json.WEAPON_SIZE;
            document.getElementById("weapGrade").value = json.WEAPON_GRADE;
            document.getElementById("weapDamage").value = json.WEAPON_DAMAGE;
            document.getElementById("weapCost").value = json.WEAPON_COST;
            document.getElementById("btnUpdateWeap").style.display = "block";
            document.getElementById("btnUpdateWeap").value = weaponId;

        });
}


function deleteShield(event) {
    const shieldId = event.currentTarget.value;
    fetch('http://localhost:8888/shields/' + shieldId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}

function fillShieldFields(event) {
    const shieldId = event.currentTarget.value;
    fetch('http://localhost:8888/shields/' + shieldId
    ).then(res => res.json()).then(
        json => {
            document.getElementById("shieldName").value = json.SHIELD_NAME;
            document.getElementById("shieldSize").value = json.SHIELD_SIZE;
            document.getElementById("shieldGrade").value = json.SHILED_GRADE;
            document.getElementById("shieldHP").value = json.SHIELD_HP;
            document.getElementById("shieldCost").value = json.SHIELD_COST;
            document.getElementById("shieldEmission").value = json.SHIELD_EMISSION;
            document.getElementById("btnUpdateWeap").style.display = "block";
            document.getElementById("btnUpdateWeap").value = shieldId;

            document.getElementById("btnUpdateShield").style.display = "block";
            document.getElementById("btnUpdateShield").value = shieldId;

        });
}


function fillPowerFields(event) {
    const powerId = event.currentTarget.value;
    fetch('http://localhost:8888/power/' + powerId
    ).then(res => res.json()).then(
        json => {
            document.getElementById("powerName").value = json.PPLANT_NAME;
            document.getElementById("powerSize").value = json.PPLANT_SIZE;
            document.getElementById("powerGrade").value = json.PPLANT_GRADE;
            document.getElementById("powerDraw").value = json.PPLANT_EFFECT;
            document.getElementById("powerCost").value = json.PPLANT_COST;
            document.getElementById("powerEmission").value = json.PPLANT_EMISSION;
            document.getElementById("btnUpdatePower").style.display = "block";
            document.getElementById("btnUpdatePower").value = powerId;

            document.getElementById("btnUpdatePower").style.display = "block";
            document.getElementById("btnUpdatePower").value = powerId;

        });
}


function deleteCooler(event) {
    const coolerId = event.currentTarget.value;
    fetch('http://localhost:8888/coolers/' + coolerId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}


function fillCoolerFields(event) {
    const coolerId = event.currentTarget.value;
    fetch('http://localhost:8888/coolers/' + coolerId,
    ).then(res => res.json()).then(
        json => {
            document.getElementById("coolerName").value = json.COOLER_NAME;
            document.getElementById("coolerSize").value = json.COOLER_SIZE;
            document.getElementById("coolerGrade").value = json.COOLER_GRADE;
            document.getElementById("coolerPower").value = json.COOLER_POWER;
            document.getElementById("coolerCost").value = json.COOLER_COST;
            document.getElementById("btnUpdateCooler").style.display = "block";
            document.getElementById("btnUpdateCooler").value = coolerId;

            document.getElementById("btnUpdateCooler").style.display = "block";
            document.getElementById("btnUpdateCooler").value = coolerId;

        });
}

function deleteEngine(event) {
    const engineId = event.currentTarget.value;
    fetch('http://localhost:8888/engines/' + engineId,
        { method: 'DELETE' }
    )
        .then(res => res.text())
        .then(res => console.log(res));
}
function fillEngineFields(event) {
    const engineId = event.currentTarget.value;
    fetch('http://localhost:8888/engines/' + engineId,
    ).then(res => res.json()).then(
        json => {
            document.getElementById("engineName").value = json.ENGINE_NAME;
            document.getElementById("engineSize").value = json.ENGINE_SIZE;
            document.getElementById("engineSpeed").value = json.ENGINE_SPEED;
            document.getElementById("engineCost").value = json.ENGINE_COST;
            document.getElementById("enginePowerCons").value = json.ENGINE_POWER_CONSUME;
            document.getElementById("engineEmission").value = json.ENGINE_EMISSION;

            document.getElementById("btnUpdateEngine").style.display = "block";
            document.getElementById("btnUpdateEngine").value = engineId;

            document.getElementById("btnUpdateEngine").style.display = "block";
            document.getElementById("btnUpdateEngine").value = engineId;

        });
}



function displayShips(json) {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function (event) {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "none") {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
            event.preventDefault();
        });
    }
    const shipDiv = document.querySelector('#ships');
    let str = "<table><tbody>";
    for (const ship of json) {
        str += "<tr><td>"
        str += ship.Ship;
        str += "</td>";
        str += "<td>";
        str += ship.Weapon;
        str += "</td>";
        str += "<td>";
        str += ship.Shield;
        str += "</td>";
        str += "<td>";
        str += ship.PowerPlant;
        str += "</td>";
        str += "<td>";
        str += ship.Engine;
        str += "</td>";
        str += "<td>";
        str += ship.Cooler;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='upBtn' value=${ship.SHIPID}><i class="fas fa-tools"></i></i></button>`;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='delBtn' value=${ship.SHIPID}><i class="far fa-trash-alt"></i></button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}


function displayWeapons(json) {
    const shipDiv = document.querySelector('#weapons');
    let str = "<table><tbody>";
    for (const ship of json) {
        str += "<tr><td>"
        str += ship.WEAPON_NAME;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_SIZE;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_GRADE;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_DAMAGE;
        str += "</td>";
        str += "<td>";
        str += ship.WEAPON_COST;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='upBtnWeapon' id='updateWeapon' value=${ship.WEAPONID}><i class="fas fa-tools"></i></i></button>`;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='delBtnWeapon' value=${ship.WEAPONID}><i class="far fa-trash-alt"></i></button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}



function displayShields(json) {
    const shipDiv = document.querySelector('#shields');
    let str = "<table><tbody>";
    for (const shield of json) {
        str += "<tr><td>"
        str += shield.SHIELD_NAME;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_SIZE;
        str += "</td>";
        str += "<td>";
        str += shield.SHILED_GRADE;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_HP;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_COST;
        str += "</td>";
        str += "<td>";
        str += shield.SHIELD_EMISSION;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='upBtnShield' value=${shield.SHIELDID}><i class="fas fa-tools"></i></i></button>`;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='delBtnShield' value=${shield.SHIELDID}><i class="far fa-trash-alt"></i></button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}



function displayCoolers(json) {
    const shipDiv = document.querySelector('#coolers');
    let str = "<table><tbody>";
    for (const shield of json) {
        str += "<tr><td>"
        str += shield.COOLER_NAME;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_SIZE;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_GRADE;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_POWER;
        str += "</td>";
        str += "<td>";
        str += shield.COOLER_COST;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='upBtnCooler' value=${shield.COOLERID}><i class="fas fa-tools"></i></i></button>`;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='delBtnCooler' value=${shield.COOLERID}><i class="far fa-trash-alt"></i></button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}



function displayEngines(json) {
    const shipDiv = document.querySelector('#engines');
    let str = "<table><tbody>";
    for (const shield of json) {
        str += "<tr><td>"
        str += shield.ENGINE_NAME;
        str += "</td>";
        str += "<td>";
        str += shield.ENGINE_SIZE;
        str += "</td>";
        str += "<td>";
        str += shield.ENGINE_SPEED;
        str += "</td>";
        str += "<td>";
        str += shield.ENGINE_COST;
        str += "</td>";
        str += "<td>";
        str += shield.ENGINE_POWER_CONSUME;
        str += "</td>";
        str += "<td>";
        str += shield.ENGINE_EMISSION;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='upBtnEngine' value=${shield.ENGINEID}><i class="fas fa-tools"></i></i></button>`;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='delBtnEngine' value=${shield.ENGINEID}><i class="far fa-trash-alt"></i></button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}




function displayPower(json) {
    const shipDiv = document.querySelector('#power');
    let str = "<table><tbody>";
    for (const shield of json) {
        str += "<tr><td>"
        str += shield.PPLANT_NAME;
        str += "</td>";
        str += "<td>";
        str += shield.PPLANT_SIZE;
        str += "</td>";
        str += "<td>";
        str += shield.PPLANT_GRADE;
        str += "</td>";
        str += "<td>";
        str += shield.PPLANT_EFFECT;
        str += "</td>";
        str += "<td>";
        str += shield.PPLANT_COST;
        str += "</td>";
        str += "<td>";
        str += shield.PPLANT_EMISSION;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='upBtnPower' value=${shield.POWERPLANTID}><i class="fas fa-tools"></i></i></button>`;
        str += "</td>";
        str += '<td class="buttonHover">';
        str += `<button class='delBtnPower' value=${shield.POWERPLANTID}><i class="far fa-trash-alt"></i></button>`;
        str += "</td>";
        str += "</tr > ";
    }
    str += "</tbody></table>";
    shipDiv.innerHTML += str;
    console.log(json);
}
