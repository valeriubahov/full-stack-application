const express = require('express');
const cors = require('cors');
const app = express();


const Database = require('better-sqlite3');
app.options('*', cors());

const multer = require('multer');
const upload = multer();

const db = new Database('myDB.db');

let SHIP_QUERY = "select s.SHIPID as SHIPID, s.SHIP_NAME as Ship, w.WEAPON_NAME as Weapon, sh.SHIELD_NAME as Shield, p.PPLANT_NAME as PowerPlant, e.ENGINE_NAME as Engine, c.COOLER_NAME as Cooler from SPACESHIPS s, WEAPONS w, SHIELDS sh, POWER_PLANT p, ENGINES e, COOLERS c"
    + " where s.WEAPONID = w.WEAPONID"
    + " and s.SHIELDID = sh.SHIELDID"
    + " and s.POWERPLANTID = p.POWERPLANTID"
    + " and s.ENGINEID = e.ENGINEID"
    + " and s.COOLERID = c.COOLERID";


app.get('/ships', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const ships = db.prepare(SHIP_QUERY);
    const arrOut = [];
    for (const ship of ships.iterate()) {
        arrOut.push(ship);
    }
    res.end(JSON.stringify(arrOut));
});

app.put('/ships/:SHIPID', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const param = req.params.SHIPID;
    const ship = db.prepare("update SPACESHIPS set SHIP_NAME = ?, WEAPONID = ?, SHIELDID = ?, POWERPLANTID = ?, ENGINEID = ?, COOLERID =?  where SHIPID = ?");
    const result = ship.run([req.body.ship, req.body.weapon, req.body.shield, req.body.pplant, req.body.engine, req.body.cooler, param]);
    res.end(console.log(result));
});

app.post('/ships', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO SPACESHIPS (SHIP_NAME, WEAPONID, SHIELDID, POWERPLANTID, ENGINEID, COOLERID, SHIPSIZE) values(?, ?, ?, ?, ?, ?, 1)");
    const result = weapons.run([req.body.ship, req.body.weapon, req.body.shield, req.body.pplant, req.body.engine, req.body.cooler]);
    res.end(console.log(result));
});



app.get('/ships/:SHIPID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.SHIPID;
    let complexObj = {};
    const ships = db.prepare("SELECT * FROM SPACESHIPS where SHIPID=?").get([param]);
    res.end(JSON.stringify(ships));
});


app.get('/weapons', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("SELECT * FROM WEAPONS");
    const arrOut = [];
    for (const weap of weapons.iterate()) {
        arrOut.push(weap);
    }
    res.end(JSON.stringify(arrOut));
});

app.get('/weapons/:WEAPONID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.WEAPONID;
    const weapons = db.prepare("SELECT * FROM WEAPONS where WEAPONID=?").get([param]);
    res.end(JSON.stringify(weapons));
});


app.get('/shields', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const shields = db.prepare("SELECT * FROM SHIELDS");
    const arrOut = [];
    for (const shield of shields.iterate()) {
        arrOut.push(shield);
    }
    res.end(JSON.stringify(arrOut));
});

app.get('/shields/:SHIELDID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.SHIELDID;
    const shield = db.prepare("SELECT * FROM SHIELDS where SHIELDID=?").get([param]);
    res.end(JSON.stringify(shield));
});


app.get('/power', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("SELECT * FROM POWER_PLANT");
    const arrOut = [];
    for (const weap of weapons.iterate()) {
        arrOut.push(weap);
    }
    res.end(JSON.stringify(arrOut));
});

app.get('/power/:POWERID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.POWERID;
    const shield = db.prepare("SELECT * FROM POWER_PLANT where POWERPLANTID=?").get([param]);
    res.end(JSON.stringify(shield));
});


app.get('/coolers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const shields = db.prepare("SELECT * FROM COOLERS");
    const arrOut = [];
    for (const shield of shields.iterate()) {
        arrOut.push(shield);
    }
    res.end(JSON.stringify(arrOut));
});

app.get('/coolers/:COOLERID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.COOLERID;
    const cooler = db.prepare("SELECT * FROM COOLERS where COOLERID=?").get([param]);
    res.end(JSON.stringify(cooler));
});

app.get('/engines', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const shields = db.prepare("SELECT * FROM ENGINES");
    const arrOut = [];
    for (const shield of shields.iterate()) {
        arrOut.push(shield);
    }
    res.end(JSON.stringify(arrOut));
});

app.get('/engines/:ENGINEID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.ENGINEID;
    const engine = db.prepare("SELECT * FROM ENGINES where ENGINEID=?").get([param]);
    res.end(JSON.stringify(engine));
});


app.post('/weapons', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO WEAPONS (WEAPON_NAME, WEAPON_SIZE, WEAPON_GRADE, WEAPON_DAMAGE, WEAPON_COST) values(?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.weapName, req.body.weapSize, req.body.weapGrade, req.body.weapDamage, req.body.weapCost]);
    res.end();
});

app.put('/weapons/:WEAPONID', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const param = req.params.WEAPONID;
    const weapons = db.prepare("update WEAPONS set WEAPON_NAME = ?, WEAPON_SIZE = ?, WEAPON_GRADE = ?, WEAPON_DAMAGE = ?, WEAPON_COST = ?  where WEAPONID = ?");
    const result = weapons.run([req.body.weapName, req.body.weapSize, req.body.weapGrade, req.body.weapDamage, req.body.weapCost, param]);
    res.end();
});


