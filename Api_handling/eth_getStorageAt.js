
import { Network, Alchemy } from "alchemy-sdk";

// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

alchemy.core.getStorageAt("registrar.firefly.eth", 0).then(console.log);
