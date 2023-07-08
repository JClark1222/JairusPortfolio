#This function adds two numbers
def add(a,b) :
    return a + b

#This subtracts two numbers
def subtract(a,b) :
    return a - b

#This multiplies adds two numbers
def multiply(a,b) :
    return a * b

#This divides adds two numbers
def divide(a,b) :
    return a / b

print("Select Operation: ")
print("1: Add")
print("2: Subtract")
print("3: Multiply")
print("4: Divide")

while True:
    choice = input("Please enter 1/2/3/4: ")

    if choice in ('1','2','3','4'):
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Please enter your second number: "))

        except ValueError:
            print("Invalid input. Please enter a number.")
            continue

        if choice == '1':
            print(num1, '+', num2,"=", add(num1,num2))

        elif choice == '2':
            print(num1, '-', num2,"=", subtract(num1,num2))

        elif choice == '3':
            print(num1, '*', num2,"=", multiply(num1,num2))

        elif choice == '4':
            print(num1, '/', num2,"=", divide(num1,num2))

    next_calculation = input("Do you want to do another calculation? (y/n)")

    if next_calculation == "n":
        print("Cya later!")
        break
    else:
        print("Select Operation: ")
        print("1: Add")
        print("2: Subtract")
        print("3: Multiply")
        print("4: Divide")

