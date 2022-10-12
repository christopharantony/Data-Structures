const x = 11;

const getCountPackets = (x) => {
    let bigpacket = parseInt(x / 5);
    if (bigpacket < 1) {
        const smallPacket = parseInt(x / 2);
        console.log(smallPacket, "smallPacket")
    } else {
        while (bigpacket > -1) {
            // if (bigpacket < 1) {
            //     const smallPacket = parseInt(x / 2);
            //     console.log(smallPacket, "smallPacket")
            // }
            let leftPacket = x - ( 5 * bigpacket );
            if (leftPacket % 2 === 0) {
                const smallPacket = leftPacket / 2;
                console.log(smallPacket, "smallPacket");
                break;
            }
            bigpacket--;
        }
    }
    console.log(bigpacket, "bigpacket")
}

getCountPackets(x)