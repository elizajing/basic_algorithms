const binarySearch = (input, target) => {
    let left = 0;
    let right = input.length - 1;
    let mid = Math.round(input.length / 2);

    if (target === input[mid]) {
        return mid;
    } else if (input[mid] < target) {
        mid = mid + 1;
        const newInput = input.slice(mid);
        binarySearch(newInput, target)
    } else if (input[mid] > target) {
        mid = mid - 1;
        const newInput = input.slice(0, mid + 1);
        binarySearch(newInput, target);
    }

    return "Target number does not exist in input array :(";
}

const input = [0, 2, 8, 12, 13, 20, 30, 41];
const res = binarySearch(input, 1);
console.log(res);
