"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { paymentData, paymentDatatwo } from "./common/data";
import { PaymentDataProps } from "./common/types";
import { SelectElement } from "@/components/select-element";

const MIN_AMOUNT = 100;

type MerchntT = keyof typeof paymentData.tiers;
type PaymentMethod = keyof typeof paymentData.tiers.gold.paymentMethods;

export default function Home() {
  const [payment] = useState<PaymentDataProps>(paymentData);
  const [amount, setAmount] = useState<number>(0);

  const [merchantTier, setMerchantTier] = useState<MerchntT>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();

  const [percentageComm, setPercentageComm] = useState<number>(0);
  const [baseComm, setBaseComm] = useState<number>(0);
  const [merchantAmount, setMerchAmount] = useState<number>(0);

  const [errors, setErrors] = useState<string>("");

  // getting arrays
  const merchantTierDDItems = Object.keys(payment.tiers);
  const paymentMethodDDItems = Object.keys(
    payment.tiers["gold"].paymentMethods
  );

  // const merchantTierDDItemsTw
  const paymentMethodsData = merchantTier
    ? payment?.tiers[merchantTier as MerchntT]?.paymentMethods["bankTransfer"]
    : null;

  useEffect(() => {
    setPercentageComm(paymentMethodsData?.percentageCommission ?? 0);
    setPercentageComm(paymentMethodsData?.percentageCommission ?? 0);
    setPercentageComm(paymentMethodsData?.percentageCommission ?? 0);
  }, []);

  console.log(paymentMethodsData);

  return (
    <div className="flex h-screen p-20 items-center justify-center bg-zinc-50 font-sans">
      {/* Header */}
      <div>
        <p className="">IRecharge Assessment</p>
      </div>

      <div>
        <div>
          <Input
            type={"number"}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div>
          <SelectElement
            label={"Merchant Tier"}
            value={merchantTier as MerchntT}
            items={merchantTierDDItems}
            onChange={(value) => setMerchantTier(value as MerchntT)}
          />
        </div>

        <div>
          <SelectElement
            label={"Payment Method"}
            value={paymentMethod as PaymentMethod}
            items={paymentMethodDDItems}
            onChange={(value) => setPaymentMethod(value as PaymentMethod)}
          />
        </div>
      </div>

      <div>
        <div>
          <p>{percentageComm}</p>
        </div>

        <div>
          <p>{baseComm}</p>
        </div>

        <div>
          <p>{merchantAmount}</p>
        </div>
      </div>
    </div>
  );
}
