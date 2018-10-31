const url = "TBD";
var jotain = "";

function haePaikat(callback) {
    fetch("http://localhost:64463/api/paikka")
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
    fetch("http://localhost:64463/api/paikka/" + paikkaID)
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
    fetch(url + jotain)
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

function haeKommentit(callback) {
    fetch(url + jotain)
        .then(function (response) {
            if (!response.ok) {
                var errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "haeKommentit"
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

function haeKommentitPaikasta(callback) {
    fetch(url + jotain)
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
    return fetch(url + jotain, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paikka)
    })
        .then(function (response) {
            callback(response.status);
        });
}

function luoKommentti(kommentti, callback) {
    return fetch(url + jotain, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(kommentti)
    })
        .then(function (response) {
            callback(response.status);
        });
}

function poistaPaikka(id, callback) {
    return fetch(url + id, {
        method: 'DELETE'
    })
        .then(function (response) {
            callback(response.status);
        });
}

function poistaKommentti(id, callback) {
    return fetch(url + id, {
        method: 'DELETE'
    })
        .then(function (response) {
            callback(response.status);
        });
}

export { haePaikat, haePaikatKaupungissa, haeKommentit, haeKommentitPaikasta, luoPaikka, luoKommentti, poistaPaikka, poistaKommentti };