/* This example requires Tailwind CSS v2.0+ */
import { AddPayments } from '@/components/AddPayments'
import { PaymentMethods } from '@/components/PaymentMethods'

export function Payments() {
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <PaymentMethods />
          <AddPayments />
        </div>
      </div>
    )
  }
  