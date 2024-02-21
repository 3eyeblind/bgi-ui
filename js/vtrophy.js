const trophy_data = [
    {
        "id": 100,
        "event": "DUST THE RUST- 2 MAN BEST BALL",
        "winners": ["joe", "logan", "Fallon"],
        "date": "2024-03-09"
    },
    {
        "id": 101,
        "event": "TBD",
        "winners": ["joseph", "logany"],
        "date": "2024-03-16"
    },
    {
        "id": 102,
        "event": "TBD",
        "winners": ["joseph", "logan", "Fallon"],
        "date": "2024-03-30"
    },
    {
        "id": 103,
        "event": "TBD- EARLY START 7:30AM",
        "winners": ["joseph", "logany"],
        "date": "2024-04-06"
    }
];

function loadTrophy(pid) {
    let trophy;
    if (pid) {
        trophy = trophy_data.find(t => t.id === pid);
        // set winner name
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
    } else {
        document.getElementById("topWinners");
        return;
    }

    // Display top winners only when an ID is provided
    displayTopWinners(trophy.winners);
}


function listAllTrophies() {
    let htmlTable = `<h1 style="color: gold; text-align: center;">BGML Event Winners</h1>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Event</th>
            <th scope="col">Winners</th>
        </tr>
    </thead>
    <tbody>`;


    trophy_data.sort((a, b) => new Date(b.date) - new Date(a.date));

    trophy_data.forEach(trophy => {
        const eventDate = new Date(trophy.date);
        let winnerstr = trophy.winners.join(", ");
        htmlTable += `
            <tr>
                <td>${eventDate.toDateString()}</td>
                <td>${trophy.event}</td>
                <td>${winnerstr}</td>
            </tr>`;
    });

    htmlTable += `</tbody>
    </table>`;

    document.getElementById("winnerList").innerHTML = htmlTable;
}

function displayTopWinners(winners) {
    // Count occurrences of each winner
    const winnerCounts = {};
    winners.forEach(winner => {
        winnerCounts[winner.toLowerCase()] = (winnerCounts[winner.toLowerCase()] || 0) + 1;
    });

    // Sort winners by count in descending order
    const sortedWinners = Object.keys(winnerCounts).sort((a, b) => winnerCounts[b] - winnerCounts[a]);

    // Display the top 3 winners
    let topWinnersHTML = "<h1>Top Winners</h1><ul>";
    for (let i = 0; i < Math.min(3, sortedWinners.length); i++) {
        topWinnersHTML += `<li>${sortedWinners[i]} - ${winnerCounts[sortedWinners[i]]} times</li>`;
    }
    topWinnersHTML += "</ul>";

    // Set the inner HTML of the element with the ID "topWinners"
    document.getElementById("topWinners").innerHTML = topWinnersHTML;
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pid = Number(urlParams.get('id'));

if (pid) {
    document.getElementById("winnerList").setAttribute("hidden", "");
    document.getElementById("topWinners").setAttribute("hidden", "");
    loadTrophy(pid);
} else {
    document.getElementById("pid").setAttribute("hidden", "");
    listAllTrophies();
    displayTopWinners(trophy_data.map(trophy => trophy.winners).flat());
}


// loop thru trophy_data for each item create a table row string 
// after loop combine string of table rows with table start and table end string
// get element id to winnerlist
// set the inner html = to the table string created above




