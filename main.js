var gameData = {
    gold : 1,
    goldPerClick: 1,
    goldPerClickCost: 10,
    dwarfMiner : 1,
    dwarfMinerCost: 20
}

function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function dwarfMine() {
    gameData.gold += (gameData.dwarfMiner * gameData.goldPerClick)
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *=2
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
}

function buyDwarfMiner() {
    if (gameData.gold >= gameData.dwarfMinerCost) {
        gameData.gold -= gameData.dwarfMinerCost
        gameData.dwarfMiner += 1
        gameData.dwarfMinerCost *=2
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("perClickBuyMiner").innerHTML = "Buy Dwarf Miner (Currently " + gameData.dwarfMiner + ") Cost: " + gameData.dwarfMinerCost + " Gold"
    }
}

var mainGameLoop = window.setInterval(function() {
    dwarfMine()
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    document.getElementById("perClickBuyMiner").innerHTML = "Buy Dwarf Miner (Currently " + gameData.dwarfMiner + ") Cost: " + gameData.dwarfMinerCost + " Gold"
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 2000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    gameData = savegame
}