

#include <iostream>
using namespace std;

						/////////////////////////////////////////////////////////search//////////////////////
// sequential search (sorted array )
int seqSearch(int arr[] , int size  , int SearchedNumber) {
	for (int i = 0; i < size; i++) {
		if (arr[i] == SearchedNumber) {
			return i;
		}
		 //++
		if (arr[i] > SearchedNumber) {  //  number is bigger than number i want to search and sorted 
			return -1;
		}
	}
	return -1;
}

// binary (iterative)
int binarySearchI(int arr[], int size, int SearchedNumber) {
	int start = 0;
	int end = size - 1;
	while (start <= end) {
		int mid = (start + end) / 2;
		if (SearchedNumber == arr[mid])
			return mid;
		if (SearchedNumber < arr[mid])
			end = mid - 1;
		if (SearchedNumber > arr[mid])
			start = mid + 1;

	}

	return -1;


}


// binary   (recursive)
int binarySearchR(int arr[], int start ,  int end , int SearchedNumber) {
	if (start <= end) {
		int mid = (start + end) / 2;
		if (SearchedNumber == arr[mid])
			return mid;
		if (SearchedNumber < arr[mid])
			return binarySearchR(arr , start , mid - 1 , SearchedNumber);

		if (SearchedNumber > arr[mid])
			return binarySearchR(arr, mid + 1, end, SearchedNumber);
	}
	return -1;
}

							//////////////////////////////////////////////////// sort /////////////////////
void swap(int& x, int& y) {
	int temp = x;
	x = y;
	y = temp;
	
}

void bubbleSort(int arr[] , int  size) {
	bool isSorted = false;
	for (int i = 0; i < size && (!isSorted); i++)
	{
		isSorted = true; // ++
		for (int j = 0; j < size - i - 1; j++)
		{
			if (arr[j] > arr[j + 1]) {   ///////////////// greater
				swap(arr[j], arr[j + 1]);
					isSorted = false;
			}
		}
	}

}

// merge 
void mergeArrays(int arr[], int left, int mid, int right) {

	int leftSize = mid - left + 1;   
	int rightSize = right - mid;     

	
	int* leftArr = new int[leftSize];
	int* rightArr = new int[rightSize];

	//  copy left side 
	for (int i = 0; i < leftSize; i++)
		leftArr[i] = arr[left + i];

	// copy right side 
	for (int i = 0; i < rightSize; i++)
		rightArr[i] = arr[mid + 1 + i];

	int i = 0;      //  left pointer 
	int j = 0;      //  right pointer 
	int k = left;   // pointer of main array 

	// merge
	while (i < leftSize && j < rightSize) {
		if (leftArr[i] <= rightArr[j])    ////////////////////////// greter
			arr[k++] = leftArr[i++];
		else
			arr[k++] = rightArr[j++];
	}

	// left elements in left 
	while (i < leftSize)
		arr[k++] = leftArr[i++];

	//  left elements in right  
	while (j < rightSize)
		arr[k++] = rightArr[j++];
}

//  (Merge Sort)
void mergeSort(int arr[], int left, int right) {

	if (left < right) {
		int mid = (left + right) / 2;

		// arrang for each row 
		mergeSort(arr, left, mid);
		mergeSort(arr, mid + 1, right);

		// merge rows
		mergeArrays(arr, left, mid, right);
	}
}

int partition(int arr[], int start, int end) {
	int pivot = arr[start];      //  pivot => first element 
	int left = start + 1;        // element next to pivot 
	int right = end;             // end of array x

	while (true) {
		// Move left index to the right until we find an element greater than pivot
		while (left <= right && arr[left] <= pivot)
			left++;

		// Move right index to the left until we find an element smaller than pivot
		while (arr[right] > pivot)
			right--;

		// If indices cross, stop the loop      left and right met 
		if (left > right)
			break;
		else
			swap(arr[left], arr[right]); // Swap elements to correct side of pivot
	}

	// Place pivot in its correct sorted position
	swap(arr[start], arr[right]);
	return right;  // Return new index of pivot
}

// Quick Sort function
void quickSort(int arr[], int start, int end) {
	if (start < end) {
		int pivotIndex = partition(arr, start, end);  // Partition the array

		quickSort(arr, start, pivotIndex - 1);        // Sort left part
		quickSort(arr, pivotIndex + 1, end);          // Sort right part
	}
}

// heap function 
void heapify(int arr[], int size, int rootIndex) {
	int largest = rootIndex;       // Assume root is the largest
	int leftChild = 2 * rootIndex + 1;  // Left child index
	int rightChild = 2 * rootIndex + 2; // Right child index

	// If left child is larger than root
	if (leftChild < size && arr[leftChild] > arr[largest])
		largest = leftChild;

	// If right child is larger than the current largest
	if (rightChild < size && arr[rightChild] > arr[largest])
		largest = rightChild;

	// If root is not the largest, swap with the largest child
	if (largest != rootIndex) {
		swap(arr[rootIndex], arr[largest]);
		heapify(arr, size, largest); 
	}
}

// Heap Sort function
void heapSort(int arr[], int size) {
	//check level by level 
	for (int i = size / 2 - 1; i >= 0; i--)
		heapify(arr, size, i);

	// Extract elements from heap one by one  (put the largest element  ih his position )
	for (int i = size - 1; i >= 0; i--) {
		swap(arr[0], arr[i]);       // Move current root (largest) to the end
		heapify(arr, i, 0);         // Heapify the reduced heap
	}
}


int main()
{
	int unSortedArr[8] = {5 , 6 , 7 ,1 ,3 ,2 , 8 , 4};
	int sortedArr[8] = { 1 ,  2 , 3 , 4 , 5 , 6  , 7 , 8 };
	
	/////////////////////////////////////////////////////////search//////////////////////
	// sequential search (sorted array )
	cout << seqSearch(sortedArr , 8 , 7) << endl;
	// binary (iterative)
	cout << binarySearchI(sortedArr, 8, 5) << endl;
	// binary   (recursive)
	cout << binarySearchR(sortedArr, 0, 8 , 5) << endl;
	//////////////////////////////////////////////////// sort /////////////////////


	/*bubbleSort(unSortedArr, 8);*/
	
	// merge 

	/*mergeSort(unSortedArr, 0, 7);*/



	/*quickSort(unSortedArr, 0, 7);*/


	heapSort(unSortedArr, 8);

 for (int i = 0; i < 8; i++)
	{
	 cout << unSortedArr[i] << " ";
	};





	return 0;

}


