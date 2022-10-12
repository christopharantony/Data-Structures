const goodness = (n,k,h,g) => {

    let counter = 0;

    for ( let i = 0; i < n ; i++ ) {
        let sum_of_goodness = g[i]
        let last_height = h[i]
        let sum_of_goodness2 = g[i]
        console.log(sum_of_goodness,k);
        // if ( sum_of_goodness >= k ){
        //     counter++;
        // }
        for ( let j = i+1; j < n ; j++ ) {

            if ( last_height <= h[j] ) {
                sum_of_goodness = sum_of_goodness + g[j]
                last_height = h[j]

            } else if ( h[i] <= h[j] ) {
                sum_of_goodness2 = sum_of_goodness2 + h[j]
            }


            if ( sum_of_goodness >= k || sum_of_goodness2 >= k  ) {
                counter++;
            }

        }
    }
    return counter;
}

const n = 3;
const k = 2;
// const h = [ 2, 6, 8, 5, 7 ];
// const g = [ 1, 3, 2, 6, 5 ];
const h = [ 1, 3, 2 ];
const g = [ 1, 2, 1 ];

const answer = goodness(n,k,h,g);
console.log(answer);