import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Card className="bg-background dark:bg-violet-400">
        <CardHeader>
          Card
        </CardHeader>
        <CardContent>
          <Link href={"/about"}>
            <Button
              variant={"outline"}
            >
              Click
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}