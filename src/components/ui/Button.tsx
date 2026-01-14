'use client'

import { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const { isRTL } = useLanguage()
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95'

  const variants = {
    primary:
      'bg-brand-burgundy text-white hover:bg-brand-wine shadow-lg hover:shadow-xl focus:ring-brand-burgundy',
    secondary: 'bg-brand-beige text-brand-burgundy hover:bg-brand-beige/80 focus:ring-brand-beige',
    gold: 'bg-brand-gold text-white hover:bg-brand-gold/90 shadow-lg shadow-brand-gold/20 focus:ring-brand-gold',
    outline:
      'border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white focus:ring-brand-burgundy',
    ghost: 'text-brand-burgundy hover:bg-brand-burgundy/5 focus:ring-brand-burgundy',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl uppercase tracking-widest',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const iconMargin = children ? (isRTL ? 'ml-2' : 'mr-2') : ''
  const iconMarginRight = children ? (isRTL ? 'mr-2' : 'ml-2') : ''

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className={`animate-spin h-5 w-5 text-current ${children ? (isRTL ? 'ml-3' : 'mr-3') : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {!isLoading && Icon && iconPosition === 'left' && (
        <Icon className={`w-5 h-5 text-current flex-shrink-0 ${iconMargin}`} />
      )}

      {children}

      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className={`w-5 h-5 text-current flex-shrink-0 ${iconMarginRight}`} />
      )}
    </button>
  )
}
