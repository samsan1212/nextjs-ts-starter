export function checkIfClientSide() {
  return !!globalThis.document;
}
