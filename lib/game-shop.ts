import type { GameCartridge } from "@/types/content";

export function pickCartridge(
  cartridges: GameCartridge[],
  collectedIds: string[],
  guaranteeMissing: boolean,
  random: () => number = Math.random
) {
  const collected = new Set(collectedIds);
  const missing = cartridges.filter((cartridge) => !collected.has(cartridge.id));
  const pool = guaranteeMissing && missing.length > 0 ? missing : cartridges;
  const index = Math.min(Math.floor(random() * pool.length), pool.length - 1);

  return pool[index];
}