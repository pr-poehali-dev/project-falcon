import { lazy, Suspense, type ComponentType } from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({ name, size = 24, className = '', fallback = 'CircleAlert' }: IconProps) => {
  const IconComponent = (LucideIcons as Record<string, ComponentType<{ size: number; className: string }>>)[name] || 
                        (LucideIcons as Record<string, ComponentType<{ size: number; className: string }>>)[fallback];

  if (!IconComponent) {
    return null;
  }

  return (
    <Suspense fallback={<div style={{ width: size, height: size }} />}>
      <IconComponent size={size} className={className} />
    </Suspense>
  );
};

export default Icon;
