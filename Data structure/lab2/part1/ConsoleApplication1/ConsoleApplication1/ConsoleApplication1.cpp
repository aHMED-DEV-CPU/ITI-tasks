
#include <iostream>
using namespace std;


class Employee {
public:
    int id;

    Employee(int id = 0) : id(id) {}
};

class Node {
    public:
        Employee data;
        Node* pNext;
        Node* pPrev;
        Node() : data(0), pNext(nullptr), pPrev(nullptr) {}  // default ctr 
        Node(int id) : data(id), pNext(nullptr), pPrev(nullptr) {} // specific id 
        Node(const Employee& e) : data(e.id), pNext(nullptr), pPrev(nullptr) {}  // emp id 
        ~Node() {
        }

};

class SortedDLL {
private:
    Node* pStart;
    Node* pLast;
public:
    SortedDLL() :pStart(nullptr), pLast(nullptr) {};

    // Copy constructor
    SortedDLL(const SortedDLL& other) : pStart(nullptr), pLast(nullptr) {
        Node* curr = other.pStart;   // first node in the origin    
        while (curr) {
            insertNode(curr->data.id);
            curr = curr->pNext;
        }
            }
    // Destructor
    ~SortedDLL() {
        Node* curr = pStart;
        while (curr) {
            Node* temp = curr;   // store current value in temp 
            
            curr = curr->pNext;   // go to the new value 

            delete temp;
        
        }
        pStart = pLast = nullptr;
    }
    
    // Assignment operator
    SortedDLL& operator=(const SortedDLL& other) {
        if (this == &other) return *this; // the same obj want to make copy 

        // Delete current list
        this->~SortedDLL();          // object want to copy may have nodes 

        // Copy from other
        Node* curr = other.pStart;
        while (curr) {
            insertNode(curr->data.id);
            curr = curr->pNext;
        }

        return *this;
    }
    ////////// insert node 
    void insertNode(int id) {
        Node* newNode = new Node(id);

        // empty list
        if (!pStart) {
            pStart = pLast = newNode;
            return;
        }

        // insert at beginning
        if (id < pStart->data.id) {
            newNode->pNext = pStart;
            pStart->pPrev = newNode;
            pStart = newNode;
            return;
        }

        // insert at end
        if (id > pLast->data.id) {
            newNode->pPrev = pLast;
            pLast->pNext = newNode;
            pLast = newNode;
            return;
        }

        // insert in middle
        // 
         // srtart pointer from the second node 
        Node* curr = pStart->pNext;
        while (curr) {
            if (id < curr->data.id) {
                Node* prev = curr->pPrev;
                // adding to my node 
                newNode->pNext = curr;
                newNode->pPrev = prev;
                // modify the sourounded nodes 
                prev->pNext = newNode;
                curr->pPrev = newNode;
                return;
            }
            // go to the next node 
            curr = curr->pNext;
        }
    }

    // Delete node by ID
    bool deleteNode(int id) {
        Node* curr = searchNode(id);
        if (!curr) return false;
        // if the first 
        if (curr == pStart)
            pStart = curr->pNext;
        // if the last 
        if (curr == pLast)
            pLast = curr->pPrev;
        // if there is node before 
        if (curr->pPrev)
            curr->pPrev->pNext = curr->pNext;
        // if there is node after 
        if (curr->pNext)
            curr->pNext->pPrev = curr->pPrev;
        delete curr;
        return true;
    }

    // Search and return Node*
    Node* searchNode(int id) const {
        Node* curr = pStart;
        while (curr) {
            if (curr->data.id == id) return curr;
            curr = curr->pNext;
        }
        return nullptr;
    }

    // Display specific node
    bool displayNode(int id) const {
        Node* curr = searchNode(id);
        if (!curr) return false;

        std::cout << "Employee ID: " << curr->data.id << "\n";
        return true;
    }

    // Display entire list
    void displayAll() const {
        Node* curr = pStart;
        while (curr) {
            std::cout << curr->data.id << " ";
            curr = curr->pNext;
        }
        std::cout << "\n";
    }

    // Count nodes
    int nodeNumber() const {
        int count = 0;
        Node* curr = pStart;
        while (curr) {
            count++;
            curr = curr->pNext;
        }
        return count;
    }
    // operator[]  (get ID by index)
    int operator[](int index) const {
        int i = 0;
        Node* curr = pStart;

        while (curr) {
            if (i == index)
                return curr->data.id;
            i++;
            curr = curr->pNext;
        }

        cout << "Index out of range.\n";
        return -1;
    }
};



int main()
{
    SortedDLL list;

    list.insertNode(20);
    list.insertNode(5);
    list.insertNode(15);
    list.insertNode(50);

    list.displayAll();   

    std::cout << "Node count: " << list.nodeNumber() << "\n";

    list.displayNode(15);

    list.deleteNode(20);
    list.displayAll();  

    std::cout << "Element at index 1 = " << list[1] << "\n";

    SortedDLL copy = list;   // copy constructor
    copy.displayAll();
    return 0; 
}

