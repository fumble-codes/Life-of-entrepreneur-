type ClassValue = string | number | false | null | undefined | Record<string, boolean> | ClassValue[]

export function cn(...args: ClassValue[]): string {
  const out: string[] = []
  const push = (v: ClassValue) => {
    if (!v) return
    if (typeof v === 'string' || typeof v === 'number') {
      out.push(String(v))
    } else if (Array.isArray(v)) {
      v.forEach(push)
    } else if (typeof v === 'object') {
      for (const k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k) && v[k]) out.push(k)
      }
    }
  }
  args.forEach(push)
  return Array.from(new Set(out)).join(' ')
}
