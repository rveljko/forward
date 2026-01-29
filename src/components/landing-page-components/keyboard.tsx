import KeyboardArrowIcon from '@icons/keyboard-arrow-icon'

export default function Keyboard() {
  return (
    <div className="relative w-195">
      <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black" />
      <div className="flex w-full flex-col gap-1 p-2">
        <div className="flex items-center gap-1">
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">~</span>
              <span className="key leading-none select-none">`</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">!</span>
              <span className="leading-none select-none">1</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">@</span>
              <span className="leading-none select-none">2</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">#</span>
              <span className="leading-none select-none">3</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">$</span>
              <span className="leading-none select-none">4</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">%</span>
              <span className="leading-none select-none">5</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">^</span>
              <span className="leading-none select-none">6</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">&</span>
              <span className="leading-none select-none">7</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">*</span>
              <span className="leading-none select-none">8</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">(</span>
              <span className="leading-none select-none">9</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">)</span>
              <span className="leading-none select-none">0</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">_</span>
              <span className="leading-none select-none">-</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">+</span>
              <span className="leading-none select-none">=</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-22 items-end justify-end rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="text-xs select-none">delete</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-22 items-end justify-start rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="text-xs select-none">tab</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">Q</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">W</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">E</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">R</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">T</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">Y</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">U</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">I</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">O</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">P</span>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">{'{'}</span>
              <span className="leading-none select-none">{'['}</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">{'}'}</span>
              <span className="leading-none select-none">{']'}</span>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs leading-none select-none">|</span>
              <span className="leading-none select-none">\</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-full items-start justify-between rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <div className="flex h-full flex-col justify-between">
              <span className="bg-clickable block size-1 rounded-full" />
              <span className="text-xs select-none">caps lock</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">A</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">S</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">D</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">F</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">G</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">H</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">J</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">K</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">L</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs leading-none select-none">:</span>
                <span className="leading-none select-none">;</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs leading-none select-none">"</span>
                <span className="leading-none select-none">'</span>
              </div>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-full items-end justify-end rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="text-xs select-none">return</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-1">
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-full items-end justify-start rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="text-xs select-none">shift</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">Z</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">X</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">C</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">V</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">B</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">N</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">M</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs leading-none select-none">{'<'}</span>
                <span className="leading-none select-none">,</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs leading-none select-none">{'>'}</span>
                <span className="leading-none select-none">.</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs leading-none select-none">{'?'}</span>
                <span className="leading-none select-none">/</span>
              </div>
            </div>
          </div>
          <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-full items-end justify-end rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
            <span className="select-none">shift</span>
          </div>
        </div>
        <div className="flex items-end gap-1">
          <div className="flex items-center gap-1">
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 items-end justify-start rounded-md border p-1 text-xs transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="text-xs select-none">fn</span>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-max items-end justify-start rounded-md border p-1 transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex h-full flex-col items-end justify-between">
                <span className="text-xs leading-none select-none">^</span>
                <span className="text-xs select-none">control</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-max items-end justify-start rounded-md border p-1 transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex h-full flex-col items-end justify-between">
                <span className="text-xs leading-none select-none">⌥</span>
                <span className="text-xs select-none">option</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-max items-end justify-start rounded-md border p-1 transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex h-full flex-col items-end justify-between">
                <span className="text-xs leading-none select-none">⌘</span>
                <span className="text-xs select-none">command</span>
              </div>
            </div>
          </div>
          <div className="border-clickable/30 bg-keyboard-key-background size-11 w-full rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]"></div>
          <div className="flex items-end gap-1">
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-max items-end justify-start rounded-md border p-1 transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex h-full flex-col items-start justify-between">
                <span className="text-xs leading-none select-none">⌘</span>
                <span className="text-xs select-none">command</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex size-11 w-max items-end justify-start rounded-md border p-1 transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <div className="flex h-full flex-col items-start justify-between">
                <span className="text-xs leading-none select-none">⌥</span>
                <span className="text-xs select-none">option</span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex h-4.5 w-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">
                <KeyboardArrowIcon className="size-2.5 rotate-180" />
                <span className="sr-only">Arrow left</span>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex h-5 w-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
                <span className="select-none">
                  <KeyboardArrowIcon className="size-2.5 -rotate-90" />
                  <span className="sr-only">Arrow up</span>
                </span>
              </div>
              <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex h-5 w-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
                <span className="select-none">
                  <KeyboardArrowIcon className="size-2.5 rotate-90" />
                  <span className="sr-only">Arrow down</span>
                </span>
              </div>
            </div>
            <div className="border-clickable/30 group bg-keyboard-key-background text-clickable flex h-4.5 w-11 items-center justify-center rounded-md border transition-all hover:cursor-pointer hover:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)] active:scale-95 pointer-coarse:active:bg-[color-mix(in_oklab,var(--color-keyboard-key-background),var(--color-black)_10%)]">
              <span className="select-none">
                <KeyboardArrowIcon className="size-2.5" />
                <span className="sr-only">Arrow right</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
