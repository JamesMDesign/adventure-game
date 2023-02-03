class Character {
    constructor(name, description, pronoun, conversation, status, question, questioned = false, attack = false) {
        this._name = name;
        this._description = description;
        this._pronoun = pronoun;
        this._conversation = conversation;
        this._status = status;
        this._question = question;
        this._questioned = questioned;
        this._attack = attack;
    }

    set name(value) {
        if (value / length < 4) {
            alert("name is too short");
            return;
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            alert("description is too short");
            return;
        }
        this._description;
    }

    set conversation(value) {
        if (value.length < 4) {
            alert("conversation is too short");
            return;
        }
        this._conversation;
    }

    set status(value) {
        if (value.length < 4) {
            alert("status is too short");
            return;
        }
        this._status = value;
    }

    set pronoun(value) {
        return this._pronoun;
    }

    get attack() {
        return this._attack;
    }

    get questioned() {
        return this._questioned;
    }

    get question() {
        return this._question;
    }

    get pronoun() {
        return this._pronoun;
    }

    get status() {
        return this._status;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get conversation() {
        return this._conversation;
    }

    describe() {
        return `${this._name} is ${this._description}`;
    }

    quip() {
        return `${this._name} says ${this._conversation}`;
    }

    converse() {
        return `${this._name} says ${this._conversation}`;
    }

    inspect() {
        return `the ${Key.name} is ${Key.fineDetail}`;
    }

    question() {
        this._questioned = true;
        return `${this.name} says ${this._question}`;
    }

    readyAttack() {
        this._attack = true;
    }

    fightingEvent() {
        if (this._attack == true) {
            document.getElementById("fighting-event").style.display = "block";
        } else {
            document.getElementById("fighting-event").style.display = "none";
        }
    }
}


class Room {
    constructor(name, description, imageSrc, attackImageSrc, inStudy = false,) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
        this._character = "";
        this._item = "";
        this._imageSrc = imageSrc;
        this._attackImageSrc = attackImageSrc;
    }

    describe() {
        return this._description;
    }

    getDetails() {
        const entries = Object.entries(this._linkedRooms);
        let details = [];
        for (const [direction, room] of entries) {
            let text = "the " + room._name + " is to the " + direction;
            details.push(text);
        }
        return details;
    }

    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert("you can't go that way",);
            alert(this._name);
            return this;
        }
    }

    linkRooms(direction, roomToLink, unlocked) {
        this._linkedRooms[direction] = roomToLink;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            alert("description is too short.");
            return;
        }
        this._description = value;
    }

    set character(value) {
        this._character = value;
    }

    set item(value) {
        this._item = value;
    }

    get attackImageSrc() {
        return this._attackImageSrc;
    }

    get imageSrc() {
        return this._imageSrc;
    }

    get locked() {
        return this._locked;
    }

    get item() {
        return this._item;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get character() {
        return this._character;
    }
}

class Item {

    constructor(name, description, fineDetail, iD, hasGunImageSrc, noGunImageSrc, runImageSrc, collected = false, inspected = false) {
        this._name = name;
        this._description = description;
        this._fineDetail = fineDetail;
        this._iD = iD;
        this._collected = collected;
        this._inspected = inspected;
        this._hasGunImageSrc = hasGunImageSrc;
        this._noGunImageSrc = noGunImageSrc;
        this._runImageSrc = runImageSrc;

    }

    set fineDetail(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._fineDetail = value;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            alert("description is too short");
            return;
        }
        this._name = value;
    }

    get runImageSrc() {
        return this._runImageSrc;
    }

    get hasGunImageSrc() {
        return this._hasGunImageSrc;
    }

    get noGunImageSrc() {
        return this._noGunImageSrc;
    }

    get iD() {
        return this._iD;
    }

    get collected() {
        return this._collected;
    }

    get inspected() {
        return this._inspected;
    }

    get fineDetail() {
        return this._fineDetail;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    describe() {
        return `the ${this._name} is ${this._description}`;
    }

    inspect() {
        this._inspected = true;
        return `the ${this._name} ${this._fineDetail}`;
    }


    search() {
        this._collected = true;
        return `you found a ${this._name}`;
    }

    display() {
        document.getElementById(`${this._iD}`).style.display = "flex";
    }
}

