import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Smooth scroll utility function
export function scrollToSection(sectionId: string) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Get image path with basePath for GitHub Pages
export function getImagePath(path: string): string {
  const basePath = '/Wedge-wood-adventures';
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path;
  }
  // If path starts with /, add basePath prefix
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  // For relative paths, add basePath
  return `${basePath}/${path}`;
}

// Security: Sanitize user input to prevent XSS and injection attacks
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (!input) return '';
  
  // Trim and limit length
  let sanitized = input.trim().slice(0, maxLength);
  
  // Remove potentially dangerous characters while preserving basic formatting
  // Allow letters, numbers, spaces, and common punctuation
  sanitized = sanitized.replace(/[<>]/g, ''); // Remove < and > to prevent HTML injection
  
  return sanitized;
}

// Validate email format
export function validateEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validate phone number (basic validation)
export function validatePhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional
  // Allow international format: +, digits, spaces, dashes, parentheses
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, '')) && phone.length <= 20;
}

// Validate name (alphanumeric, spaces, hyphens, apostrophes)
export function validateName(name: string): boolean {
  if (!name) return false;
  const nameRegex = /^[a-zA-Z\s\-'\.]{2,100}$/;
  return nameRegex.test(name);
}

// Rate limiting utility for form submissions
interface RateLimitData {
  attempts: number;
  resetTime: number;
}

const RATE_LIMIT_CONFIG = {
  maxAttempts: 3, // Maximum submissions allowed
  windowMs: 10 * 60 * 1000, // 10 minutes in milliseconds
};

export function checkRateLimit(formName: string): { allowed: boolean; remainingTime?: number; attemptsLeft?: number } {
  if (typeof window === 'undefined') {
    // Server-side rendering - allow submission
    return { allowed: true };
  }

  const storageKey = `rateLimit_${formName}`;
  const now = Date.now();
  
  try {
    const stored = localStorage.getItem(storageKey);
    let data: RateLimitData;

    if (stored) {
      data = JSON.parse(stored);
      
      // Check if the time window has passed
      if (now > data.resetTime) {
        // Reset the rate limit
        data = { attempts: 0, resetTime: now + RATE_LIMIT_CONFIG.windowMs };
        localStorage.setItem(storageKey, JSON.stringify(data));
        return { allowed: true, attemptsLeft: RATE_LIMIT_CONFIG.maxAttempts };
      }
    } else {
      // First attempt - initialize
      data = { attempts: 0, resetTime: now + RATE_LIMIT_CONFIG.windowMs };
    }

    // Check if limit exceeded
    if (data.attempts >= RATE_LIMIT_CONFIG.maxAttempts) {
      const remainingTime = Math.ceil((data.resetTime - now) / 1000 / 60); // minutes
      return { 
        allowed: false, 
        remainingTime,
        attemptsLeft: 0
      };
    }

    // Increment attempts
    data.attempts += 1;
    localStorage.setItem(storageKey, JSON.stringify(data));

    return { 
      allowed: true, 
      attemptsLeft: RATE_LIMIT_CONFIG.maxAttempts - data.attempts 
    };
  } catch (error) {
    // If localStorage fails, allow submission (graceful degradation)
    console.warn('Rate limiting check failed:', error);
    return { allowed: true };
  }
}

// Clean up old rate limit entries (call periodically)
export function cleanupRateLimits(): void {
  if (typeof window === 'undefined') return;

  try {
    const keys = Object.keys(localStorage);
    const now = Date.now();
    
    keys.forEach(key => {
      if (key.startsWith('rateLimit_')) {
        const stored = localStorage.getItem(key);
        if (stored) {
          const data: RateLimitData = JSON.parse(stored);
          if (now > data.resetTime) {
            localStorage.removeItem(key);
          }
        }
      }
    });
  } catch (error) {
    console.warn('Rate limit cleanup failed:', error);
  }
}