app.post('/shields', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO SHIELDS (SHIELD_NAME, SHIELD_SIZE, SHILED_GRADE, SHIELD_HP, SHIELD_COST, SHIELD_EMISSION) values(?, ?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.shieldName, req.body.shieldSize, req.body.shieldGrade, req.body.shieldHP, req.body.shieldCost, req.body.shieldEmission]);
    res.end();
});

app.put('/shields/:SHIELDID', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const param = req.params.SHIELDID;
    const weapons = db.prepare("update SHIELDS set SHIELD_NAME = ?, SHIELD_SIZE = ?, SHILED_GRADE = ?, SHIELD_HP = ?, SHIELD_COST = ?, SHIELD_EMISSION = ? where SHIELDID = ?");
    const result = weapons.run([req.body.shieldName, req.body.shieldSize, req.body.shieldGrade, req.body.shieldHP, req.body.shieldCost, req.body.shieldEmission, param]);
    res.end();
});


app.post('/power', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO POWER_PLANT (PPLANT_NAME, PPLANT_SIZE, PPLANT_GRADE, PPLANT_EFFECT, PPLANT_COST, PPLANT_EMISSION) values(?, ?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.powerName, req.body.powerSize, req.body.powerGrade, req.body.powerEffect, req.body.powerCost, req.body.powerEmission]);
    res.end();
});


app.put('/power/:POWERID', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const param = req.params.POWERID;
    const weapons = db.prepare("update POWER_PLANT set PPLANT_NAME = ?, PPLANT_SIZE = ?, PPLANT_GRADE = ?, PPLANT_EFFECT = ?, PPLANT_COST = ?, PPLANT_EMISSION = ? where POWERPLANTID = ?");
    const result = weapons.run([req.body.powerName, req.body.powerSize, req.body.powerGrade, req.body.powerEffect, req.body.powerCost, req.body.powerEmission, param]);
    res.end();
});


app.post('/coolers', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO COOLERS (COOLER_NAME, COOLER_SIZE, COOLER_GRADE, COOLER_POWER, COOLER_COST) values(?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.coolName, req.body.coolSize, req.body.coolGrade, req.body.coolPower, req.body.coolCost]);
    res.end();
});

app.put('/coolers/:COOLERID', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const param = req.params.COOLERID;
    const weapons = db.prepare("update COOLERS set COOLER_NAME = ?, COOLER_SIZE = ?, COOLER_GRADE = ?, COOLER_POWER = ?, COOLER_COST = ? where COOLERID = ?");
    const result = weapons.run([req.body.coolName, req.body.coolSize, req.body.coolGrade, req.body.coolPower, req.body.coolCost, param]);
    res.end();
});

app.post('/engines', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const weapons = db.prepare("INSERT INTO ENGINES (ENGINE_NAME, ENGINE_SIZE, ENGINE_SPEED, ENGINE_COST, ENGINE_POWER_CONSUME, ENGINE_EMISSION) values(?, ?, ?, ?, ?, ?)");
    const result = weapons.run([req.body.engineName, req.body.engineSize, req.body.engineSpeed, req.body.engineCost, req.body.enginePowerCons, req.body.engineEmission]);
    res.end();
});

app.put('/engines/:ENGINEID', upload.none(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const param = req.params.ENGINEID;
    const weapons = db.prepare("update ENGINES set ENGINE_NAME = ?, ENGINE_SIZE = ?, ENGINE_SPEED = ?, ENGINE_COST = ?, ENGINE_POWER_CONSUME = ?, ENGINE_EMISSION =? where ENGINEID = ?");
    const result = weapons.run([req.body.engineName, req.body.engineSize, req.body.engineSpeed, req.body.engineCost, req.body.enginePowerCons, req.body.engineEmission, param]);
    res.end();
});


app.delete('/ships/:SHIPID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.SHIPID;
    const ships = db.prepare("DELETE FROM SPACESHIPS where SHIPID=?");
    ships.run([req.params.SHIPID]);
    res.end();
});


app.delete('/weapons/:WEAPONID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const param = req.params.WEAPONID;
    const ships = db.prepare("DELETE FROM WEAPONS where WEAPONID=?");
    try {
        ships.run([req.params.WEAPONID]);
    }
    catch (ex) {
        if (ex.code == 'SQLITE_CONSTRAINT_FOREIGNKEY') {
            res.send("FK_ERROR");
        }
    }
    res.end();
});


app.delete('/shields/:SHIELDID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const ships = db.prepare("DELETE FROM SHIELDS where SHIELDID=?");
    ships.run([req.params.SHIELDID]);
    res.end();
});


app.delete('/power/:POWERID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const ships = db.prepare("DELETE FROM POWER_PLANT where POWERPLANTID=?");
    ships.run([req.params.POWERID]);
    res.end();
});

app.delete('/coolers/:COOLERID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const ships = db.prepare("DELETE FROM COOLERS where COOLERID=?");
    ships.run([req.params.COOLERID]);
    res.end();
});

app.delete('/engines/:ENGINEID', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    const ships = db.prepare("DELETE FROM ENGINES where ENGINEID=?");
    ships.run([req.params.ENGINEID]);
    res.end();
});


app.listen(8888, () => console.log('server running on port ' + 8888));