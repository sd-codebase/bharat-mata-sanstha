"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { ORG_NAME, NAV_LINKS } from "@/lib/constants";
import { branches } from "@/data/branches";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isBranchActive = pathname.startsWith("/branches");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setBranchesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setBranchesOpen(false);
    setIsOpen(false);
    setMobileBranchesOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-lg">
            {ORG_NAME}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {NAV_LINKS.map((link) =>
              link.label === "Branches" ? (
                <div key="branches" className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setBranchesOpen(!branchesOpen)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                      isBranchActive
                        ? "bg-saffron text-white"
                        : "text-gray-200 hover:bg-navy-light hover:text-white"
                    }`}
                  >
                    Branches
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${branchesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {branchesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl py-2 max-h-[70vh] overflow-y-auto">
                      {branches.map((branch) => (
                        <Link
                          key={branch.id}
                          href={`/branches/${branch.id}`}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === `/branches/${branch.id}`
                              ? "bg-saffron/10 text-saffron font-medium"
                              : "text-gray-700 hover:bg-gray-50 hover:text-saffron"
                          }`}
                        >
                          <span className="text-gray-400 text-xs mr-2">
                            {branch.id}.
                          </span>
                          {branch.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-saffron text-white"
                      : "text-gray-200 hover:bg-navy-light hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) =>
            link.label === "Branches" ? (
              <div key="branches">
                <button
                  onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                  className={`w-full flex justify-between items-center px-4 py-3 text-sm font-medium transition-colors ${
                    isBranchActive
                      ? "bg-saffron text-white"
                      : "text-gray-200 hover:bg-navy-light"
                  }`}
                >
                  Branches
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileBranchesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileBranchesOpen && (
                  <div className="bg-navy-dark/80">
                    {branches.map((branch) => (
                      <Link
                        key={branch.id}
                        href={`/branches/${branch.id}`}
                        onClick={() => setIsOpen(false)}
                        className={`block pl-8 pr-4 py-2.5 text-sm transition-colors ${
                          pathname === `/branches/${branch.id}`
                            ? "text-saffron font-medium"
                            : "text-gray-300 hover:text-white hover:bg-navy-light"
                        }`}
                      >
                        <span className="text-gray-500 text-xs mr-2">
                          {branch.id}.
                        </span>
                        {branch.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-saffron text-white"
                    : "text-gray-200 hover:bg-navy-light"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
