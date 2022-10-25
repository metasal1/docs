---
description: "Set the price of the mint in SOL."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Sol Payment

## Overview

The **Sol Payment** guard allows us to charge the payer an amount in SOL when minting. Both the amount of SOL and the destination address can be configured.

![CandyMachinesV3-GuardsSolPayment.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6afd02dd-4f63-4004-93a2-8fd4bc09de06/CandyMachinesV3-GuardsSolPayment.png)

## Guard Settings

The Sol Payment guard contains the following settings:

- **Amount**: The amount in SOL (or lamports) to charge the payer.
- **Destination**: The address of the wallet that should receive all payments related to this guard.

- JS SDK
    
    Here’s how we can create a Candy Machine using the Sol Payment guard via the JS SDK. Note that, in this example, we’re using the current identity as the destination wallet.
    
    ```tsx
    import { sol } from '@metaplex-foundation/js';
    
    const { candyMachine } = await metaplex.candyMachines().create({
      // ...
      guards: {
        solPayment: {
          amount: sol(1.5),
          destination: metaplex.identity().publicKey,
        },
      },
    });
    ```
    
    API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.SolPaymentGuardSettings.html).
    

## Mint Settings

*The Sol Payment guard does not need Mint Settings.*

However, if you’re planning on constructing instructions without the help of our SDKs, you will need to add the configured destination address to the remaining accounts of the mint instruction. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#solpayment) for more details.

## Route Instruction

*The Sol Payment guard does not support the route instruction.*