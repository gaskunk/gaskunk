/**
 * @see https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
 */
export type ArrayElementType<
  T extends readonly unknown[]
> = T extends readonly (infer P)[] ? P : never;
