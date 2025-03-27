import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p>Hello Admin Dashboard</p>
      <div className="p-4">
        <Button size="default" variant="destructive">
          Click Me
        </Button>
      </div>
    </div>
  );
}
