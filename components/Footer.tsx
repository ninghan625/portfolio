export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-[20px]">
      <p className="font-['Heiti_SC','PingFang_SC','Helvetica',sans-serif] text-[15px] text-[#8f959e]">
        Where to find me
      </p>
      <div className="flex w-full flex-col gap-[8px]">
        <a
          href="https://www.linkedin.com/in/claire-han-604194114/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-fit items-center gap-[8px] self-start cursor-pointer text-[#1f2329] hover:text-[#0080FF] transition-colors"
        >
          <svg
            className="h-[16px] w-[16px]"
            viewBox="0 0 24 24"
            aria-label="LinkedIn"
          >
            <path
              fill="currentColor"
              d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 21h4V9H3v12Zm7.5-12h3.7v1.64h.05c.52-.98 1.8-2.01 3.7-2.01 3.95 0 4.68 2.6 4.68 5.98V21h-4v-5.11c0-1.22-.02-2.79-1.7-2.79-1.71 0-1.97 1.33-1.97 2.7V21h-4V9Z"
            />
          </svg>
          <p className="text-[16px]">
            Claire Han
          </p>
        </a>
        <a
          href="mailto:clairehan4869@gmail.com"
          className="group inline-flex w-fit items-center gap-[8px] self-start cursor-pointer text-[#1f2329] hover:text-[#0080FF] transition-colors"
        >
          <svg
            className="shrink-0 p-0"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M13.1333 2.5C13.9433 2.50003 14.6001 3.1568 14.6001 3.9668V12.0332C14.6001 12.8432 13.9433 13.5 13.1333 13.5H2.8667C2.05668 13.5 1.3999 12.8432 1.3999 12.0332V3.9668C1.3999 3.15678 2.05668 2.5 2.8667 2.5H13.1333ZM4.22998 5.31738C3.96347 5.17209 3.62944 5.26981 3.48389 5.53613C3.33857 5.80255 3.43653 6.13656 3.70264 6.28223L7.73682 8.48242C7.90088 8.57181 8.09913 8.57184 8.26318 8.48242L12.2964 6.28223C12.5629 6.13672 12.6615 5.80272 12.5161 5.53613C12.3706 5.26981 12.0365 5.17213 11.77 5.31738L7.99951 7.37305L4.22998 5.31738Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-[16px]">
            clairehan4869@gmail.com
          </p>
        </a>
      </div>
    </footer>
  );
}
