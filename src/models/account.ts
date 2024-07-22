export type NameAccount = "Decentralized accounts" | "0z2622...a33ea5";

export type Token = {
  id: number;
  icon: string;
  nameToken: string;
  des: string;
  portfolio: number;
  price: number;
  ratio: number;
  balance: number;
  desBalance:string
};

export type Account = {
  id: number;
  icon: string;
  icon2?: string;
  name: NameAccount;
  Tokens?: Token[];
};
