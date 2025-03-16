'use client';

import { BrainCircuit, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { NavLink } from './nav-link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useWeb3 } from '@/context/Web3Context';

export default function Header() {
  const { connectWallet, disconnectWallet, walletAddress, isConnected } = useWeb3();

  return (
    <nav className="sticky top-0 z-30 bg-gray-900/90 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container flex items-center justify-between py-4 lg:px-8 px-4 mx-auto">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <NavLink
            href="/"
            className="group flex items-center gap-2 shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative flex items-center">
              <FileText className="w-8 h-8 lg:w-9 lg:h-9 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:rotate-[20deg]" />
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mx-1">
                Crux
              </span>
              <BrainCircuit className="w-8 h-8 lg:w-9 lg:h-9 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500 group-hover:-rotate-[20deg]" />
            </div>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            href="/#Pricing"
            className="relative px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Pricing
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </NavLink>
        </div>

        {/* Auth & Wallet Section */}
        <div className="flex items-center gap-4 lg:gap-6">
          <SignedIn>
            <NavLink
              href="/dashboard"
              className="relative px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Your Summaries
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>

            {/* Fixed Upload Button */}
            <Link href="/upload" passHref legacyBehavior>
              <Button
                variant="ghost"
                asChild
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
              >
                <a>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Upload PDF
                  </span>
                  <span className="text-xs text-blue-400">Pro</span>
                </a>
              </Button>
            </Link>
            <UserButton signOutUrl="/" />
          </SignedIn>

          {/* Wallet Section */}
          <div className="flex items-center gap-4">
            {isConnected ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">
                  {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
                </span>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                Connect Wallet
              </button>
            )}
          </div>

          <SignedOut>
            <div className="flex items-center gap-4">
              <SignInButton mode="modal">
                <Button variant="outline" className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
