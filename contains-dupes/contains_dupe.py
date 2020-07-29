def containsDuplicate(num):
    lookup = set()
    # go through the array, and add numbers to a lookup table
    # if any number we encounter has already been added to the lookup
    # it means it's a duplicate, and the array has duplicates
    # complexity of O(n)
    for number in num:
        if number not in lookup:
            lookup.add(number)
        else:
            return True
    return False 