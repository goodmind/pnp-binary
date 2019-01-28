#!/usr/bin/env node

const pnpSource = process.argv[2] || `pnpapi`;
const prodOnly = true;

let pnp;

try {
  pnp = require(pnpSource);
} catch (error) {
  if (pnpSource === `pnpapi`) {
    console.error(
      `Couldn't load the PnP api from your environment - is Plug'n'Play enabled?`
    );
  } else {
    console.error(`Couldn't load the specified file (${pnpSource}).`);
  }
  throw error;
}
