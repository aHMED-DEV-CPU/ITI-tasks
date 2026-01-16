
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
// base class 
class DLL {
protected:
    Node* pStart;
    Node* pLast;

public:
    DLL() : pStart(nullptr), pLast(nullptr) {}

    // Destructor  
    virtual ~DLL() {
        clear();
    }
    // Copy constructor
    DLL(const DLL& other) : pStart(nullptr), pLast(nullptr) {
        Node* curr = other.pStart;
        while (curr) {
            addNode(curr->data.id);
            curr = curr->pNext;
        }
    }

    // Assignment operator
    DLL& operator=(const DLL& other) {
        if (this == &other) return *this;
        clear();
        Node* curr = other.pStart;
        while (curr) {
            addNode(curr->data.id);
            curr = curr->pNext;
        }
        return *this;
    }
    virtual void addNode(int id) {
        Node* newNode = new Node(id);
        //empty 
        if (!pStart) {
            pStart = pLast = newNode;
            return;
        }
        // after the last 
        pLast->pNext = newNode;
        newNode->pPrev = pLast;
        pLast = newNode;
    }

    // Clear list
    void clear() {
        Node* curr = pStart;
        while (curr) {
            Node* temp = curr;
            curr = curr->pNext;
            delete temp;
        }
        pStart = pLast = nullptr;
    }

    // Delete Node by ID
    bool deleteNode(int id) {
        Node* curr = searchNode(id);
        if (!curr) return false;

        if (curr == pStart) pStart = curr->pNext;
        if (curr == pLast) pLast = curr->pPrev;
        // if there is node before 
        if (curr->pPrev) curr->pPrev->pNext = curr->pNext;
        // if there is node after 
        if (curr->pNext) curr->pNext->pPrev = curr->pPrev;

        delete curr;
        return true;
    }

    // Search Node by ID
    Node* searchNode(int id) const {
        Node* curr = pStart;
        while (curr) {
            if (curr->data.id == id) return curr;
            curr = curr->pNext;
        }
        return nullptr;
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

// ===== Stack using DLL =====
class StackDLL : public DLL {
public:
    // Push to stack (add at end)
    void push(int id) {
        addNode(id);
    }
    // Pop from stack (remove last)
    Node* pop() {
        //empty 
        if (!pLast) return nullptr;
        // store last 
        Node* temp = pLast;

        pLast = pLast->pPrev;
        // make the new  it's next = 0 
        if (pLast) pLast->pNext = nullptr;
        // it was the last one 
        else pStart = nullptr; //  empty

        temp->pPrev = temp->pNext = nullptr; //  still exists in the heap 
        return temp;
    }

    // Peek top of stack
    Node* peek() const {
        return pLast;
    }

};

// ===== Queue using DLL =====
class Queue : public DLL {
public:
    // Enqueue (add at end)
    void enQ(int id) {
        addNode(id);
    }

    // Dequeue (remove first)
    Node* deQ() {
        // empty 
        if (!pStart) return nullptr;
        // store the first 
        Node* temp = pStart;
        // 
        pStart = pStart->pNext;
        // make the next first 
        if (pStart) pStart->pPrev = nullptr;
        // it was the only one 
        else pLast = nullptr; // queue empty

        temp->pNext = temp->pPrev = nullptr;
        return temp;
    }

    // Peek front
    Node* peek() const {
        return pStart;
    }
};

int main()
{
    cout << "=== Stack Example ===\n";
    StackDLL stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.displayAll();

    Node* top = stack.pop();
    if (top) {
        cout << "Popped: " << top->data.id << endl;
        delete top;
    }
    stack.displayAll();

    cout << "\n=== Queue Example ===\n";
    Queue q;
    q.enQ(100);
    q.enQ(200);
    q.enQ(300);
    q.displayAll();

    Node* front = q.deQ();
    if (front) {
        cout << "Dequeued: " << front->data.id << endl;
        delete front;
    }
    q.displayAll();

    return 0;

}

