import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Buttons</h1>
        <p className="text-muted-foreground">
          Interactive button components with different styles and states.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg">Large</Button>
          <Button>Default</Button>
          <Button size="sm">Small</Button>
        </div>
      </div>
    </div>
  );
}
