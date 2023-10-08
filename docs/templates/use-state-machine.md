# useStateMachine

Git branch: https://github.com/sethdavis512/jarvis/tree/use-state-machine

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

type MachineSpec = {
    initialState: string;
    states: Record<string, Record<string, string>>;
};

export const machineSpec: MachineSpec = {
    initialState: 'disconnected',
    states: {
        disconnected: {
            CONNECT: 'connecting'
        },
        connecting: {
            CONNECTION_SUCCESS: 'connected'
        },
        connected: {
            DISCONNECT: 'disconnected'
        }
    }
};

type MachineReducer = (currentState: string, event: string) => string;

export const buildMachineReducer =
    (spec: MachineSpec): MachineReducer =>
    (currentState, event) => {
        const stateTransitions = spec.states[currentState];

        if (stateTransitions === undefined) {
            throw new Error(`No transitions defined for ${currentState}`);
        }

        const nextState = stateTransitions[event];

        if (nextState === undefined) {
            throw new Error(
                `Unknown transition for event ${event} in state ${currentState}`
            );
        }

        return nextState;
    };

export const useStateMachine = (spec: MachineSpec) =>
    useReducer(buildMachineReducer(spec), spec.initialState);
```

## Download zip

https://github.com/sethdavis512/jarvis/archive/refs/heads/use-state-machine.zip
