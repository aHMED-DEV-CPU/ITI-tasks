

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
    Node* left;
    Node* right;
    int height;

    Node(int empID)
        : data(empID), left(nullptr), right(nullptr), height(1) {
    }
    ~Node() {
        
    }
};
// AVl
class BST {
    Node* root;
    //   get the hight in each level when i call 
    int height(Node* n) {
        if (n != nullptr)
            return n->height;
        else
            return 0;
    }
    // get the balance 

    int getBalance(Node* n) {
        if (n != nullptr) {
            int leftH = height(n->left);
            int rightH = height(n->right);
            return leftH - rightH;
        }
        else {
            return 0;
        }
    }
    // height = 1 + max(l,r)
    void updateHeight(Node* n) {
        int leftH = height(n->left);
        int rightH = height(n->right);

        if (leftH > rightH)
            n->height = leftH + 1;
        else
            n->height = rightH + 1;
    }
    // when  left case is heavy make x is the root 
    Node* rotateRight(Node* y) {
        Node* x = y->left;
        // store the position of the  right side of x 
        Node* T2 = x->right;
        // put y in the right side of x
        x->right = y;
        y->left = T2; //   the right position of x    prevent nodes lost 

        updateHeight(y);
        updateHeight(x);

        return x;
    }
    // when right is heavey    making y is the root 
    Node* rotateLeft(Node* x) {

        Node* y = x->right;
   // store the left side of y 
        Node* T2 = y->left;

        y->left = x;
        x->right = T2;

        updateHeight(x);
        updateHeight(y);

        return y;
    } 

    // insert node
    // the  location tha the node i will put in 
    Node* insert(Node* node, int id) {
        if (node == nullptr) {
            Node* newNode = new Node(id);
            return newNode;
        }
        // if smaller put in the left side
        if (id < node->data.id) {
            node->left = insert(node->left, id);
        }
        else {
            if (id > node->data.id) {
                node->right = insert(node->right, id);
            }
            else {
                // return current node   will not push 
                return node; // duplicate not allowed   when both values id  are the same  
            }
        }
        // after  i pushed  the child nodes 
        updateHeight(node);

        int balance = getBalance(node);

        // LL   heavy in the left side   ==> go to right 
        if (balance > 1 && id < node->left->data.id)
            return rotateRight(node);

        // RR     heavy in the right side   ==> go to left 
        if (balance < -1 && id > node->right->data.id)
            return rotateLeft(node);

        // LR                                      
        if (balance > 1 && id > node->left->data.id) {
            node->left = rotateLeft(node->left);        //LL         
            return rotateRight(node);
        }

        // RL
        if (balance < -1 && id < node->right->data.id) {
            node->right = rotateRight(node->right); // RR
            return rotateLeft(node);
        }

        return node;
    }

    // MIN value 
    Node* minValueNode(Node* n) {   //////// used for delete
        while (n->left != nullptr) {
            n = n->left;
        }
        return n;
    }

    Node* remove(Node* root, int id) {
         // if the tree empty 
        if (root == nullptr)
            return root;

        // serach for the correct node
        if (id < root->data.id) {
            root->left = remove(root->left, id);
        }
        else {
            if (id > root->data.id) {
                root->right = remove(root->right, id);
            }
            else {
                // node found
                // if have no child or one 
                if (root->left == nullptr || root->right == nullptr) {

                    Node* temp;

                    if (root->left != nullptr)
                        temp = root->left;
                    else
                        temp = root->right;

                    delete root;
                    return temp;
                }

                Node* temp = minValueNode(root->right);   // see the smallest node in the right and put in the root 
                root->data.id = temp->data.id;
                root->right = remove(root->right, temp->data.id);
            }
        }

        updateHeight(root);

        int balance = getBalance(root);

        // LL
        if (balance > 1 && getBalance(root->left) >= 0)
            return rotateRight(root);

        // LR
        if (balance > 1 && getBalance(root->left) < 0) {
            root->left = rotateLeft(root->left);
            return rotateRight(root);
        }

        // RR
        if (balance < -1 && getBalance(root->right) <= 0)
            return rotateLeft(root);

        // RL
        if (balance < -1 && getBalance(root->right) > 0) {
            root->right = rotateRight(root->right);
            return rotateLeft(root);
        }

        return root;
    }



    // view    L => Node => R
    void inorder(Node* n) {
        if (n != nullptr) {
            inorder(n->left);  // go until the  last left
            cout << n->data.id << " ";
            inorder(n->right);
        }
    }

    int count(Node* n) {
        if (n == nullptr)
            return 0;

        return 1 + count(n->left) + count(n->right);
    }

    void destroy(Node* n) {
        if (n != nullptr) {
            destroy(n->left);
            destroy(n->right);
            delete n;
        }
    }

    public:
        BST() {
            root = nullptr;
        }

        ~BST() {
            destroy(root);
        }

        void insert(int id) {
            root = insert(root, id);
        }

        void remove(int id) {
            root = remove(root, id);
        }

        void printInorder() {
            inorder(root);
            cout << endl;
        }
        int countNodes() {
            return count(root);
        }

};


int main()
{
    BST tree;

    cout << "===== INSERT TEST =====\n";

    // This will cause RR rotation (Left Rotate)
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);

    cout << "Inorder (sorted): ";
    tree.printInorder();     // 10 20 30



    cout << "\n===== INSERT MORE VALUES =====\n";

    tree.insert(40);
    tree.insert(50);
    tree.insert(25);   // This causes LR rotation

    cout << "Inorder: ";
    tree.printInorder();     // sorted

    cout << "Nodes count = " << tree.countNodes() << endl;

    cout << "\n===== DELETE TEST =====\n";

    // deleting leaf
    tree.remove(10);

    cout << "After deleting 10 (inorder): ";
    tree.printInorder();

    // deleting node with one child
    tree.remove(50);

    cout << "After deleting 50: ";
    tree.printInorder();

    // deleting node with two children
    tree.remove(30);

    cout << "After deleting 30: ";
    tree.printInorder();

    cout << "Final nodes count = " << tree.countNodes() << endl;

    return 0;
}