// def goodness(n, k, h, g):
//     counter = 0
//     for i in range(n):
//         sum_of_goodness = g[i]
//         last_height = h[i]
//         sum_of_goodness2 = g[i]
//         for j in range(i + 1, n):
//             if last_height <= h[j]:
//                 sum_of_goodness = sum_of_goodness + g[j]
//                 last_height = h[j]
//             elif h[i] <= h[j]:
//                 sum_of_goodness2 = sum_of_goodness2 + h[j]

        
            
//             if sum_of_goodness >= k:
//                 counter = counter + 1 
// n, k = map(int, input("enter the number of boys and minimum sum of goodness").split())
// h = list(map(int, input("enter the height").split()))
// g = list(map(int, input("enter the goodness").split()))

// out = goodness(n, k, h, g)
// print(out)