# المكونات (Components)

هذا المجلد يحتوي على جميع المكونات القابلة لإعادة الاستخدام.

## البنية المقترحة:

```
components/
├── layout/          # مكونات التخطيط (Header, Footer, Navigation)
├── ui/              # مكونات UI بسيطة (Button, Card, Input)
├── sections/        # أقسام الصفحات (Hero, Services, About)
└── README.md        # هذا الملف
```

## إرشادات:

1. **Server vs Client Components:**
   - إذا كنت تحتاج useState/useEffect/event handlers → أضف `'use client'`
   - إذا لم تكن بحاجة لهم → اتركه Server Component

2. **TypeScript:**
   - استخدم `.tsx` لجميع المكونات
   - حدد أنواع Props بوضوح

3. **الاستيراد:**
   ```tsx
   import { ComponentName } from '@/components/layout/ComponentName'
   ```

