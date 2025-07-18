var findMedianSortedArrays = function(nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a,b)=>a-b)
  let mid;
  if(merged.length%2 === 0){
    // even number like 4
    mid = Math.floor(merged.length / 2);
    median = (merged[mid] + merged[mid-1]) / 2
  }else{
    // odd number like 3
    median = merged[Math.floor(merged.length / 2)]
  }
  
  return median
};