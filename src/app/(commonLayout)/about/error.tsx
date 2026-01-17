'use client'

import { Button } from "@/components/ui/button"

export default function AboutError({ error, reset }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    console.log(error)

    return (
        <>
            <div>AboutError</div>
            <Button
                onClick={() => reset()}
            >
                Retry
            </Button>
        </>
    )
}
