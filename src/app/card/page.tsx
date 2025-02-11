import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Cards</h1>
        <p className="text-muted-foreground">
          Card components for displaying content.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Simple Card */}
        <Card>
          <CardHeader>
            <CardTitle>Simple Card</CardTitle>
            <CardDescription>
              Basic card with header and content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here.</p>
          </CardContent>
        </Card>

        {/* Interactive Card */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>Card with interactive elements</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has buttons in the footer.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>

        {/* Featured Card */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Featured Card</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Card with custom background
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has a custom background color.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
