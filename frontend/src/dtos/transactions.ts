export type TransactionDTO = {
  id: string;
  description: string;
  descriptionRaw: string;
  currencyCode: string;
  amount: number;
  date: string;
  category: null;
  balance: number;
  accountId: string;
  providerCode: null;
  status: string;
  definition: string;
  paymentData: {
    payer: {
      name: string;
      branchNumber: string;
      accountNumber: string;
      routingNumber: string;
      documentNumber: {
        type: string;
        value: string;
      };
      routingNumberISPB: string;
    };
    reason: string;
    receiver: {
      name: string;
      branchNumber: string;
      accountNumber: string;
      routingNumber: string;
      documentNumber: {
        type: string;
        value: string;
      };
      routingNumberISPB: string;
    };
    paymentMethod: string;
    referenceNumber: string;
  };
  type: string;
  creditCardMetadata: null;
  merchant: null;
};
