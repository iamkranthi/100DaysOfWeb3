import { Alchemy, Network } from "alchemy-sdk";

// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

alchemy.core
  .getBlock(
    "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"
  )
  .then(console.log);
