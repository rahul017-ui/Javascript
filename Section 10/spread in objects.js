const feline={
    legs:4,
    familu:"feline"
}
const cann={
    legs:4,
    familu:"cann",
    furry:true
}
const dog={
    ...cann,
    isPet:true,
    familu:"dog"
}

const housecat={
    ...feline,
    isgrump:true,
    personality:'unpredicatble'
}