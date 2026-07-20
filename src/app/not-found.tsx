import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">404 error</p>
      <h1 className="mt-4 text-5xl font-bold text-slate-950 dark:text-white">Page not found</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">The requested page does not exist or has been moved.</p>
      <ButtonLink href="/" className="mt-8">Return home</ButtonLink>
    </Container>
  );
}
