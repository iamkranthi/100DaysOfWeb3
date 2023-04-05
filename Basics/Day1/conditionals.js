//*equal to operator
function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}
//*not equal to operator
function isNotEqual(a, b) {
  if (a !== b) {
    return true;
  }
  return false;
}

//*greater than
function greater(first, last) {
  if (first > last) {
    return first;
  } else if (last > first) {
    return last;
  }

  return undefined;
}

//*early return
function isEnough(cost, money) {
    return cost===money || money>cost;
}

//*early return
function canAccess(purchasedSubscription, freeTrial) {
    if(purchasedSubscription===true || freeTrial ===true){
        return true
    }
    return false
}