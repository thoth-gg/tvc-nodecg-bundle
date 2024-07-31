export interface ReplicantMap {
  program: number;
  preview: number;
  prompter: string;
}

export const replicantDefaultValues: ReplicantMap = {
  program: 0,
  preview: 0,
  prompter: 'Thoth Prompter'
};