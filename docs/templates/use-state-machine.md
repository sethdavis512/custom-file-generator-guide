# useStateMachine

## Generator

```js title="plopfile.js"
export default function ({ setGenerator }) {
    setGenerator('use-state-machine', {
        description: 'Typescript useStateMachine hook',
        prompts: [],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/`,
                templateFiles: `plop-templates/use-state-machine/**/*.hbs`,
                base: `plop-templates/use-state-machine`
            }
        ]
    });
}
```

## Files

```ts title="useStateMachine.ts.hbs"
import { useReducer } from 'react';

export const machineSpec = {
    // Start disconnected
    initialState: 'disconnected',
    states: {
        disconnected: {
            // when disconnected, if the CONNECT event is received
            // we transition to "connecting"
            CONNECT: 'connecting'
        },
        connecting: {
            // when connecting, if the CONNECTION_SUCCESS event is received
            // we transition to "connected"
            CONNECTION_SUCCESS: 'connected'
        },
        connected: {
            // when connected, if the DISCONNECT event is received
            // we transition to "disconnected"
            DISCONNECT: 'disconnected'
        }
    }
};

export const buildMachineReducer = (spec) => (currentState, event) => {
    // Get all possible transitions for the current State
    const stateTransitions = spec.states[currentState];

    // No transitions? Error!
    if (stateTransitions === undefined) {
        throw new Error(`No transitions defined for ${currentState}`);
    }

    // We try to transition to the next state
    const nextState = stateTransitions[event];

    // No next state? Error!
    if (nextState === undefined) {
        throw new Error(
            `Unknown transition for event ${event} in state ${currentState}`
        );
    }

    // We return the new state
    return nextState;
};

export const useStateMachine = (spec) =>
    useReducer(buildMachineReducer(spec), spec.initialState);
```
