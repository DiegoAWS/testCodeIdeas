const fs = require('fs');

const BOARD_SOURCES = ["SMA", "FA", "TRSH", "CLAIM", "OTHER"];
const lorem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'

const generateFakeData = (numberOfRecords) => {

    let data = [];

    for (let i = 0; i < numberOfRecords; i++) {
        data.push({
            id: i,
            operatorId: Math.floor(Math.random() * 100000000).toString().padEnd(8, '0'),
            boardSN: Math.random()
            .toString(36)
            .substring(2, 10).toUpperCase(),
            boardSource: BOARD_SOURCES[Math.floor(Math.random() * BOARD_SOURCES.length)],
            // random time started in 2022
            timeStarted: new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28), Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)).toISOString(),
            // random time span from 3 to 5 hours in hh:mm:ss
            timeBaked: new Date(Math.floor(Math.random() * 2) + 3 * 60 * 60 * 1000).toISOString().substring(11,19),
            // random text from 10 to 20 characters
            comments: lorem.substring(0, Math.floor(Math.random() * 50) + 10),
        });
    }
    return JSON.stringify(data, null, 2);

}
// save result in a file json
fs.writeFileSync('data.json', generateFakeData(2841));
