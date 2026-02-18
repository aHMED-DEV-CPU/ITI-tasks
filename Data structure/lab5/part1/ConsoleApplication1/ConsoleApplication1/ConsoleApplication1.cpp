#include <iostream>
#include <vector>
#include <list>
#include <functional>
#include <algorithm>  // find 

using namespace std;

 // element in the table 
template<class KeyType, class ValueType>
class MapEntry
{
    KeyType key;
    ValueType value;

public:
    MapEntry(const KeyType& k, const ValueType& v)
        : key(k), value(v) {
    }

    KeyType GetKey() const { return key; }
    ValueType GetValue() const { return value; }

    // Needed so we can use std::find
    bool operator==(const KeyType& k) const
    {
        return key == k;
    }
};


template<class KeyType, class ValueType>
class HashTable
{
    vector<list<MapEntry<KeyType, ValueType>>> theLists;
    int currentSize;

public:
    explicit HashTable(int size = 101)
        : theLists(size), currentSize(0) {
    }

 //  Check if key exists
    bool Contains(const KeyType& x) const
    {
        int whichList = MyHashFunction(x);// index of the backet 

        // Reference, NOT copy
        const auto& bucket = theLists[whichList];  // we get the backet

        for (const auto& entry : bucket)
        {
            if (entry.GetKey() == x)
                return true;
        }
        return false;
    }

 //Insert a new (key, value)
    bool Insert(const KeyType& x, const ValueType& y)
    {
        if (Contains(x))
            return false;

        int whichList = MyHashFunction(x);

        theLists[whichList].push_back(MapEntry<KeyType, ValueType>(x, y));
        currentSize++;

        // Rehash if load factor > 0.7
        if (currentSize > theLists.size() * 0.7)
            Rehash();

        return true;
    }

    /*
        Remove by key
    */
    bool Remove(const KeyType& x)
    {
        int whichList = MyHashFunction(x);

        auto& bucket = theLists[whichList];

        auto itr = find(bucket.begin(), bucket.end(), x);

        if (itr == bucket.end())
            return false;

        bucket.erase(itr);
        currentSize--;
        return true;
    }

    /*
        Remove everything
    */
    void MakeEmpty()
    {
        for (auto& lst : theLists)
            lst.clear();

        currentSize = 0;
    }

    //  Look up value by key
    ValueType LookUP(const KeyType& key) const
    {
        int whichList = MyHashFunction(key);
        const auto& bucket = theLists[whichList];

        for (const auto& entry : bucket)
        {
            if (entry.GetKey() == key)
                return entry.GetValue();
        }

        throw runtime_error("Key not found");
    }

protected:
    /*
        Hash function
    */
    int MyHashFunction(const KeyType& x) const
    {
        hash<KeyType> hashFunction;
        return hashFunction(x) % theLists.size();
    }

    /*
        Rehashing:
        - Double table size
        - Reinsert all elements
    */
    void Rehash()
    {
        vector<list<MapEntry<KeyType, ValueType>>> oldLists = theLists;

        theLists.clear();
        theLists.resize(oldLists.size() * 2);
        currentSize = 0;

        for (const auto& bucket : oldLists)
        {
            for (const auto& entry : bucket)
            {
                Insert(entry.GetKey(), entry.GetValue());
            }
        }
    }
};



int main()
{
    // Create hash table
    HashTable<int, string> table;

    cout << "=== INSERT ===" << endl;
    table.Insert(1, "Ahmed");
    table.Insert(2, "Ali");
    table.Insert(3, "Mona");

    cout << "Inserted 3 elements\n";

    cout << "=== CONTAINS ===" << endl;
    cout << "Contains key 2? "
        << (table.Contains(2) ? "Yes" : "No") << endl;

    cout << "Contains key 5? "
        << (table.Contains(5) ? "Yes" : "No") << endl;

    cout << "\n=== LOOKUP ===" << endl;
    try
    {
        cout << "Key 1 value: " << table.LookUP(1) << endl;
        cout << "Key 3 value: " << table.LookUP(3) << endl;
    }
    catch (const exception& e)
    {
        cout << e.what() << endl;
    }

    cout << "\n=== REMOVE ===" << endl;
    cout << "Remove key 2: "
        << (table.Remove(2) ? "Success" : "Fail") << endl;

    cout << "Contains key 2? "
        << (table.Contains(2) ? "Yes" : "No") << endl;


    cout << "\n=== MAKE EMPTY ===" << endl;
    table.MakeEmpty();

    cout << "Contains key 1? "
        << (table.Contains(1) ? "Yes" : "No") << endl;



    return 0;
}

