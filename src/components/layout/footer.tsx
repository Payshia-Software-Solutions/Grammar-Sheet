export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GrammarWise. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
