export const COLORS = [
  { id: 'red', label: 'RED', hex: '#E11D48' },
  { id: 'yellow', label: 'YELLOW', hex: '#F59E0B' },
  { id: 'blue', label: 'BLUE', hex: '#3B82F6' },
  { id: 'green', label: 'GREEN', hex: '#22C55E' },
]

export function getColorById(id) {
  const fallback = COLORS[0]
  if (!id) return fallback
  return COLORS.find((c) => c.id === id) ?? fallback
}

export function getNextColorId(currentId) {
  const idx = COLORS.findIndex((c) => c.id === currentId)
  if (idx < 0) return COLORS[0].id
  return COLORS[(idx + 1) % COLORS.length].id
}

