n = 5
works = [2, 1, 4, 5, 3]

# work_i - x - i
mintime = sum(works)
for x in range(1, n + 1):
    sum = 0
    for i in range(n):
        # print("i",i)
        jil = works[i] - x - (i + 1)
        if jil < 0:
            jil = jil * -1
        sum = sum + jil

    if mintime > sum:
        mintime = sum
        optimal_x = x

print(optimal_x)
print(mintime)