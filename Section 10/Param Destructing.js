const runner={
    first:"rahul",
    last:"ram",
    country:"india",
    titlle:"elder of thr order"
}

// function print(person){
//     const {
//         first,
//         last,
//         titlle
//     }=person;
//     console.log(`${first} ${last} ${titlle}`)
// }
function print({

        first,
        last,
        titlle
    }){
    console.log(`${first} ${last} ${titlle}`)
}

const response=[
    'HTTP/1.1',
    '200 ok',
    'application/json',
]
function parseresponse([protocol,statusCode,contentType]){
    console.log(`Status:${statusCode}`)
}




