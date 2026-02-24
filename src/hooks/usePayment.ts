export default function usePayment() {
  const status = 'idle' as const
  async function pay() {
    return { ok: true }
  }
  return { status, pay }
}
