"use strict";
var $pokeNotify = $("#pb-poke-notify");
var $pbPokeNotifyList = $("#pb-poke-notify-list");
var pokemonsToNotifyOf = JSON.parse($pbPokeNotifyList.val());
var pokeList = [];  // contains all 150 pokemon in form { id: id, text: name}

$.getJSON("locale").done(function(data) {

    $.each(data, function(key, value) {
        pokeList.push( { id: key, text: value } );
    });

    $pokeNotify.select2({
        placeholder: "Type be notified of pokemon",
        data: pokeList
    });
    $pokeNotify.val(pokemonsToNotifyOf).trigger("change");
});

// exclude multi-select listener
$pokeNotify.on("change", function (e) {
    pokemonsToNotifyOf = $pokeNotify.val().map(Number);
    $pbPokeNotifyList.val(JSON.stringify(pokemonsToNotifyOf));
});
