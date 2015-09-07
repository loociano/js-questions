Notes on 11 Sorting and Searching
=================================

=Sorting=

- ECMAScript lets vendors implement their sorting algorithm for Array.prototype.sort() 
  http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.11

  Webkit seems to implement 'min sort'
  // "Min" sort. Not the fastest, but definitely less code than heapsort
  // or quicksort, and much less swapping than bubblesort/insertionsort.

  V8
    - if array.length < 23 --> Insertion sort
    - else --> Quicksort 

  https://github.com/v8/v8/blob/master/src/array.js#L853

  http://trac.webkit.org/browser/trunk/Source/JavaScriptCore/runtime/ArrayPrototype.cpp?rev=138530#L647

- Sort stability https://en.wikipedia.org/wiki/Sorting_algorithm#Stability

- Bubble sort https://en.wikipedia.org/wiki/Bubble_sort

- Insertion sort https://en.wikipedia.org/wiki/Insertion_sort

- Selection sort https://en.wikipedia.org/wiki/Selection_sort

- Gnome sort https://en.wikipedia.org/wiki/Gnome_sort
  Starts in position 1

- Heapsort https://en.wikipedia.org/wiki/heapsort

- Quicksort https://en.wikipedia.org/wiki/Quicksort --> average O(nlogn)
  https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/

- Mergesort https://en.wikipedia.org/wiki/Merge_sort ---> average O(nlogn)
  https://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/

- Radix sort https://en.wikipedia.org/wiki/Radix_sort

- Divide and conquer algorithms https://en.wikipedia.org/wiki/Divide_and_conquer_algorithms


=Searching=

- Binary search