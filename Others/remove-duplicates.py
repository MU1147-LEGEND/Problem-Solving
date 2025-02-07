arr = [1,2,3,1,2,3]
remove_duplicates = arr.copy()

def new_func(arr, remove_duplicates):
    for i in range(len(remove_duplicates)):
        for j in range(len(remove_duplicates)):
            if(i != j and j < len(remove_duplicates) and i < len(remove_duplicates)):
                if(remove_duplicates[i] == remove_duplicates[j]):
                    remove_duplicates.pop(j)
                    
    print(f"Main array: {arr}\nArray without duplicates: {remove_duplicates}")

new_func(arr, remove_duplicates)