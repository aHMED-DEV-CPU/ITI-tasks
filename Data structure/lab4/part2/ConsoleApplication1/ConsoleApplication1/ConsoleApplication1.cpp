#include <iostream>
#include <vector>
#include <limits>
using namespace std;

template <typename T>
class BinaryHeap {
private:
    int currentSize;          // Number of elements in heap
    vector<T> Array;          // Heap stored as array 

    // Percolate element down to restore heap property
    void percolateDown(int hole) {
        T tmp = Array[hole];
        int child;

        while (2 * hole <= currentSize) { // as long i have a left child 
            child = 2 * hole; // left child

            // choose smaller child if right 
            if (child != currentSize && Array[child + 1] < Array[child])
                child++;

            if (Array[child] < tmp) {
                Array[hole] = Array[child]; // slide child up
                hole = child; // move hole down 
            }
            else
                break;
        }
        Array[hole] = tmp;
    }

public:
    // Constructor
    explicit BinaryHeap(int capacity = 100)
        : Array(capacity + 1), currentSize(0) {
        Array[0] = numeric_limits<T>::min(); // the mimist value as it is nopt exist anything at  first element
    }

    // Check if heap is empty
    bool isEmpty() const {
        return currentSize == 0;
    }

    // Find minimum element
    const T& FindMin() const {
        if (isEmpty())
            throw runtime_error("Heap is empty");
        return Array[1];
    }

    // Insert element   // not change x inside function 
    void insert(const T& x) {
        if (currentSize == Array.size() - 1)
            Array.resize(Array.size() * 2);
        // temp position 
        int hole = ++currentSize;

        // Percolate up ^
        for (; x < Array[hole / 2]; hole /= 2)
            Array[hole] = Array[hole / 2];

        Array[hole] = x;
    }

    // Delete minimum element
    T DeleteMin() {
        if (isEmpty())
            throw runtime_error("Heap is empty");

        T minValue = Array[1];
        Array[1] = Array[currentSize--]; // take the last element to fill the hole after that decrease size 
        percolateDown(1);
        return minValue;
    }

    // operator[] (read-only heap access)
    T& operator[](int index) {
        if (index < 1 || index > currentSize)
            throw out_of_range("Index out of range");
        return Array[index];
    }

    // Print heap state
    void View() const {
        cout << "Heap: ";
        for (int i = 1; i <= currentSize; i++)
            cout << Array[i] << " ";
        cout << endl;
    }
};

int main() {
    BinaryHeap<int> heap;

    heap.insert(20);
    heap.insert(10);
    heap.insert(30);
    heap.insert(5);

    heap.View();        // Heap state
    cout << heap.FindMin() << endl;
    
    heap.DeleteMin();
    heap.View();

    cout << heap[1] << endl; // operator[]

    return 0;
}