var dieSound = document.getElementById("myAudio01");
var winSound = document.getElementById("myAudio02");
var shotgunSound = document.getElementById("myAudio03");
var weirdSound = document.getElementById("myAudio04");

// function to display current room info

function displayRoomInfo(room) {
    let occupantMsg = "";
    if (room.character === "") {
        occupantMsg = "";
    } else {
        occupantMsg = room.character.describe() + ". " + room.character.converse();
    }

    textContent = "<p>" + room.describe() + "</p>" + "<p>" + occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";

    var image = room.imageSrc;
    // console.log(image);

    var _img = document.getElementById('image');
    _img.src = image;

    document.getElementById("main-text").innerHTML = textContent;
    document.getElementById("button-area").innerHTML = '<input type="text" id="usertext" />';
    document.getElementById("usertext").focus();

}

// function to display current room searches

function displayCurrentRoomItems(room) {

    let searchMsg = "";

    if (room.item === "") {
        searchMsg = "";
    } else if (room.item.collected == true) {
        searchMsg = "";
    } else {
        searchMsg = room.item.search();
    }

    textContent = "<p>" + searchMsg + "</p>";

    document.getElementById("search-text").innerHTML = textContent;
}

// function to display current item inspections

function displayCurrentItemDetails(room) {

    let detailMsg = "";

    if (room.item.collected == true) {

        if (room.item === "") {
            detailMsg = "";
        } else if (room.item.inspected == true) {
            detailMsg = "";
        } else {
            detailMsg = room.item.inspect();
        }

        textContent = "<p>" + detailMsg + "</p>";

        document.getElementById("inspect-text").innerHTML = textContent;
    }
}

// function to display current character questioning

function displayCurrentQuestioning(room) {

    let questionMsg = "";

    if (room.character.questioning === "") {
        questionMsg = "";
    } else if (room.character.questioned == true) {
        questionMsg = "";
    } else {
        questionMsg = room.character.question();
    }

    if (room === Study) {
        var image02 = room.attackImageSrc;
        var _img02 = document.getElementById('image');
        _img02.src = image02;
    }

    textContent = "<p>" + questionMsg + "</p>";

    document.getElementById("question-text").innerHTML = textContent;
}

// function to display picked up item in the inventory

function displayTheInventory(room) {

    room.item.display();
}

// rooms

const GardenPath = new Room("garden path", "a short garden path", "pngs/path.png");
const Garden = new Room("Garden", "a beautiful garden", "pngs/garden.png");
const LivingRoom = new Room("Living room", "a comfy living room", "pngs/living_room.png");
const DiningRoom = new Room("Dining room", "an elegant dining room", "pngs/dining_room.png");
const Kitchen = new Room("Kitchen", "a small kitchen", "pngs/kitchen.png");
const Study = new Room("Study", "a cosy study with some bookshelves", "pngs/study.png", "pngs/attack.png")

// items

const Knife = new Item("knife", "A blunt knife, it doesn't look like there is any use for it", "has some blood stains", "knife");
const Key = new Item("key", "A bronze key", "appears old and worn", "key");
const Note = new Item("note", "A small note", "is a shopping list which reads 1)bread 2)milk 3)shovel 4)blood remover", "note");
const Shotgun = new Item("shotgun", "A deadly shotgun", "is loaded with shells!", "shotgun", "pngs/win.png", "pngs/lose.png", "pngs/lose.png");

// characters

const Detective = new Character("semiv the detective", "sneaky", "he", "whats all this then?", "alive");
const Murderer = new Character("evil looking guy", "nervous", "he", "what are you doing in here?", "alive", "Henry is the suspicious one");
const SuspiciousGuy = new Character("henry", "suspicious and slinky", "he", "i didn't see nothing", "alive", '"I saw a weird looking guy in the study"');
const DeadGuy = new Character("andrew", "decapitated", "he", "...", "dead", "nothing as he is dead");
const Robin = new Character("tweeter", "a small robin", "she", "ptweet!", "alive", "ptweeeet - I am a bird, have you lost your mind?");
const Cat = new Character("carl", "a fat cat", "he", "meow?", "alive", "nothing then rubs against your leg");

// room links

GardenPath.linkRooms("east", Garden);
Garden.linkRooms("west", GardenPath);

Garden.linkRooms("north", LivingRoom);
LivingRoom.linkRooms("south", Garden);

