
let res = [];
function merge(arr,start,mid,end){

    let i = start;
    let j = mid+1;
    const temp = [];
    let k = 0

    while(i <= mid && j <= end){
            if(arr[i] < arr[j]){
                temp[k] = arr[i];
                i++
                k++
            }else{
                temp[k] = arr[j];
                j++;
                k++
            }
    }

    while(i <= mid){
        temp[k] = arr[i];
        i++
        k++
    }

    while(j<= end){
        temp[k] = arr[j];
        j++
        k++
    }

    for ( p = 0; p < temp.length; p++){
        arr[start+p] = temp[p]
    }

}

function mergeSort(arr,start,end){
    if(start < end){
            let mid = Math.floor((start+end)/2);
            mergeSort(arr,start,mid)  // left part
            mergeSort(arr,mid+1,end) // right part
            merge(arr,start,mid,end)

    }
   
}
let arr = [12,31,35,8,32,17]
mergeSort(arr,0,arr.length-1)
console.log(arr)