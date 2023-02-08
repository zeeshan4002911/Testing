function activityNotifications(expenditure, d) {
    // Write your code here
    let notification = 0;
    let temp = [];
    if (d == expenditure.length) { return 0 };
    for (let i = 0; i < d; i++) {
        temp.push(expenditure[i])
    }
    let sort_temp = [...temp];
    sort_temp.sort((a, b) => a - b);
    let median = (sort_temp.length % 2) ? sort_temp[Math.floor(sort_temp.length / 2)] : (sort_temp[sort_temp.length / 2] + sort_temp[Math.floor((sort_temp.length - 1) / 2)]);
    if (expenditure[d] >= 2 * median) { notification++ };

    for (let i = d; i < expenditure.length; i++) {
        temp.shift();
        temp.push(expenditure[i]);

        let sort_temp = [...temp];
        sort_temp.sort((a, b) => a - b);
        let median = (sort_temp.length % 2) ? sort_temp[Math.floor(sort_temp.length / 2)] : (sort_temp[sort_temp.length / 2] + sort_temp[Math.floor((sort_temp.length - 1) / 2)]);
        if (expenditure[d] >= 2 * median) { notification++ };
    }
    return notification;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
// console.log(activityNotifications([1,2,3,4,4], 4));