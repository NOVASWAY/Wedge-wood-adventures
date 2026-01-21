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
