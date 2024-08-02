import type { CreateNodecgInstance } from 'ts-nodecg/browser';
import type { ReplicantMap } from './replicant';

export type NodecgInstance = CreateNodecgInstance<
    "temp-bundle",
    undefined,
    ReplicantMap,
    {
        'overlay:replay:start': {};
        'overlay:replay:stop': {};
    }
>;