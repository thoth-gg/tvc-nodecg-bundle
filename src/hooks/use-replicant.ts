import { useCallback, useEffect, useState } from 'react';
import { replicantDefaultValues, type ReplicantMap } from '../types/replicant';

export const useReplicant = <T extends keyof ReplicantMap>(
  name: T
): [ReplicantMap[T] | undefined, (newValue: ReplicantMap[T]) => void] => {
  const [rep] = useState(() =>
    nodecg.Replicant(name, {
      defaultValue: replicantDefaultValues[name]
    })
  );
  const [value, setValue] = useState(rep.value);
  useEffect(() => {
    const handleChange = (newValue: ReplicantMap[T] | undefined) => { setValue(newValue); };
    rep.on('change', handleChange);
    return () => {
      rep.removeListener('change', handleChange);
    };
  }, [rep]);
  return [value, useCallback(newValue => (rep.value = newValue), [rep])];
};
