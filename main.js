swap = (left, right) => {
    var temp = left
    left = right;
    right = temp;
}

partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)];
    i = left;
    j = right;

    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(i, j);
            i++;
            j--;
        }
    }
    return i;
}
partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)];
    i = left;
    j = right;

    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(i, j);
            i++;
            j--;
        }
    }
    return i;
}