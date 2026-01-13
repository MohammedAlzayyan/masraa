/**
 * دمج كلاسات CSS
 * يمكن استخدامه لدمج كلاسات Tailwind
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// يمكن إضافة دوال مساعدة أخرى هنا

/**
 * مثال على استخدام cn:
 *
 * cn('px-4', 'py-2', isActive && 'bg-blue-500')
 */
