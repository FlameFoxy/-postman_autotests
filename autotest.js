// autotests for method api.pokemonbattle.me:9104/pokemons

pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Невозможно создать покемона без имени", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Отсутствует имя покемона(name)");
});


//autotest for method https://api.hh.ru/employers?text=яндекс+практикум
