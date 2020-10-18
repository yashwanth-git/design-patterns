/** Strategy Pattern **/
//Encapsulating closely related algorithms
function mergeSort() {
    this.use = (arr) => {
        console.log("merge sorted")
    }
}
function quickSort() {
    this.use = (arr) => {
        console.log("quick sorted")
    }
}
function heapSort() {
    this.use = (arr) => {
        console.log("heap sorted")
    }
}

function Sort() {
    this.sortingAlgorithm = "";
    this.setAlgorithm = (sortingAlgorithm) => {
        this.sortingAlgorithm = sortingAlgorithm;
    }
    this.use = (arr) => {
        this.sortingAlgorithm.use(arr);
    }
}

const merge = new mergeSort();
const quick = new quickSort();
const heap = new heapSort();
const arr = [1, 2, 3, 4, 5];
const sort = new Sort();

sort.setAlgorithm(quick); //Set sorting algorithm 
sort.use(arr); //Use sorting algorithm

sort.setAlgorithm(heap);
sort.use(arr);

sort.setAlgorithm(merge);
sort.use(arr);