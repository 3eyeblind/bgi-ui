const trophy_data = [
    {
        "id": 100,
        "event": "major1",
        "winners": ["joe", "logan", "Fallon"],
        "date": "2024-02-07"
    },
    {
        "id": 101,
        "event": "major2",
        "winners": ["joseph", "logany"],
        "date": "2024-02-08"
    }
]

function loadTrophy() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(trophy_data);
    const pid = Number(urlParams.get('id'));
    console.log(pid);
    for (trophy of trophy_data) {
        console.log(trophy)
        // trophy is found
        if (pid === trophy.id) {
            //set winner name
            let winnerstr = "";
            for (winner of trophy.winners) {
                winnerstr = winnerstr + " " + winner;
            }
            let domq = document.getElementById("winnerName");
            domq.innerHTML = winnerstr;
            // set event
            domq = document.getElementById("event");
            domq.innerHTML = trophy.event;
            // set date

            const eventDate = new Date(trophy.date);
            domq = document.getElementById("date");
            domq.innerHTML = eventDate.toDateString();

        }
    }
}

loadTrophy();

//under 26 make a blank string w sting=blank