const merge = (left, right) => {
    let sortedArray = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    return [...sortedArray, ...left, ...right];
}

const mergeSort = (array) => {
    if(array.length === 1){
        return array;
    }

    let mid = Math.floor(array.length/2);

    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(left, right);
}
