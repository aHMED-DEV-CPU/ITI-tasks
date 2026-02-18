
#include <iostream>
#include <vector>
using namespace std;
 //2-sum
//class Solution {
//public:
//    vector<int> twoSum(vector<int>& nums, int target) {
//        vector<int> indexes;
//
//        for (int i = 0; i < nums.size(); i++) {
//            for (int j = 0; j < nums.size(); j++) {
//                if (i == j)
//                    continue;
//                else if (nums.at(i) + nums.at(j) == target) {
//                    indexes.push_back(i);
//                }
//            }
//        }
//        return indexes;
//    }
//};
//
//int* twoSum(int nums[], int size, int target) {
//    int* arr = new int[2];
//
//    for (int i = 0; i < size; i++) {
//        for (int j = i + 1; j < size; j++) {
//            if (nums[i] + nums[j] == target) {
//                arr[0] = i;
//                arr[1] = j;
//
//                cout << "Indexes inside function: "
//                     << arr[0] << " " << arr[1] << endl;
//
//                return arr;
//            }
//        }
//    }
//    return nullptr;
//}

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();

        vector<int> result;   
        result.resize(n);     

        
        for (int i = 0; i < n; i++) {
            result[i] = 1;
        }

        int prefix = 1;
        for (int i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;

    }
};

int* productExceptSelf(int nums[], int size) {

    
    int* result = new int[size];

  
    for (int i = 0; i < size; i++) {
        result[i] = 1;
    }

    // prefix product
    int prefix = 1;
    for (int i = 0; i < size; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // suffix product
    int suffix = 1;
    for (int i = size - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}


int main()
{
    // 2-sum
   //Solution sol;

   // vector<int> vects = { 3, 2, 4 };
   // int target = 6;

   // vector<int> result = sol.twoSum(vects, target);

   // cout << "Indexes: ";
   // for (int i = 0; i < result.size(); i++) {
   //     cout << result[i] << " ";
   // }

   // int nums[] = { 3, 2, 4 };
   // int size = 3;

   // int* res = twoSum(nums, size, 6);




    int nums[] = { 1, 2, 3, 4 };
    int size = 4;

    int* res = productExceptSelf(nums, size);

    for (int i = 0; i < size; i++) {
        cout << res[i] << " ";
    }

    delete[] res;


   
}

