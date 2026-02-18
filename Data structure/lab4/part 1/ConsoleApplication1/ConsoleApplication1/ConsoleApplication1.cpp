#include <iostream>
using namespace std;



template <typename T>
class DynamicArray {

private:
    T* data;          // Pointer to dynamically allocated array
    int size;         
    int capacity;     // Total allocated size of the array
    static const int initialCapacity = 4; // Minimum starting capacity


    void resize(int newCapacity) {

        // Allocate new memory with larger capacity
        T* newData = new T[newCapacity];

        // Copy existing elements to the new array
        for (int i = 0; i < size; i++)
            newData[i] = data[i];

        
        delete[] data; // Free the old memory  
        // points to empty field 
       
        data = newData;  // Point data to the new array

        
        capacity = newCapacity;
    }

public:

    explicit DynamicArray(int _capacity = initialCapacity) {

        
        if (_capacity < initialCapacity)
            _capacity = initialCapacity;

        capacity = _capacity;
        size = 0;                     
        data = new T[capacity];       // Allocate memory
    }

  
        //Copy Constructor
 
    DynamicArray(const DynamicArray& other) {

        size = other.size;
        capacity = other.capacity;

        // Allocate new memory
        data = new T[capacity];

        // Copy elements
        for (int i = 0; i < size; i++)
            data[i] = other.data[i];
    }


       // Copy Assignment Operator
 
    DynamicArray& operator=(const DynamicArray& other) {

        
        if (this == &other)
            return *this;

       
        delete[] data;

        
        size = other.size;
        capacity = other.capacity;

      
        data = new T[capacity];

        
        for (int i = 0; i < size; i++)
            data[i] = other.data[i];

        return *this;
    }


      //  Destructor
       
    // free allocated memory 
    ~DynamicArray() {
        delete[] data;
    }

  
      //  operator[]
   
    T& operator[](int index) {

        // Check for valid index
        if (index < 0 || index >= size)
            if (index < 0 || index >= size) {
                throw out_of_range("Index out of range");
            }


        return data[index];
    }


       // Add at the end 
   
  
    void push_back(T value) {

        //  array is full
        if (size == capacity)
            resize(capacity * 2);

        // Insert element and increment size
        data[size++] = value;
    }


    int getSize() const {
        return size;
    }

    int getCapacity() const {
        return capacity;
    }

// remove the first x 
    void Remove(T x) {

        for (int i = 0; i < size; i++) {
            if (data[i] == x) {
                RemoveAt(i);
                return;
            }
        }
    }

  // remove by index
    void RemoveAt(int index) {

        // Validate index
        if (index < 0 || index >= size)
            throw out_of_range("Index out of range");

        // Shift elements to the left
        for (int i = index; i < size - 1; i++)
            data[i] = data[i + 1];

        // Decrease size
        size--;
    }
    void trim() {
        resize(size); 
    }
};


int main() {

    DynamicArray<int> arr;

    cout << "Initial size: " << arr.getSize()
        << ", capacity: " << arr.getCapacity() << endl;

    arr.push_back(10);
    arr.push_back(20);
    arr.push_back(30);

    cout << "After adding 3 elements -> size: " << arr.getSize()
        << ", capacity: " << arr.getCapacity() << endl;

    arr.Remove(20);
    arr.push_back(40);

    cout << "After removing 20 and adding 40 -> size: " << arr.getSize()
        << ", capacity: " << arr.getCapacity() << endl;

    
    arr.trim();

    cout << "After trim -> size: " << arr.getSize()
        << ", capacity: " << arr.getCapacity() << endl;

    
    cout << "Array elements: ";
    for (int i = 0; i < arr.getSize(); i++)
        cout << arr[i] << " ";
    cout << endl;

    return 0;
}