LivingRoom.linkRooms("north", DiningRoom);
DiningRoom.linkRooms("south", LivingRoom);

DiningRoom.linkRooms("north", Kitchen);
Kitchen.linkRooms("south", DiningRoom);

Kitchen.linkRooms("east", Study);
Study.linkRooms("west", Kitchen);

const searchElement = document.getElementById("search-button");
const inspectElement = document.getElementById("inspect-button");
const questionElement = document.getElementById("question-button");

const fightElement = document.getElementById("fight-button");
const runElement = document.getElementById("run-button");

function startGame() {

    weirdSound.play();

    document.getElementById("start-button").style.display = "none";
    document.getElementById("inspect-button").style.display = "inline-block";
    document.getElementById("question-button").style.display = "inline-block";
    document.getElementById("search-button").style.display = "inline-block";
    document.getElementById("main-text").style.display = "block";
    document.getElementById("button-area").style.display = "block";

    currentRoom = GardenPath;
    gun = Shotgun;

    displayRoomInfo(currentRoom);
    currentItem = currentRoom;
    searchElement.onclick = function () { search(currentRoom), displayTheInventory(currentRoom); };
    inspectElement.onclick = function () { inspect(currentItem); };
    questionElement.onclick = function () { question(currentRoom), makeADecision(currentRoom); };

    fightElement.onclick = function () { fight(gun); }
    runElement.onclick = function () { run(gun); }

    document.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            command = document.getElementById("usertext").value;
            document.getElementById("search-text").innerHTML = "";
            document.getElementById("inspect-text").innerHTML = "";
            document.getElementById("question-text").innerHTML = "";
            const directions = ["north", "south", "east", "west"];

            if (directions.includes(command.toLowerCase())) {

                currentRoom = currentRoom.move(command)
                displayRoomInfo(currentRoom);
                currentItem = currentRoom;

            } else {

                document.getElementById("usertext").value = ""
                alert("that is not a valid command please try again")

            }
        }

        if (currentRoom == Study) {
            currentRoom.character.readyAttack();
        }
    })
}

function collectItem(room) {
    room.item.collect();
}

function search(room) {
    displayCurrentRoomItems(room);
}

function inspect(room) {
    displayCurrentItemDetails(room);
}

function question(room) {
    displayCurrentQuestioning(room);
}

function makeADecision(room) {
    room.character.fightingEvent();
}

function fight(gun) {

    if (gun.collected) {

        document.getElementById("shotgun-text").style.display = "flex";
        document.getElementById("fighting-event").style.display = "none";
        document.getElementById("question-text").style.display = "none";
        document.getElementById("search-button").style.display = "none";
        document.getElementById("inspect-button").style.display = "none";
        document.getElementById("question-button").style.display = "none";
        document.getElementById("main-text").style.display = "none";
        document.getElementById("button-area").style.display = "none";
        document.getElementById("restart-button").style.display = "inline-block";


        shotgunSound.play();
        winSound.play();

        var image = gun.hasGunImageSrc;
        var _img = document.getElementById('image');
        _img.src = image;

    } else if (!gun.collected) {

        document.getElementById("no-shotgun-text").style.display = "flex";
        document.getElementById("fighting-event").style.display = "none";
        document.getElementById("question-text").style.display = "none";
        document.getElementById("search-button").style.display = "none";
        document.getElementById("inspect-button").style.display = "none";
        document.getElementById("question-button").style.display = "none";
        document.getElementById("main-text").style.display = "none";
        document.getElementById("button-area").style.display = "none";
        document.getElementById("restart-button").style.display = "inline-block";

        dieSound.play();

        var image = gun.noGunImageSrc;
        var _img = document.getElementById('image');
        _img.src = image;

    }
}

function run() {

    document.getElementById("run-text").style.display = "flex";
    document.getElementById("fighting-event").style.display = "none";
    document.getElementById("question-text").style.display = "none";
    document.getElementById("search-button").style.display = "none";
    document.getElementById("inspect-button").style.display = "none";
    document.getElementById("question-button").style.display = "none";
    document.getElementById("main-text").style.display = "none";
    document.getElementById("button-area").style.display = "none";
    document.getElementById("restart-button").style.display = "inline-block";

    dieSound.play();

    var image = gun.runImageSrc;
    var _img = document.getElementById('image');
    _img.src = image;

}

