import { Contract } from "ethers";
import {
  EXCHANGE_CONTRACT_ABI,
  EXCHANGE_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ABI,
} from "../constants";

/**
 * getEtherBalance: Retrieves the ether balance of the user or the contract
 */

export const getEtherBalance = async (provider, address, contract = false) => {
  try {
    // If the caller has set the `contract` boolean to true, retrieve the balance of
    // ether in the `exchange contract`, if it is set to false, retrieve the balance
    // of the user's address
    if (contract) {
      const balance = await provider.getBalance(EXCHANGE_CONTRACT_ADDRESS);
      return balance;
    } else {
      const balance = await provider.getBalance(address);
      return balance;
    }
  } catch (err) {
    console.error(err);
    return 0;
  }
};

/**
 * getCDTokensBalance: Retrieves the Crypto Dev tokens in the account
 * of the provided `address`
 */
export const getCDTokensBalance = async (provider, address) => {
  try {
  } catch (err) {
    console.error(err);
  }
};
