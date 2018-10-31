const localhostApi = "http://localhost:64463/api/"
const paikkaUrl = localhostApi + "paikka/";
const kommenttiUrl = localhostApi + "kommentti/";
const placeholder = "TBD";
var jotain = "";

function haePaikat(callback) {
    fetch(paikkaUrl)
        .then(function (response) {
            console.log("ServiceClient");
            if (!response.ok) {
                var errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "haePaikat"
                };
                throw errviesti;
            }
            console.log("Datat saatu");
            console.dir(response);
            return response.json();
        })

        .then(function (lista) {
            callback(lista);
        });
}

function haePaikanTiedot(paikkaID, callback) {
    fetch(paikkaUrl + paikkaID)
        .then(function (response) {
            if (!response.ok) {
                var errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "haePaikat"
                };
                throw errviesti;
            }
            console.log("Datat saatu");
            console.dir(response);
            return response.json();
        })

        .then(function (lista) {
            callback(lista);
        });
}

function haePaikatKaupungissa(callback) {
    fetch(placeholder + jotain)
        .then(function (response) {
            if (!response.ok) {
                var errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "haePaikatKaupungissa"
                };

                throw errviesti;
            }
            console.log("Datat saatu");
            console.dir(response);
            return response.json();
        })

        .then(function (lista) {
            callback(lista);
        });
}

function haeKommentitPaikasta(paikkaID, callback) {
    fetch(kommenttiUrl + paikkaID)
        .then(function (response) {
            if (!response.ok) {
                var errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "haeKommentitPaikasta"
                };

                throw errviesti;
            }
            console.log("Datat saatu");
            console.dir(response);
            return response.json();
        })

        .then(function (lista) {
            callback(lista);
        });
}

function luoPaikka(paikka, callback) {
    console.log("here with:");
    console.log(paikka);
    return fetch(paikkaUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paikka)
    })
        .then(function (response) {
            callback(response.status);
        });
}

function luoKommentti(kommentti, callback) {
    return fetch(kommenttiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(kommentti)
    })
        .then(function (response) {
            callback(response);
        });
}

function poistaPaikka(id, callback) {
    return fetch(placeholder + id, {
        method: 'DELETE'
    })
        .then(function (response) {
            callback(response.status);
        });
}

function poistaKommentti(id, callback) {
    return fetch(placeholder + id, {
        method: 'DELETE'
    })
        .then(function (response) {
            callback(response.status);
        });
}

//
// REKISTERÖITYMINEN
//
function rekisteroiKayttaja(kayttaja, callback) {
    return fetch("http://localhost:64463/account/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(kayttaja)
    })
        .then(function (response) {
            callback(response.status);
        });
}


//
// KIRJAUTUMINEN
//
function kirjauduPalvelimelle(tunnus, salasana) {
    console.log("Eteenpäin lähtee: " + tunnus +" + "+ salasana );
    const pyynto = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tunnus, salasana })
    }

    return fetch("http://localhost:64463/account/login", pyynto)
        .then(handleResponse)
        .then(user => {
            // kirjautuminen onnistui, jos palvelimen vastauksessa on Jason Web token
            if (user.token) {
                // Tallennetaan käyttäjätiedot ja JWT local storageen, jotta tiedot säilössä 
                // myös sivujen vaihtuessa
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // LOGOUT JA LOCATION EI VIELÄ TOIMI, ALLA OLEVAT RIVIT PIILOTETTU
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export { rekisteroiKayttaja, kirjauduPalvelimelle, haePaikat, haePaikanTiedot, haePaikatKaupungissa, haeKommentitPaikasta, luoPaikka, luoKommentti, poistaPaikka, poistaKommentti };