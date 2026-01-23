import { cookies } from "next/headers"


export default async function AboutPage() {

    const cookieStore = await cookies();

    console.log(cookieStore.toString());

    const res = await fetch("http://localhost:8080/api/auth/get-session", {
        headers: {
            Cookie: cookieStore.toString()
        },
        cache: "no-store"
    });

    const session = await res.json();

    console.log(session)

    const res2 = await fetch('http://localhost:8080/post', {
        headers: {
            'content-type': 'application/json'
        }
    });

    const data = await res2.json();

    console.log(data)

    return (
        <div>AboutPage</div>
    )
}
