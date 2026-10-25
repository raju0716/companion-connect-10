/**
 * Compatibility layer mirroring the small react-router-dom API surface the
 * legacy page components use, implemented on top of the TanStack Router.
 * Keep it thin: new code should import from "@tanstack/react-router" directly.
 */
import { useCallback, type AnchorHTMLAttributes, type MouseEvent, type Ref } from "react";
import { useRouter, useRouterState, useParams as useTanStackParams } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type NavigateOptions = { replace?: boolean; state?: unknown };

export function useLocation() {
  const location = useRouterState({ select: (s) => s.location });
  return location;
}

export function useParams<
  T extends Record<string, string | undefined> = Record<string, string | undefined>,
>(): T {
  return useTanStackParams({ strict: false }) as unknown as T;
}

export function useNavigate() {
  const router = useRouter();
  return useCallback(
    (to: string | number, options?: NavigateOptions) => {
      if (typeof to === "number") {
        router.history.go(to);
        return;
      }
      if (options?.replace) {
        router.history.replace(to);
      } else {
        router.history.push(to);
        window.scrollTo(0, 0);
      }
    },
    [router],
  );
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  state?: unknown;
  ref?: Ref<HTMLAnchorElement>;
}

export function Link({ to, replace, onClick, children, ref, ...rest }: LinkProps) {
  const router = useRouter();
  const isExternal =
    !to || to.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(to) || to.startsWith("//");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || isExternal) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (replace) {
      router.history.replace(to);
    } else {
      router.history.push(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <a ref={ref} href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export interface NavLinkProps extends Omit<LinkProps, "className"> {
  end?: boolean;
  className?: string | ((ctx: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
}

export function NavLink({
  to,
  end,
  className,
  activeClassName,
  pendingClassName: _pendingClassName,
  children,
  ...rest
}: NavLinkProps) {
  const { pathname } = useLocation();
  const isActive = end
    ? pathname === to
    : pathname === to || pathname.startsWith(to.endsWith("/") ? to : `${to}/`);
  const resolved = typeof className === "function" ? className({ isActive, isPending: false }) : className;

  return (
    <Link to={to} className={cn(resolved, isActive && activeClassName)} {...rest}>
      {children}
    </Link>
  );
}

export { Outlet } from "@tanstack/react-router";
