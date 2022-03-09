import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x72Cf84A3A05E740D9baFF146edf318EB44c21F32';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
