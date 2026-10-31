"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

type EventName = "contact_cta_click" | "projects_cta_click" | "case_cta_click";
type TrackedLinkProps = ComponentProps<typeof Link> & {
  analyticsEvent: EventName;
  analyticsContext: string;
};

export function TrackedLink({ analyticsEvent, analyticsContext, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={event => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          // Use fixed, non-personal parameters only. Custom events require Vercel Pro/Enterprise.
          track(analyticsEvent, { source: analyticsContext });
        }
      }}
    />
  );
}
