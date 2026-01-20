# payment-processor/main.py

import os
from datetime import datetime
from payment_processor import PaymentProcessor

class Main:
    def __init__(self):
        self.processor = PaymentProcessor()

    def run(self):
        print("Payment Processor Application")
        print("---------------------------")
        while True:
            print("\nOptions:")
            print("1. Process Payment")
            print("2. View Payments")
            print("3. Exit")
            choice = input("Enter your choice: ")
            if choice == "1":
                self.process_payment()
            elif choice == "2":
                self.view_payments()
            elif choice == "3":
                break
            else:
                print("Invalid choice. Please try again.")

    def process_payment(self):
        print("\nProcess Payment")
        print("----------------")
        amount = float(input("Enter the payment amount: "))
        payment_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        payment_id = self.processor.process_payment(amount, payment_date)
        print(f"Payment ID: {payment_id}")

    def view_payments(self):
        print("\nView Payments")
        print("------------")
        payments = self.processor.get_payments()
        if payments:
            for payment in payments:
                print(f"ID: {payment['id']}, Amount: {payment['amount']}, Date: {payment['date']}")
        else:
            print("No payments found.")

if __name__ == "__main__":
    main = Main()
    main.run()