

function palin(thingToCheck) {
    thingToCheck = thingToCheck.toLowerCase()
    forward = thingToCheck
    reverse = ""
    for(i = 1; i <= thingToCheck.length; i++) {
        reverse = reverse + thingToCheck[thingToCheck.length - i]
    }
    if(forward === reverse) {
        return true
    }
    else {
        return false
    }
}

console.log(palin("mom"))


function dupRemove(list) {
    newList = []
    for(i = 0; i < list.length; i++) {
        inList = false
        checkValue = list[i]
        for(index = 0; index < newList.length; index++) {
            if(checkValue == newList[index]) {
                inList = true
            }
        }
        if (inList == false) {
            newList.push(checkValue)
        }
    }
    return newList
}

console.log(dupRemove(["John","Mary", "Alex", "Steve", "Mary", "John"]))

function isInArray(item, array) {
    itemin = false
    for(i = 0; i < array.length; i++) {
        if(array[i] == item) {
            itemin = true
        }
    }
    return itemin
}

console.log(isInArray("Jack", ["John","Mary", "Alex", "Steve", "Mary", "John"]))


function findLargest(array) {
    larget = array[0]
    for(i = 1; i < array.length; i++) {
        if(array[i] > larget) {
            larget = array[i]
        }
    }
    return larget
}

console.log(findLargest([2, 12, 14, 15, 1, 33, 99, 3, 5, 7]))


function findSmallest(array) {
    smallest = array[0]
    for(i = 1; i < array.length; i++) {
        if(array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest
}

console.log(findSmallest([2, 12, 14, 15, 1, 33, 99, 3, 5, 7]))

function fizzBuzz(number) {
    if((number % 3 == 0) && (number % 5 == 0)) {
        return "FizzBuzz"
    }
    else if(number % 5 == 0) {
        return "Fizz"
    }
    else if(number % 3 == 0) {
        return "Buzz"
    }
}

console.log(fizzBuzz(15))

function oddEven(numb) {
    if(numb % 2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

console.log(oddEven(6))

function sortIt(zzarray) {
    newArray = zzarray
    for(i = 0; i < newArray.length; i++) {
            for(index = 0; index < newArray.length; index++) {
            if(newArray[index] > newArray[index + 1]) {
            first = newArray[index]
            second = newArray[index + 1]
            newArray[index] = second
            newArray[index + 1] = first
            }
        }
    }
    

    return newArray
}

console.log(sortIt([3,4,56,7,8,1]))

class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance, status) {
        this.findName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
    }

    withdraw(amount) {
        this.balance -= amount
    }

    deposit(amount) {
        this.balance += amount
    }

    transfer(amount, destination) {
        this.balance -= amount
        destination.balance = destination.balance + amount
    }

    feeLove() {
        if(this.balance < 0) {
            this.balance -= 35
        }
    }
}

let account1 = new BankAccount("John", "Doe", "Free", "Checking", 100, "Opened")

let account2 = new BankAccount("John", "Doe", "Free", "Savings", 3000, "Opened")

console.log(account1.balance)
console.log(account2.balance)

account1.withdraw(250)

console.log(account1.balance)
console.log(account2.balance)

account2.transfer(100, account1)

console.log(account1.balance)
console.log(account2.balance)

account1.feeLove()
account2.feeLove()

console.log(account1.balance)
console.log(account2.balance)

account1.deposit(1)
account2.deposit(1)

console.log(account1.balance)
console.log(account2.balance)