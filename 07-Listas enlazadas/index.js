// Se le proporcionan los encabezados de dos listas enlazadas ordenadas list1y list2.
// Fusionar las dos listas en una sola lista ordenada. Esta lista debe formarse uniendo los nodos de las dos primeras listas.
// Devuelve el encabezado de la lista vinculada fusionada.



var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
  
    let cabeza = new ListNode(null);
    let actual = cabeza;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        actual.next = list1;
        list1 = list1.next;
      } else {
        actual.next = list2;
        list2 = list2.next; 
      }
      actual = actual.next;
    }
    actual.next = list1 || list2;
  
    return cabeza.next;
  };