GardenPath.item = Key;
LivingRoom.item = Knife;
DiningRoom.item = Note;
Kitchen.item = Shotgun;

Study.character = Murderer;
DiningRoom.character = SuspiciousGuy;
LivingRoom.character = DeadGuy;
GardenPath.character = Robin;
Garden.character = Cat;


function startScreen() {

    document.getElementById("inspect-button").style.display = "none";
    document.getElementById("question-button").style.display = "none";
    document.getElementById("search-button").style.display = "none";
    document.getElementById("main-text").style.display = "none";
    document.getElementById("button-area").style.display = "none";
}

function restartGame() {
    window.location.reload();
}

startScreen();

// to do

// 1) a̶d̶d̶ b̶u̶t̶t̶o̶n̶s̶ f̶o̶r̶ a̶c̶t̶i̶o̶n̶s̶

// 2) a̶d̶d̶ s̶t̶a̶r̶t̶ s̶c̶r̶e̶e̶n̶

// 3) a̶d̶d̶ l̶o̶s̶e̶ s̶c̶r̶e̶e̶n̶
// 4) a̶d̶d̶ w̶i̶n̶ s̶c̶r̶e̶e̶n̶
// 5) a̶d̶d̶ c̶h̶a̶r̶a̶c̶t̶e̶r̶s̶ t̶o̶ e̶a̶c̶h̶ r̶o̶o̶m̶
// 6) a̶d̶d̶ i̶t̶e̶m̶s̶ t̶o̶ e̶a̶c̶h̶ r̶o̶o̶m̶

// 8) a̶d̶d̶ p̶i̶c̶t̶u̶r̶e̶s̶
// 9) a̶d̶d̶ s̶o̶u̶n̶d̶ e̶f̶f̶e̶c̶t̶s̶

// 10) a̶d̶d̶ c̶o̶n̶t̶r̶o̶l̶s̶ i̶n̶f̶o̶r̶m̶a̶t̶i̶o̶n̶ p̶a̶n̶e̶l̶
// 11) a̶d̶d̶ w̶a̶y̶ t̶o̶ i̶n̶s̶p̶e̶c̶t̶ i̶t̶e̶m̶s̶ f̶o̶r̶ i̶n̶f̶o̶

// 13) a̶d̶d̶ a̶ w̶a̶y̶ t̶o̶ s̶e̶a̶r̶c̶h̶ r̶o̶o̶m̶ f̶o̶r̶ i̶t̶e̶m̶s̶
// 14) a̶d̶d̶ a̶ w̶a̶y̶ t̶o̶ q̶u̶e̶s̶t̶i̶o̶n̶ s̶u̶s̶p̶e̶c̶t̶s̶
// 15) p̶i̶c̶k̶ u̶p̶ i̶t̶e̶m̶s̶ l̶o̶g̶i̶c̶
// 16) d̶i̶s̶p̶l̶a̶y̶ p̶i̶c̶k̶e̶d̶ u̶p̶ i̶t̶e̶m̶s̶
// 17) m̶a̶k̶e̶ m̶u̶r̶d̶e̶r̶e̶r̶ a̶t̶t̶a̶c̶k̶ y̶o̶u̶ w̶h̶e̶n̶ y̶o̶u̶ t̶r̶y̶ t̶o̶ l̶e̶a̶v̶e̶ -̶ y̶o̶u̶ c̶a̶n̶ c̶h̶o̶o̶s̶e̶ t̶o̶ r̶u̶n̶ o̶r̶ u̶s̶e̶ a̶n̶ i̶t̶e̶m̶ -̶ i̶f̶ y̶o̶u̶ r̶u̶n̶ y̶o̶u̶ d̶i̶e̶,̶ i̶f̶ y̶o̶u̶ u̶s̶e̶ t̶h̶e̶ s̶h̶o̶t̶g̶u̶n̶ y̶o̶u̶ k̶i̶l̶l̶ t̶h̶e̶ m̶u̶r̶d̶e̶r̶e̶r̶?̶ -̶ l̶i̶n̶k̶s̶ t̶o̶ l̶o̶s̶e̶ a̶n̶d̶ w̶i̶n̶ s̶c̶r̶e̶e̶n̶s̶

// 19) a̶d̶d̶ r̶e̶s̶t̶a̶r̶t̶ g̶a̶m̶e̶ b̶u̶t̶t̶o̶n̶
