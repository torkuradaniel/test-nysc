'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const NavWrapper = styled.nav<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${p => p.$scrolled ? 'rgba(38, 19, 52, 0.96)' : '#261334'};
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  transition: background 0.2s ease;
`

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: -0.04em;
  flex-shrink: 0;

  span {
    color: #f5a623;
  }
`

const DesktopLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled(Link)<{ $active: boolean }>`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${p => p.$active ? '#f5a623' : 'rgba(255,255,255,0.85)'};
  text-decoration: none;
  letter-spacing: 0.035em;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`

const CTAButton = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  color: #1a0a2e;
  background: #f5a623;
  padding: 0.5rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(229, 168, 47, 0.2);
  }
`

const HamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
  }
`

const MobileMenu = styled.div<{ $open: boolean }>`
  display: ${p => p.$open ? 'flex' : 'none'};
  flex-direction: column;
  background: #2d0057;
  border-top: 1px solid rgba(224, 208, 255, 0.15);

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileLink = styled(Link)<{ $active: boolean; $cta?: boolean }>`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: ${p => p.$cta ? '700' : '500'};
  color: ${p => p.$cta ? '#f5a623' : (p.$active ? '#f5a623' : 'rgba(255,255,255,0.85)')};
  text-decoration: none;
  border-bottom: 1px solid rgba(224, 208, 255, 0.1);
  background: ${p => p.$cta ? 'rgba(245, 166, 35, 0.08)' : 'transparent'};

  &:last-child {
    border-bottom: none;
  }
`

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <NavWrapper $scrolled={scrolled} role="navigation" aria-label="Main navigation">
      <NavInner>
        <Logo href="/">
          LANYSC
        </Logo>

        <DesktopLinks>
          <NavLink href="/jobs" $active={pathname === '/jobs'}>Find Jobs</NavLink>
          <NavLink href="/skills" $active={pathname === '/skills'}>Build Skills</NavLink>
          <NavLink href="/toolkit" $active={pathname === '/toolkit'}>Career Toolkit</NavLink>
          <CTAButton href="/protect">Protect Your Future</CTAButton>
        </DesktopLinks>

        <HamburgerBtn onClick={() => setOpen(o => !o)} aria-label="Toggle navigation menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </HamburgerBtn>
      </NavInner>

      <MobileMenu $open={open} aria-hidden={!open}>
        <MobileLink href="/jobs" $active={pathname === '/jobs'} onClick={close}>Find Jobs</MobileLink>
        <MobileLink href="/skills" $active={pathname === '/skills'} onClick={close}>Build Skills</MobileLink>
        <MobileLink href="/toolkit" $active={pathname === '/toolkit'} onClick={close}>Career Toolkit</MobileLink>
        <MobileLink href="/protect" $active={pathname === '/protect'} $cta onClick={close}>Protect Your Future</MobileLink>
      </MobileMenu>
    </NavWrapper>
  )
}
