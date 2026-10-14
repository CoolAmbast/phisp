import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

export type AppButtonVariant = 'primary' | 'secondary' | 'white' | 'outline-white';
export type AppButtonSize = 'small' | 'medium' | 'large';

export interface AppButtonProps {
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  fullWidthOnMobile?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
}

export const AppButton: FC<AppButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidthOnMobile = false,
  href,
  onClick,
  children,
  sx,
  className,
}) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isWhite = variant === 'white';
  const isOutlineWhite = variant === 'outline-white';

  const paddingY = size === 'small' ? 0.6 : size === 'large' ? 1.1 : 0.875;
  const paddingX = size === 'small' ? 1.25 : size === 'large' ? 2.5 : 2;
  const fontSize = size === 'small' ? '0.8125rem' : size === 'large' ? '0.9375rem' : '0.875rem';

  return (
    <Box
      component={href ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
        fontSize,
        fontWeight: isSecondary || isOutlineWhite ? 600 : 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        lineHeight: 1.2,
        minHeight: 44,
        px: paddingX,
        py: paddingY,
        cursor: 'pointer',
        border: isSecondary
          ? '1px solid #DDD8CF'
          : isOutlineWhite
          ? '1px solid rgba(255, 255, 255, 0.5)'
          : 'none',
        bgcolor: isPrimary
          ? '#8B1A2F'
          : isWhite
          ? '#FFFFFF'
          : 'transparent',
        color: isPrimary
          ? '#FFFFFF'
          : isSecondary
          ? '#1C1A17'
          : isWhite
          ? '#8B1A2F'
          : '#FFFFFF',
        width: fullWidthOnMobile ? { xs: '100%', sm: 'auto' } : 'auto',
        boxSizing: 'border-box',
        transition: 'all 200ms ease',
        '&:hover': {
          bgcolor: isPrimary
            ? '#5E1020'
            : isSecondary
            ? 'rgba(139, 26, 47, 0.04)'
            : isWhite
            ? '#F9F6F0'
            : 'rgba(255, 255, 255, 0.1)',
          borderColor: isSecondary
            ? '#8B1A2F'
            : isOutlineWhite
            ? '#FFFFFF'
            : undefined,
          color: isSecondary
            ? '#8B1A2F'
            : isWhite
            ? '#5E1020'
            : undefined,
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default AppButton;
