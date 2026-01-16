import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Card className="bg-background">
        <CardHeader>
          Card
        </CardHeader>
        <CardContent>
          <Button
          variant={"outline"}
          >
            Click
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
