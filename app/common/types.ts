export interface PaymentDataProps {
  tiers: {
    standard: {
      name: string;
      description: string;
      paymentMethods: PaymentMethods;
    };
    silver: {
      name: string;
      description: string;
      paymentMethods: PaymentMethods;
    };
    gold: {
      name: string;
      description: string;
      paymentMethods: PaymentMethods;
    };
    platinum: {
      name: string;
      description: string;
      paymentMethods: PaymentMethods;
    };
  };
}

export interface PaymentMethods {
  card: PaymentItem;
  bankTransfer: PaymentItem;
  ussd: PaymentItem;
  wallet: PaymentItem;
}

export interface PaymentItem {
  percentageCommission: number;
  baseCommission: number;
  capAmount?: number | null;
}
